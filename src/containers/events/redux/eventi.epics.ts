import {NEVER, Observable} from 'rxjs'
import {genericResponseNormalizer, IGenericResponse, ISuccessFetchAction} from 'fetch-with-redux-observable'
import {ofType} from 'redux-observable'
import {fetchAllEventsListAction, fetchPaymentAction} from './eventi.actions'
import {map, mergeMap} from 'rxjs/operators'
import {HashHistory} from '../../../index'
import {EVENTS_PATH} from '../../../routes'
import {addError} from 'fetch-with-redux-observable/dist/user-message/user-message.actions'

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

export const fetchPaymentFailureEpic = (action$: Observable<ISuccessFetchAction<any>>) =>
    action$.pipe(
        ofType(fetchPaymentAction.failureActionType),
        map((action)=>action.payload),
        mergeMap((payload) => {
            const errorMessage= payload.response.messages[0].text
            return [addError({userMessage:errorMessage})]
        })
    )

