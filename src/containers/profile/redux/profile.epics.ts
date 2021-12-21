import {NEVER, Observable} from 'rxjs'
import {DEFAULT_REQUEST_ID, IGenericResponse, ISuccessFetchAction} from 'fetch-with-redux-observable'
import {ofType, StateObservable} from 'redux-observable'
import {fetchNearEventsListAction} from '../../events/redux/eventi.actions'
import {mergeMap} from 'rxjs/operators'
import {IProfile} from '../profile.types'
import {changeProfileImageAction, fetchProfileAction} from './profile.actions'
import {LOGIN_OR_SIGNIN_PATH} from '../../../routes'
import {addSuccess} from 'fetch-with-redux-observable/dist/user-message/user-message.actions'
import {closeCurrentDialog} from '../../../redux/dialogs/current-dialogs.actions'
import {IRootState} from '../../../redux/reducer'
import {userLocationSelector} from '../../events/user-location/user-location.selectors'


export const profileSuccessEpic = (action$: Observable<ISuccessFetchAction<IGenericResponse<IProfile>>>, state$: StateObservable<IRootState>) =>
    action$.pipe(
        ofType(fetchProfileAction.successActionType),
        mergeMap(() => {
            if (window.location.hash.includes(LOGIN_OR_SIGNIN_PATH)) {
                const location = userLocationSelector(state$.value)
                return [fetchNearEventsListAction.build(
                    null,
                    DEFAULT_REQUEST_ID,
                    undefined,
                    {lat: location?.latitude ?? 41.9027835, lon: location?.longitude ?? 12.4963655}
                )]
            }
            return NEVER
        })
    )

export const editProfileImageSuccessEpic = (action$: Observable<ISuccessFetchAction<IGenericResponse<IProfile>>>) =>
    action$.pipe(
        ofType(changeProfileImageAction.successActionType),
        mergeMap((response) => {
            console.log('response Upload Photo>>', response)
            return [
                fetchProfileAction.build(null, DEFAULT_REQUEST_ID),
                addSuccess({userMessage: 'Documento caricato con successo'}),
                closeCurrentDialog()
            ]
        })
    )