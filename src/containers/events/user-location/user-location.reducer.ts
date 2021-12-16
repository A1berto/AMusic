import {IAction} from 'fetch-with-redux-observable'
import {UPDATE_USER_LOCATION} from './user-location.actions'
import {IGeoLocation} from '../eventi.types'


export const userLocationReducer = (state: IGeoLocation | null= null, action: IAction<IGeoLocation>): IGeoLocation | null => {
    switch (action.type) {
        case UPDATE_USER_LOCATION:
            return action.payload
        default:
            return state
    }
}