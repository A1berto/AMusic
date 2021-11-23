import {DEFAULT_REQUEST_ID, fetchActionFactory, isRequestInPending} from 'fetch-with-redux-observable'
import {FETCH_FILTERED_FRIENDS_LIST_API, FETCH_FRIENDS_LIST_API} from '../../../fetch.constants'

export const FETCH_FRIENDS_LIST_ACTION = 'FETCH_FRIENDS_LIST_ACTION'
export const fetchFriendsListAction = fetchActionFactory(FETCH_FRIENDS_LIST_API, FETCH_FRIENDS_LIST_ACTION)
export const isFetchFriendsListPendingSelector = isRequestInPending(fetchFriendsListAction.pendingActionTypeWithSpinner, DEFAULT_REQUEST_ID)

export const FETCH_FILTERED_FRIENDS_LIST_ACTION = 'FETCH_FILTERED_FRIENDS_LIST_ACTION'
export const fetchFilteredFriendsListAction = fetchActionFactory(FETCH_FILTERED_FRIENDS_LIST_API, FETCH_FILTERED_FRIENDS_LIST_ACTION)
export const isFetchFilteredFriendsListPendingSelector = isRequestInPending(fetchFilteredFriendsListAction.pendingActionTypeWithSpinner, DEFAULT_REQUEST_ID)
