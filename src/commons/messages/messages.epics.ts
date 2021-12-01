import {FAILURE_FETCH_SUFFIX, IAction, SUCCCESS_FETCH_SUFFIX} from 'fetch-with-redux-observable'
import {filter, mergeMap} from 'rxjs/operators'
import {NEVER, Observable} from 'rxjs'
import {IGenericEntities} from 'fetch-with-redux-observable/dist/types'
import {addError, addSuccess} from 'fetch-with-redux-observable/dist/user-message/user-message.actions'
import {
    changeProfilePasswordAction,
    fetchProfileAction,
    updateProfileAction
} from '../../containers/profile/redux/profile.actions'
import {fetchPaymentAction} from '../../containers/events/redux/eventi.actions'
import {
    fetchAddFriendAction,
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
    //FETCH PAYMENT
    [fetchPaymentAction.failureActionType]: 'Ops! Impossibile effettuare il pagamento',
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
    //FETCH PAYMENT
    [fetchPaymentAction.successActionType]: 'Pagamento effettuato con successo!',
    //GET FILTERED FRIENDS LIST
    [fetchAddFriendAction.successActionType]: 'Amico aggiunto alla lista degli amici',
}

// GENERIC ERROR MESSAGE (compare di default)
export const GENERIC_ERROR_MESSAGE = 'Ops! Si è verificato un errore'

export const genericMessagesEpic = (action$: Observable<IAction>) =>
    action$.pipe(
        filter((action: IAction) =>
            action.type.includes(SUCCCESS_FETCH_SUFFIX) || action.type.includes(FAILURE_FETCH_SUFFIX)
        ),
        mergeMap((action: IAction) => {

            const userMessage = TYPES_TO_MESSAGES_MAPPER[action.type]

            // SHOW ONLY MAPPED SUCCESS MESSAGES
            if (action.type.includes(SUCCCESS_FETCH_SUFFIX))
                return userMessage ? [addSuccess({userMessage})] : NEVER

            // ADD ERROR WITH DEFAULT ERROR MESSAGE
            return [addError({userMessage: userMessage || GENERIC_ERROR_MESSAGE})]
        })
    )

