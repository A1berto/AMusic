import {IRootState} from './reducers'
import {IProfile} from '../containers/profile/profile.types'
import {IEventReducer} from '../containers/eventi/redux/eventi.reducers'

export const currentDialogRootSelector = (state: IRootState) => state.currentDialog

export const profileRootSelector = (state: IRootState): IProfile | null => state.profile

export const eventsRootSelector = (state: IRootState): IEventReducer | null => state.events

export const friendsListRootSelector = (state: IRootState): any | null => state.friendsList