import {combineReducers} from 'redux'
import {currentDialogReducer, ICurrentDialog} from './dialogs/current-dialog.reducers'
import {IProfile} from '../containers/profile/profile.types'
import {profileReducers} from '../containers/profile/redux/profile.reducers'

export interface IRootState {
    currentDialog: ICurrentDialog | null
    profile: IProfile | null
}

export const rootReducer = combineReducers<IRootState>({
    currentDialog: currentDialogReducer,
    profile: profileReducers
})

