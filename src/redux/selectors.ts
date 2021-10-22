import {IRootState} from './reducers'
import {IProfile} from '../containers/profile/profile.types'

export const currentDialogRootSelector = (state: IRootState) => state.currentDialog

export const profileRootSelector = (state: IRootState): IProfile | null => state.profile