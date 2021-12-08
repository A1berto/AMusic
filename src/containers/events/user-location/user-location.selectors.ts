import {createSelector} from 'reselect'
import {eventsRootSelector} from '../../../redux/selectors'


export const userLocationSelector = createSelector(
    eventsRootSelector,
    (events) => events?.userLocation
)
