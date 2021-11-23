import {createSelector} from 'reselect'
import {friendsRootSelector} from '../../../redux/selectors'
import {IFriendsCombineReducer} from './friends.reducers'


export const friendsListSelector = createSelector(
    friendsRootSelector,
    (friends: IFriendsCombineReducer): any => friends?.friendsList
)

export const filteredFriendsListSelector = createSelector(
    friendsRootSelector,
    (friends: IFriendsCombineReducer): any => friends?.filteredFriendsList
)