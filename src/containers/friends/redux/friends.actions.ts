import {DEFAULT_REQUEST_ID, fetchActionFactory, isRequestInPending} from 'fetch-with-redux-observable'
import {
    FETCH_ADD_FRIEND_API, FETCH_DELETE_FRIEND_API,
    FETCH_FILTERED_FRIENDS_LIST_API,
    FETCH_FRIENDS_LIST_API,
    FETCH_SUGGESTED_FRIENDS_LIST_API
} from '../../../fetch.constants'

export const FETCH_FRIENDS_LIST_ACTION = 'FETCH_FRIENDS_LIST_ACTION'
export const fetchFriendsListAction = fetchActionFactory(FETCH_FRIENDS_LIST_API, FETCH_FRIENDS_LIST_ACTION)
export const isFetchFriendsListPendingSelector = isRequestInPending(fetchFriendsListAction.pendingActionTypeWithSpinner, DEFAULT_REQUEST_ID)

export const FETCH_SUGGESTED_FRIENDS_LIST_ACTION = 'FETCH_SUGGESTED_FRIENDS_LIST_ACTION'
export const fetchSuggestedFriendsListAction = fetchActionFactory(FETCH_SUGGESTED_FRIENDS_LIST_API, FETCH_SUGGESTED_FRIENDS_LIST_ACTION)
export const isFetchSuggestedFriendsListPendingSelector = isRequestInPending(fetchSuggestedFriendsListAction.pendingActionTypeWithSpinner, DEFAULT_REQUEST_ID)

export const FETCH_FILTERED_FRIENDS_LIST_ACTION = 'FETCH_FILTERED_FRIENDS_LIST_ACTION'
export const fetchFilteredFriendsListAction = fetchActionFactory(FETCH_FILTERED_FRIENDS_LIST_API, FETCH_FILTERED_FRIENDS_LIST_ACTION)
export const isFetchFilteredFriendsListPendingSelector = isRequestInPending(fetchFilteredFriendsListAction.pendingActionTypeWithSpinner, DEFAULT_REQUEST_ID)

export const FETCH_ADD_FRIEND = 'FETCH_ADD_FRIEND'
export const fetchAddFriendAction = fetchActionFactory(FETCH_ADD_FRIEND_API, FETCH_ADD_FRIEND)
export const isFetchAddFriendPendingSelector = (idFriend:string)=> isRequestInPending(fetchAddFriendAction.pendingActionTypeWithSpinner, `${idFriend}`)

export const FETCH_DELETE_FRIEND = 'FETCH_DELETE_FRIEND'
export const fetchDeleteFriendAction = fetchActionFactory(FETCH_DELETE_FRIEND_API, FETCH_DELETE_FRIEND)
export const isFetchDeleteFriendPendingSelector = (idFriend:string)=> isRequestInPending(fetchDeleteFriendAction.pendingActionTypeWithSpinner, `${idFriend}`)
