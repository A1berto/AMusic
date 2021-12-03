import {NEVER, Observable} from 'rxjs'
import {IGenericResponse, ISuccessFetchAction} from 'fetch-with-redux-observable'
import {ofType} from 'redux-observable'
import {fetchAllEventsListAction} from './eventi.actions'
import {mergeMap} from 'rxjs/operators'
import {HashHistory} from '../../../index'
import {EVENTS_PATH} from '../../../routes'

export const allEventsListSuccessEpic = (action$: Observable<ISuccessFetchAction<IGenericResponse<any>>>) =>
    action$.pipe(
        ofType(fetchAllEventsListAction.successActionType),
        mergeMap((action) => {
            console.info(`Redirect to ${EVENTS_PATH}`)
            //@ts-ignore
            action.meta.meta.setAnchorEl && action.meta.meta.setAnchorEl(null)
            HashHistory.push(EVENTS_PATH)
            return NEVER
        })
    )

