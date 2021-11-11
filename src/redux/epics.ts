import {combineEpics, Epic} from 'redux-observable'
import {generalSpinnerEpics, switchMapFetchEpics} from 'fetch-with-redux-observable'
import {fetchProfileAction} from '../containers/profile/redux/profile.actions'
import {fetchPaymentAction} from '../containers/eventi/redux/eventi.actions'

// root epics
export const rootEpics: Epic = combineEpics<Epic>(
    generalSpinnerEpics,

    //fetch
    switchMapFetchEpics(fetchProfileAction.pendingActionTypeWithSpinner),
    switchMapFetchEpics(fetchPaymentAction.pendingActionTypeWithSpinner),
)
