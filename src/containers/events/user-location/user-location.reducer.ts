import {IAction} from 'fetch-with-redux-observable'
import {UPDATE_USER_LOCATION} from './user-location.actions'
import {IGeoLocation} from '../eventi.types'


export interface IUserLocationReducer extends IGeoLocation {
}

export const userLocationReducer = (state: IUserLocationReducer | null = null, action: IAction<IUserLocationReducer>): IUserLocationReducer | null => {
    switch (action.type) {
        case UPDATE_USER_LOCATION:
            return action.payload
        default:
            return state
    }
}