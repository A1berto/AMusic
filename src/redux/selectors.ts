import {IRootState} from './reducers'
import {IProfile} from '../containers/profile/profile.types'
import {IEventReducer} from '../containers/events/redux/eventi.reducers'
import {IFriendsCombineReducer} from '../containers/friends/redux/friends.reducers'

export const currentDialogRootSelector = (state: IRootState) => state.currentDialog

export const profileRootSelector = (state: IRootState): IProfile | null => state.profile

export const eventsRootSelector = (state: IRootState): IEventReducer | null => state.events

export const friendsRootSelector = (state: IRootState): IFriendsCombineReducer => state.friends