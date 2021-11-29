import {combineEpics, Epic} from 'redux-observable'
import {generalSpinnerEpics, switchMapFetchEpics} from 'fetch-with-redux-observable'
import {
    changeProfilePasswordAction,
    fetchProfileAction,
    updateProfileAction
} from '../containers/profile/redux/profile.actions'
import {fetchPaymentAction} from '../containers/eventi/redux/eventi.actions'
import {
    fetchAddFriendAction,
    fetchFilteredFriendsListAction,
    fetchFriendsListAction,
    fetchSuggestedFriendsListAction
} from '../containers/friends/redux/friends.actions'
import {genericMessagesEpic} from '../components/messages/messages.epics'

// root epics
export const rootEpics: Epic = combineEpics<Epic>(
    generalSpinnerEpics,
    genericMessagesEpic,

    //fetch
    switchMapFetchEpics(fetchProfileAction.pendingActionTypeWithSpinner),
    switchMapFetchEpics(updateProfileAction.pendingActionTypeWithSpinner),
    switchMapFetchEpics(changeProfilePasswordAction.pendingActionTypeWithSpinner),
    switchMapFetchEpics(fetchPaymentAction.pendingActionTypeWithSpinner),
    switchMapFetchEpics(fetchFriendsListAction.pendingActionTypeWithSpinner),
    switchMapFetchEpics(fetchFilteredFriendsListAction.pendingActionTypeWithSpinner),
    switchMapFetchEpics(fetchSuggestedFriendsListAction.pendingActionTypeWithSpinner),
    switchMapFetchEpics(fetchAddFriendAction.pendingActionTypeWithSpinner),
)
