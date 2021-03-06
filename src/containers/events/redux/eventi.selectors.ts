import {createSelector} from 'reselect'
import {eventsRootSelector} from '../../../redux/selectors'
import {IEventReducer} from './eventi.reducers'
import {IEvent, IEventHistory} from '../eventi.types'

export const paymentClientSecretSelector = createSelector(
    eventsRootSelector,
    (events: IEventReducer | null): any => events?.paymentClientSecret
)

export const eventsListSelector = createSelector(
    eventsRootSelector,
    (events: IEventReducer | null): IEvent[] => events?.eventsList ?? []
)

export const eventsHistoryListSelector = createSelector(
    eventsRootSelector,
    (events: IEventReducer | null): IEventHistory[] => events?.eventsHistory ?? []
)