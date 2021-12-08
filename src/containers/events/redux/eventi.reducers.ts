import {genericResponseNormalizer, IAction, IGenericResponse} from 'fetch-with-redux-observable'
import {
    fetchEventsHistoryListAction,
    fetchEventsListAction,
    fetchNearEventsListAction,
    fetchPaymentAction,
    RESET_STRIPE_CLIENT_SECRET_ACTION
} from './eventi.actions'
import {IEvent, IEventHistory, IGeoLocation} from '../eventi.types'
import {combineReducers} from 'redux'
import moment from 'moment/moment'
import {userLocationReducer} from '../user-location/user-location.reducer'


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
export const eventsListReducer = (state: IEvent[] = [], action: IAction<EventsActionReducerTypes>): IEvent[] => {
    switch (action.type) {
        case fetchEventsListAction.successActionType:
        case fetchNearEventsListAction.successActionType:
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

type EventsHistoryActionReducerTypes = IGenericResponse<IEventHistory[]>
export const eventsHistoryListReducer = (state: IEventHistory[] = [], action: IAction<EventsHistoryActionReducerTypes>): IEventHistory[] => {
    switch (action.type) {
        case fetchEventsHistoryListAction.successActionType:
            const response = genericResponseNormalizer(action.payload)
            return !!response ? response.reduce((agg: IEventHistory[], current: IEventHistory) => {
                return [
                    ...agg,
                    {
                        ...current,
                        datePayment: moment(current.datePayment).format('DD/MM/YYYY, h:mm:ss a'),
                        event: {
                            ...current.event,
                            eventDate: moment(current?.event?.eventDate).format('DD/MM/YYYY'),
                            eventDatePublished: moment(current?.event?.eventDatePublished).format('DD/MM/YYYY'),
                        },
                    }]
            }, []) : []
        default:
            return state
    }
}


export interface IEventReducer {
    eventsList: IEvent[]
    eventsHistory: IEventHistory[]
    paymentClientSecret: string
    userLocation: IGeoLocation | null
}

export const eventsCombineReducer = combineReducers<IEventReducer>({
    eventsList: eventsListReducer,
    paymentClientSecret: paymentClientSecretReducer,
    eventsHistory: eventsHistoryListReducer,
    userLocation: userLocationReducer
})