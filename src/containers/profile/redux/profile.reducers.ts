import {genericResponseNormalizer, IAction, IGenericResponse} from 'fetch-with-redux-observable'
import {IProfile} from '../profile.types'
import {fetchProfileAction} from './profile.actions'


type ProfileActionReducerTypes = IGenericResponse<IProfile>
export const profileReducers = (state: IProfile | null = null, action: IAction<ProfileActionReducerTypes>): IProfile | null => {
    switch (action.type) {
        case fetchProfileAction.successActionType:
            return genericResponseNormalizer(action.payload)
        default:
            return state
    }
}


/*
export const profileReducers = (state: IProfile | null = null, action: IAction<ProfileActionReducerTypes>): IProfile | null => {
    switch (action.type) {
        case fetchProfileAction.successActionType:
            return genericResponseNormalizer(action.payload)
        case SET_PROFILE_ROLE_ACTION:
            //@ts-ignore
            return {
                ...state,
                //@ts-ignore   FIXME interface
                ruolo: action.payload.ruolo, codiceUtente: action.payload.codiceUtente
            }
        case SET_CODICE_UTENTE_ACTION:
            //@ts-ignore
            return {...state, codiceUtente: (action.payload as string)}
        default:
            return state
    }
}*/
