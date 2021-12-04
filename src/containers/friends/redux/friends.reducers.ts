import {genericResponseNormalizer, IAction, IGenericResponse} from 'fetch-with-redux-observable'
import {
    fetchAddFriendAction,
    fetchDeleteFriendAction,
    fetchFilteredFriendsListAction,
    fetchFriendsListAction,
    fetchSuggestedFriendsListAction
} from './friends.actions'
import {combineReducers} from 'redux'
import {IFriend} from '../friends.types'

type FriendsActionReducerTypes = IGenericResponse<IFriend[]>
export const friendsListReducer = (state: IFriend[] = [], action: IAction<FriendsActionReducerTypes>): IFriend[] => {
    switch (action.type) {
        case fetchFriendsListAction.successActionType:
        case fetchDeleteFriendAction.successActionType:
        case fetchAddFriendAction.successActionType:
            return genericResponseNormalizer(action.payload) ?? []
        default:
            return state
    }
}

type FilteredFriendsActionReducerTypes = IGenericResponse<IFriend[]>
export const filteredFriendsListReducer = (state: IFriend[] = [], action: IAction<FilteredFriendsActionReducerTypes>): IFriend[] => {
    switch (action.type) {
        case fetchFilteredFriendsListAction.successActionType:
            return genericResponseNormalizer(action.payload) ?? []
        default:
            return state
    }
}

type suggestedFriendsListReducerTypes = IGenericResponse<IFriend[]>
export const suggestedFriendsListReducer = (state: IFriend[] = [], action: IAction<suggestedFriendsListReducerTypes>): IFriend[] => {
    switch (action.type) {
        case fetchSuggestedFriendsListAction.successActionType:
            return genericResponseNormalizer(action.payload) ?? []
        default:
            return state
    }
}

export const friendsCombineReducer = combineReducers<IFriendsCombineReducer>({
    friendsList: friendsListReducer,
    filteredFriendsList: filteredFriendsListReducer,
    suggestedFriendList: suggestedFriendsListReducer
})

export interface IFriendsCombineReducer {
    friendsList: IFriend[]
    filteredFriendsList: IFriend[]
    suggestedFriendList: IFriend[]
}