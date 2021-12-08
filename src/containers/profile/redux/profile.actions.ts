import {DEFAULT_REQUEST_ID, fetchActionFactory, isRequestInPending} from 'fetch-with-redux-observable'
import {CHANGE_PROFILE_PASSWORD_API, FETCH_PROFILE_API, UPDATE_PROFILE_API} from '../../../fetch.constants'

export const FETCH_PROFILE_ACTION = 'FETCH_PROFILE_ACTION'
export const fetchProfileAction = fetchActionFactory(FETCH_PROFILE_API, FETCH_PROFILE_ACTION)
export const isFetchProfilePendingSelector = isRequestInPending(fetchProfileAction.pendingActionTypeWithSpinner, DEFAULT_REQUEST_ID)

export const UPDATE_PROFILE_ACTION = 'UPDATE_PROFILE_ACTION'
export const updateProfileAction = fetchActionFactory(UPDATE_PROFILE_API, UPDATE_PROFILE_ACTION)
export const isUpdateProfilePendingSelector = isRequestInPending(updateProfileAction.pendingActionTypeWithSpinner, DEFAULT_REQUEST_ID)

export const CHANGE_PROFILE_PASSWORD = 'CHANGE_PROFILE_PASSWORD'
export const changeProfilePasswordAction = fetchActionFactory(CHANGE_PROFILE_PASSWORD_API, CHANGE_PROFILE_PASSWORD)
export const isChangeProfilePasswordPendingSelector = isRequestInPending(changeProfilePasswordAction.pendingActionTypeWithSpinner, DEFAULT_REQUEST_ID)