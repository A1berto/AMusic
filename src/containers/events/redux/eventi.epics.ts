import {NEVER, Observable} from 'rxjs'
import {IFailureFetchAction, IGenericResponse, ISuccessFetchAction} from 'fetch-with-redux-observable'
import {ofType} from 'redux-observable'
import {fetchAllEventsListAction, fetchEventsHistoryListAction, fetchPaymentAction} from './eventi.actions'
import {map, mergeMap} from 'rxjs/operators'
import {HashHistory} from '../../../index'
import {EVENTS_HISTORY_PATH, EVENTS_PATH} from '../../../routes'
import {addError} from 'fetch-with-redux-observable/dist/user-message/user-message.actions'
import {IEvent} from '../eventi.types'

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

export const fetchPaymentFailureEpic = (action$: Observable<IFailureFetchAction>) =>
    action$.pipe(
        ofType(fetchPaymentAction.failureActionType),
        map((action: IFailureFetchAction) => action.payload),
        map((payload) => {
            const errorMessage = payload.response.messages[0].text ?? ''
            //TODO chiedere a vito perchè non miparte questo error e mi parte uno generico
            return addError({userMessage: errorMessage})
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
