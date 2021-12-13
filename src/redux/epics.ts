import {combineEpics, Epic} from 'redux-observable'
import {generalSpinnerEpics, switchMapFetchEpics} from 'fetch-with-redux-observable'
import {
    changeProfileImageAction,
    changeProfilePasswordAction,
    fetchProfileAction,
    updateProfileAction
} from '../containers/profile/redux/profile.actions'
import {
    fetchEventsListAction,
    fetchEventsHistoryListAction,
    fetchPaymentAction, fetchNearEventsListAction
} from '../containers/events/redux/eventi.actions'
import {
    fetchAddFriendAction, fetchDeleteFriendAction,
    fetchFilteredFriendsListAction,
    fetchFriendsListAction,
    fetchSuggestedFriendsListAction
} from '../containers/friends/redux/friends.actions'
import {genericMessagesEpic} from '../commons/messages/messages.epics'
import {
    fetchAddFriendsSuccessEpic,
    fetchAllFriendsListSuccessEpic,
    fetchSuggestedFriendsListSuccessEpic
} from '../containers/friends/redux/friends.epics'
import {
    allEventsListSuccessEpic,
    fetcheventsHistoryListSuccessEpic,
    fetchPaymentFailureEpic
} from '../containers/events/redux/eventi.epics'
import {profileSuccessEpic} from '../containers/profile/redux/profile.epics'

// root epics
export const rootEpics: Epic = combineEpics<Epic>(
    generalSpinnerEpics,
    genericMessagesEpic,
    profileSuccessEpic,
    allEventsListSuccessEpic,
    fetchPaymentFailureEpic,
    fetchAllFriendsListSuccessEpic,
    fetcheventsHistoryListSuccessEpic,
    fetchAddFriendsSuccessEpic,
    fetchSuggestedFriendsListSuccessEpic,

    //fetch
    switchMapFetchEpics(fetchProfileAction.pendingActionTypeWithSpinner),
    switchMapFetchEpics(updateProfileAction.pendingActionTypeWithSpinner),
    switchMapFetchEpics(changeProfilePasswordAction.pendingActionTypeWithSpinner),
    switchMapFetchEpics(changeProfileImageAction.pendingActionTypeWithSpinner),

    switchMapFetchEpics(fetchEventsListAction.pendingActionTypeWithSpinner),
    switchMapFetchEpics(fetchNearEventsListAction.pendingActionTypeWithSpinner),
    switchMapFetchEpics(fetchEventsHistoryListAction.pendingActionTypeWithSpinner),
    switchMapFetchEpics(fetchPaymentAction.pendingActionTypeWithSpinner),

    switchMapFetchEpics(fetchFriendsListAction.pendingActionTypeWithSpinner),
    switchMapFetchEpics(fetchFilteredFriendsListAction.pendingActionTypeWithSpinner),
    switchMapFetchEpics(fetchSuggestedFriendsListAction.pendingActionTypeWithSpinner),
    switchMapFetchEpics(fetchAddFriendAction.pendingActionTypeWithSpinner),
    switchMapFetchEpics(fetchDeleteFriendAction.pendingActionTypeWithSpinner),
)
