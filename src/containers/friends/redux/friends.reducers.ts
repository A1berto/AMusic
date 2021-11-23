import {genericResponseNormalizer, IAction, IGenericResponse} from 'fetch-with-redux-observable'
import {fetchFilteredFriendsListAction, fetchFriendsListAction} from './friends.actions'
import {combineReducers} from 'redux'

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

type FilteredFriendsActionReducerTypes = IGenericResponse<any>
export const filteredFriendsListReducer = (state: any | null = null, action: IAction<FilteredFriendsActionReducerTypes>): any | null => {
    switch (action.type) {
        case fetchFilteredFriendsListAction.successActionType:
            return genericResponseNormalizer(action.payload)
        default:
            return state
    }
}

export const friendsCombineReducer = combineReducers<IFriendsCombineReducer>({
    friendsList: friendsListReducer,
    filteredFriendsList: filteredFriendsListReducer
})

export interface IFriendsCombineReducer {
    friendsList: any
    filteredFriendsList: any
}