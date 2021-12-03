import {combineEpics, Epic} from 'redux-observable'
import {generalSpinnerEpics, switchMapFetchEpics} from 'fetch-with-redux-observable'
import {
    changeProfilePasswordAction,
    fetchProfileAction,
    updateProfileAction
} from '../containers/profile/redux/profile.actions'
import {fetchAllEventsListAction, fetchPaymentAction} from '../containers/events/redux/eventi.actions'
import {
    fetchAddFriendAction,
    fetchFilteredFriendsListAction,
    fetchFriendsListAction,
    fetchSuggestedFriendsListAction
} from '../containers/friends/redux/friends.actions'
import {genericMessagesEpic} from '../commons/messages/messages.epics'
import {
    fetchAllFriendsListSuccessEpic,
    fetchSuggestedFriendsListSuccessEpic
} from '../containers/friends/redux/friends.epics'
import {allEventsListSuccessEpic} from '../containers/events/redux/eventi.epics'
import {profileSuccessEpic} from '../containers/profile/redux/profile.epics'

// root epics
export const rootEpics: Epic = combineEpics<Epic>(
    generalSpinnerEpics,
    genericMessagesEpic,
    profileSuccessEpic,
    allEventsListSuccessEpic,
    fetchAllFriendsListSuccessEpic,
    fetchSuggestedFriendsListSuccessEpic,

    //fetch
    switchMapFetchEpics(fetchProfileAction.pendingActionTypeWithSpinner),
    switchMapFetchEpics(updateProfileAction.pendingActionTypeWithSpinner),
    switchMapFetchEpics(changeProfilePasswordAction.pendingActionTypeWithSpinner),

    switchMapFetchEpics(fetchAllEventsListAction.pendingActionTypeWithSpinner),
    switchMapFetchEpics(fetchPaymentAction.pendingActionTypeWithSpinner),

    switchMapFetchEpics(fetchFriendsListAction.pendingActionTypeWithSpinner),
    switchMapFetchEpics(fetchFilteredFriendsListAction.pendingActionTypeWithSpinner),
    switchMapFetchEpics(fetchSuggestedFriendsListAction.pendingActionTypeWithSpinner),
    switchMapFetchEpics(fetchAddFriendAction.pendingActionTypeWithSpinner),
)
