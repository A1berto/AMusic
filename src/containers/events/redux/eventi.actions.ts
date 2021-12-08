import {DEFAULT_REQUEST_ID, fetchActionFactory, isRequestInPending} from 'fetch-with-redux-observable'
import {
    FETCH_EVENTS_LIST_API,
    FETCH_EVENTS_HISTORY_LIST_API,
    FETCH_PAYMENT_API,
    FETCH_NEAR_EVENTS_LIST_API
} from '../../../fetch.constants'


export const FETCH_PAYMENT_ACTION = 'FETCH_PAYMENT_ACTION'
export const fetchPaymentAction = fetchActionFactory(FETCH_PAYMENT_API, FETCH_PAYMENT_ACTION)
export const isFetchPaymentPendingSelector = isRequestInPending(fetchPaymentAction.pendingActionTypeWithSpinner, DEFAULT_REQUEST_ID)

export const RESET_STRIPE_CLIENT_SECRET_ACTION = 'RESET_STRIPE_CLIENT_SECRET_ACTION'
export const resetStripeClienteSecretAction = (payload:string) => ({
    type: RESET_STRIPE_CLIENT_SECRET_ACTION,
    payload
})

export const FETCH_EVENTS_LIST_ACTION = 'FETCH_EVENTS_LIST_ACTION'
export const fetchEventsListAction = fetchActionFactory(FETCH_EVENTS_LIST_API, FETCH_EVENTS_LIST_ACTION)
export const isFetchEventsListPendingSelector = isRequestInPending(fetchEventsListAction.pendingActionTypeWithSpinner, DEFAULT_REQUEST_ID)

export const FETCH_NEAR_EVENTS_LIST_ACTION = 'FETCH_NEAR_EVENTS_LIST_ACTION'
export const fetchNearEventsListAction = fetchActionFactory(FETCH_NEAR_EVENTS_LIST_API, FETCH_NEAR_EVENTS_LIST_ACTION)
export const isFetchNearEventsListPendingSelector = isRequestInPending(fetchNearEventsListAction.pendingActionTypeWithSpinner, DEFAULT_REQUEST_ID)

export const FETCH_EVENTS_HISTORY_LIST_ACTION = 'FETCH_EVENTS_HISTORY_LIST_ACTION'
export const fetchEventsHistoryListAction = fetchActionFactory(FETCH_EVENTS_HISTORY_LIST_API, FETCH_EVENTS_HISTORY_LIST_ACTION)
export const isFetchEventsHistoryListPendingSelector = isRequestInPending(fetchEventsHistoryListAction.pendingActionTypeWithSpinner, DEFAULT_REQUEST_ID)
