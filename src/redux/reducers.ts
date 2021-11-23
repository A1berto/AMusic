import {combineReducers} from 'redux'
import {currentDialogReducer, ICurrentDialog} from './dialogs/current-dialog.reducers'
import {IProfile} from '../containers/profile/profile.types'
import {profileReducer} from '../containers/profile/redux/profile.reducer'
import {eventsCombineReducer, IEventReducer} from '../containers/eventi/redux/eventi.reducers'
import {coreCombineReducer} from 'fetch-with-redux-observable/dist/reducer'
import {CORE_REDUCER_KEY} from 'fetch-with-redux-observable/dist/constants'
import {ICoreState} from 'fetch-with-redux-observable/dist/types'
import {friendsListReducer} from '../containers/friends/redux/friends.reducers'

export interface IRootState {
    core: ICoreState
    currentDialog: ICurrentDialog | null
    profile: IProfile | null
    events: IEventReducer
    friendsList: any | null
}

export const rootReducer = combineReducers<IRootState>({
    [CORE_REDUCER_KEY]: coreCombineReducer,
    currentDialog: currentDialogReducer,
    profile: profileReducer,
    friendsList: friendsListReducer,
    events: eventsCombineReducer
})

