import {IAction} from 'fetch-with-redux-observable'
import {Reducer} from 'redux'
import {CLEAR_AMUSIC_STATE} from './login.actions'
import {IRootState, rootReducer} from '../../../redux/reducer'

export const AMusicReducer: Reducer<any, any> = (state: IRootState, action: IAction) => {
    if (action.type === CLEAR_AMUSIC_STATE) {
        state = {
            ...state,
            currentDialog: null,
            /*@ts-ignore*/
            core: {},
            profile: {
                accountNonExpired: false,
                accountNonLocked: false,
                createDate: '',
                credentialsNonExpired: false,
                displayName: '',
                email: '',
                emailVerified: false,
                enabled: false,
                id: '',
                lastLogin: '',
                name: '',
                phoneNumber: '',
                photoUrl: '',
                surname: ''
            },
            events: {
                eventsList: [],
                eventsHistory: [],
                paymentClientSecret: '',
                userLocation:null
            },
            friends: {
                friendsList: [],
                filteredFriendsList: [],
                suggestedFriendList: []
            },
        }
    }
    return rootReducer(state, action)
}