import {IUserLocationReducer} from './user-location.reducer'


export const UPDATE_USER_LOCATION = 'UPDATE_USER_LOCATION'
export const updateUserLocation = (payload: IUserLocationReducer) => ({type: UPDATE_USER_LOCATION, payload})
