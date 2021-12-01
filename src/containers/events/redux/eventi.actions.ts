import {DEFAULT_REQUEST_ID, fetchActionFactory, isRequestInPending} from 'fetch-with-redux-observable'
import {FETCH_PAYMENT_API} from '../../../fetch.constants'


export const FETCH_PAYMENT_ACTION = 'FETCH_PAYMENT_ACTION'
export const fetchPaymentAction = fetchActionFactory(FETCH_PAYMENT_API, FETCH_PAYMENT_ACTION)
export const isFetchPaymentPendingSelector = isRequestInPending(fetchPaymentAction.pendingActionTypeWithSpinner, DEFAULT_REQUEST_ID)
