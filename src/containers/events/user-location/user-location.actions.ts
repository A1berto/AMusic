import {IGeoLocation} from '../eventi.types'


export const UPDATE_USER_LOCATION = 'UPDATE_USER_LOCATION'
export const updateUserLocation = (payload: IGeoLocation) => ({type: UPDATE_USER_LOCATION, payload})
