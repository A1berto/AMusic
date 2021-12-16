import {FAILURE_FETCH_SUFFIX, IAction, SUCCCESS_FETCH_SUFFIX} from 'fetch-with-redux-observable'
import {filter, mergeMap} from 'rxjs/operators'
import {NEVER, Observable} from 'rxjs'
import {IGenericEntities} from 'fetch-with-redux-observable/dist/types'
import {addError, addSuccess} from 'fetch-with-redux-observable/dist/user-message/user-message.actions'
import {
    changeProfileImageAction,
    changeProfilePasswordAction,
    fetchProfileAction,
    updateProfileAction
} from '../../containers/profile/redux/profile.actions'
import {
    fetchEventsHistoryListAction,
    fetchPaymentAction
} from '../../containers/events/redux/eventi.actions'
import {
    fetchAddFriendAction, fetchDeleteFriendAction,
    fetchFilteredFriendsListAction,
    fetchFriendsListAction,
    fetchSuggestedFriendsListAction
} from '../../containers/friends/redux/friends.actions'


export const TYPES_TO_MESSAGES_MAPPER: IGenericEntities<string> = {
    //GET PROFILE
    [fetchProfileAction.failureActionType]: 'Ops! Impossibile recuperare il profilo',
    //UPDATE PROFILE INFO
    [updateProfileAction.failureActionType]: 'Ops! Impossibile modificare dati profilo',
    //CHANGE PROFILE PASSWORD
    [changeProfilePasswordAction.failureActionType]: 'Ops! Impossibile modificare la password',
    //CHANGE PROFILE IMAGE
    [changeProfileImageAction.failureActionType]: 'Ops! Errore durante il caricamento',
    //GET EVENTS HISTORY
    [fetchEventsHistoryListAction.failureActionType]: 'Ops! Impossibile recuperare la cronologia degli eventi',
    //GET FRIENDS LIST
    [fetchFriendsListAction.failureActionType]: 'Ops! Impossibile recuperare la lista degli amici',
    //GET SUGGESTED FRIENDS LIST
    [fetchSuggestedFriendsListAction.failureActionType]: 'Ops! Impossibile recuperare la lista degli amici suggeriti',
    //GET FILTERED FRIENDS LIST
    [fetchFilteredFriendsListAction.failureActionType]: 'Ops! Impossibile recuperare la lista degli amici filtrati',
    //GET FILTERED FRIENDS LIST
    [fetchAddFriendAction.failureActionType]: 'Ops! Impossibile aggiungere l\'amico alla tua lista',

    /*-----------------------------------------------------------------------------------------------------*/

    //UPDATE PROFILE INFO
    [updateProfileAction.successActionType]: 'Modifiche apportate con successo!',
    //CHANGE PROFILE PASSWORD
    [changeProfilePasswordAction.successActionType]: 'Controlla la tua posta elettronica',
    //GET FILTERED FRIENDS LIST
    [fetchAddFriendAction.successActionType]: 'Amico aggiunto alla lista degli amici',
    //DELETE FRIEND
    [fetchDeleteFriendAction.successActionType]: 'Amico rimosso dalla lista degli amici',
}

// GENERIC ERROR MESSAGE (compare di default)
export const GENERIC_ERROR_MESSAGE = 'Ops! Si è verificato un errore'

export const ACTION_TYPES_TO_EXCLUDE_FROM_MESSAGES = [fetchPaymentAction.failureActionType]

export const genericMessagesEpic = (action$: Observable<IAction>) =>
    action$.pipe(
        filter((action: IAction) =>
            action.type.includes(SUCCCESS_FETCH_SUFFIX) || action.type.includes(FAILURE_FETCH_SUFFIX)
        ),
        filter((action: IAction) => !ACTION_TYPES_TO_EXCLUDE_FROM_MESSAGES.includes(action.type)),
        mergeMap((action: IAction) => {

            const userMessage = TYPES_TO_MESSAGES_MAPPER[action.type]

            // SHOW ONLY MAPPED SUCCESS MESSAGES
            if (action.type.includes(SUCCCESS_FETCH_SUFFIX))
                return userMessage ? [addSuccess({userMessage})] : NEVER

            // ADD ERROR WITH DEFAULT ERROR MESSAGE
            return [addError({userMessage: userMessage || GENERIC_ERROR_MESSAGE})]
        })
    )

