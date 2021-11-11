import {combineReducers} from 'redux'
import {currentDialogReducer, ICurrentDialog} from './dialogs/current-dialog.reducers'
import {IProfile} from '../containers/profile/profile.types'
import {profileReducer} from '../containers/profile/redux/profile.reducer'
import {eventsCombineReducer, IEventReducer} from '../containers/eventi/redux/eventi.reducers'

export interface IRootState {
    currentDialog: ICurrentDialog | null
    profile: IProfile | null
    events: IEventReducer
}

export const rootReducer = combineReducers<IRootState>({
    currentDialog: currentDialogReducer,
    profile: profileReducer,
    events: eventsCombineReducer
})

