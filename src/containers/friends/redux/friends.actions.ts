import {DEFAULT_REQUEST_ID, fetchActionFactory, isRequestInPending} from 'fetch-with-redux-observable'
import {FETCH_FRIENDS_LIST_API} from '../../../fetch.constants'

export const FETCH_FRIENDS_LIST_ACTION = 'FETCH_FRIENDS_LIST_ACTION'
export const fetchFriendsListAction = fetchActionFactory(FETCH_FRIENDS_LIST_API, FETCH_FRIENDS_LIST_ACTION)
export const isFetchFriendsListPendingSelector = isRequestInPending(fetchFriendsListAction.pendingActionTypeWithSpinner, DEFAULT_REQUEST_ID)
