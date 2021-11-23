import {genericResponseNormalizer, IAction, IGenericResponse} from 'fetch-with-redux-observable'
import {fetchFriendsListAction} from './friends.actions'

//TODO cambiare interfaccia any
type FriendsActionReducerTypes = IGenericResponse<any>
export const friendsListReducer = (state: any | null = null, action: IAction<FriendsActionReducerTypes>): any | null => {
    switch (action.type) {
        case fetchFriendsListAction.successActionType:
            return genericResponseNormalizer(action.payload)
        default:
            return state
    }
}