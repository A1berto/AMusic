import {NEVER, Observable} from 'rxjs'
import {IGenericResponse, ISuccessFetchAction} from 'fetch-with-redux-observable'
import {ofType} from 'redux-observable'
import {
    fetchEventsHistoryListAction,
    fetchNearEventsListAction,
    fetchPaymentAction
} from './eventi.actions'
import {map, mergeMap} from 'rxjs/operators'
import {HashHistory} from '../../../index'
import {EVENTS_HISTORY_PATH, EVENTS_PATH} from '../../../routes'
import {IEvent} from '../eventi.types'
import {addError} from 'fetch-with-redux-observable/dist/user-message/user-message.actions'

export const allEventsListSuccessEpic = (action$: Observable<ISuccessFetchAction<IGenericResponse<any>>>) =>
    action$.pipe(
        ofType(fetchNearEventsListAction.successActionType),
        mergeMap((action) => {
            console.info(`Redirect to ${EVENTS_PATH}`)
            //@ts-ignore
            action.meta.meta.setAnchorEl && action.meta.meta.setAnchorEl(null)
            HashHistory.push(EVENTS_PATH)
            return NEVER
        })
    )


export const fetchPaymentFailureEpic = (action$: Observable<any>) =>
    action$.pipe(
        ofType(fetchPaymentAction.failureActionType),
        map((action: any) => action.payload),
        mergeMap((payload) => {
            const errorMessage = payload.response.messages[0].text ?? ''
            return [addError({userMessage:errorMessage})]
        })
    )

export const fetcheventsHistoryListSuccessEpic = (action$: Observable<ISuccessFetchAction<IGenericResponse<IEvent[]>>>) =>
    action$.pipe(
        ofType(fetchEventsHistoryListAction.successActionType),
        mergeMap((action) => {
            console.info(`Redirect to ${EVENTS_HISTORY_PATH}`)
            //@ts-ignore
            action.meta.meta.setAnchorEl && action.meta.meta.setAnchorEl(null)
            HashHistory.push(EVENTS_HISTORY_PATH)
            return NEVER
        })
    )
