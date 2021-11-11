import {createSelector} from 'reselect'
import {eventsRootSelector} from '../../../redux/selectors'
import {IEventReducer} from './eventi.reducers'

export const paymentClientSecretSelector = createSelector(
    eventsRootSelector,
    (events: IEventReducer | null): any => events?.paymentClientSecret
)

export const eventsListSelector = createSelector(
    eventsRootSelector,
    (events: IEventReducer | null): any => events?.eventsList
)