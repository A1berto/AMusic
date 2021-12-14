import {NEVER, Observable} from 'rxjs'
import {DEFAULT_REQUEST_ID, IGenericResponse, ISuccessFetchAction} from 'fetch-with-redux-observable'
import {ofType} from 'redux-observable'
import {fetchEventsListAction} from '../../events/redux/eventi.actions'
import {mergeMap} from 'rxjs/operators'
import {IProfile} from '../profile.types'
import {changeProfileImageAction, fetchProfileAction} from './profile.actions'
import {LOGIN_OR_SIGNIN_PATH} from '../../../routes'
import {addSuccess} from 'fetch-with-redux-observable/dist/user-message/user-message.actions'
import {closeCurrentDialog} from '../../../redux/dialogs/current-dialogs.actions'


export const profileSuccessEpic = (action$: Observable<ISuccessFetchAction<IGenericResponse<IProfile>>>) =>
    action$.pipe(
        ofType(fetchProfileAction.successActionType),
        mergeMap(() => {
            if (window.location.hash.includes(LOGIN_OR_SIGNIN_PATH)) {
                return [fetchEventsListAction.build(null, DEFAULT_REQUEST_ID)]
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