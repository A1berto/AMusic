import {genericResponseNormalizer, IAction, IGenericResponse} from 'fetch-with-redux-observable'
import {fetchPaymentAction} from './eventi.actions'
import {IEvent} from '../eventi.types'
import {combineReducers} from 'redux'

type PaymentIntentActionReducerTypes = IGenericResponse<any>
export const paymentClientSecretReducer = (state: any | null = null, action: IAction<PaymentIntentActionReducerTypes>): any | null => {
    switch (action.type) {
        case fetchPaymentAction.successActionType:
            return genericResponseNormalizer(action.payload).clientSecret
        default:
            return state
    }
}



type EventsActionReducerTypes = IGenericResponse<IEvent[]>
export const eventsListReducer = (state: IEvent[] | null = null, action: IAction<EventsActionReducerTypes>): IEvent[] | null => {
    switch (action.type) {
        default:
            return state
    }
}


export interface IEventReducer {
    eventsList: IEvent[] | null
    paymentClientSecret: string
}

export const eventsCombineReducer = combineReducers<IEventReducer>({
    eventsList: eventsListReducer,
    paymentClientSecret: paymentClientSecretReducer
})