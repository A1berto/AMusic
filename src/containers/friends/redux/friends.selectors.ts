import {createSelector} from 'reselect'
import {friendsRootSelector} from '../../../redux/selectors'
import {IFriendsCombineReducer} from './friends.reducers'
import {IFriend} from '../friends.types'


export const friendsListSelector = createSelector(
    friendsRootSelector,
    (friends: IFriendsCombineReducer): IFriend[] => friends?.friendsList
)

export const filteredFriendsListSelector = createSelector(
    friendsRootSelector,
    (friends: IFriendsCombineReducer): IFriend[] => friends?.filteredFriendsList
)

export const suggestedFriendsListSelector = createSelector(
    friendsRootSelector,
    (friends: IFriendsCombineReducer): IFriend[] => friends?.suggestedFriendList
)