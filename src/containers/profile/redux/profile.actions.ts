import {DEFAULT_REQUEST_ID, fetchActionFactory, isRequestInPending} from 'fetch-with-redux-observable'
import {FETCH_PROFILE_API} from '../../../fetch.constants'

export const FETCH_PROFILE_ACTION = 'FETCH_PROFILE_ACTION'
export const fetchProfileAction = fetchActionFactory(FETCH_PROFILE_API, FETCH_PROFILE_ACTION)
export const isFetchProfilePendingSelector = isRequestInPending(fetchProfileAction.pendingActionTypeWithSpinner, DEFAULT_REQUEST_ID)
