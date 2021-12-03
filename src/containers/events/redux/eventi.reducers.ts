import {genericResponseNormalizer, IAction, IGenericResponse} from 'fetch-with-redux-observable'
import {fetchAllEventsListAction, fetchPaymentAction, RESET_STRIPE_CLIENT_SECRET_ACTION} from './eventi.actions'
import {IEvent} from '../eventi.types'
import {combineReducers} from 'redux'
import moment from 'moment/moment'


type PaymentIntentActionReducerTypes = IGenericResponse<any>
export const paymentClientSecretReducer = (state: any | null = null, action: IAction<PaymentIntentActionReducerTypes>): any | null => {
    switch (action.type) {
        case fetchPaymentAction.successActionType:
            return genericResponseNormalizer(action.payload).clientSecret
        case fetchPaymentAction.failureActionType:
            return null
        case RESET_STRIPE_CLIENT_SECRET_ACTION:
            return action.payload
        default:
            return state
    }
}


type EventsActionReducerTypes = IGenericResponse<IEvent[]>
export const eventsListReducer = (state: IEvent[] | null = null, action: IAction<EventsActionReducerTypes>): IEvent[] | null => {
    switch (action.type) {
        case fetchAllEventsListAction.successActionType:
            const response = genericResponseNormalizer(action.payload)
            return !!response ? response.reduce((agg: IEvent[], current: IEvent) => {
                return [
                    ...agg,
                    {
                        ...current,
                        eventDate: moment(current.eventDate).format('DD/MM/YYYY'),
                        eventDatePublished: moment(current.eventDatePublished).format('DD/MM/YYYY'),
                    }
                ]
            }, []) : []
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