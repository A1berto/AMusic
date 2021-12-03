import {NEVER, Observable} from 'rxjs'
import {DEFAULT_REQUEST_ID, IGenericResponse, ISuccessFetchAction} from 'fetch-with-redux-observable'
import {ofType} from 'redux-observable'
import {fetchAllEventsListAction} from '../../events/redux/eventi.actions'
import {mergeMap} from 'rxjs/operators'
import {IProfile} from '../profile.types'
import {fetchProfileAction} from './profile.actions'
import {LOGIN_OR_SIGNIN_PATH} from '../../../routes'


export const profileSuccessEpic = (action$: Observable<ISuccessFetchAction<IGenericResponse<IProfile>>>) =>
    action$.pipe(
        ofType(fetchProfileAction.successActionType),
        mergeMap(() => {
            if (window.location.hash.includes(LOGIN_OR_SIGNIN_PATH)) {
                return [fetchAllEventsListAction.build(null, DEFAULT_REQUEST_ID)]
            }
            return NEVER
        })
    )