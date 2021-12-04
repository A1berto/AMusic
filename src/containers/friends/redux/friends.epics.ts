import {fetchAddFriendAction, fetchFriendsListAction, fetchSuggestedFriendsListAction} from './friends.actions'
import {ofType} from 'redux-observable'
import {map, mergeMap} from 'rxjs/operators'
import {NEVER, Observable} from 'rxjs'
import {DEFAULT_REQUEST_ID, IGenericResponse, ISuccessFetchAction} from 'fetch-with-redux-observable'
import {CurrentDialogType} from '../../../redux/dialogs/current-dialog.constants'
import {closeCurrentDialog, setCurrentDialog} from '../../../redux/dialogs/current-dialogs.actions'
import {FRIENDS_LIST_PATH} from '../../../routes'
import {HashHistory} from '../../../index'
import {IFriend} from '../friends.types'

export const fetchSuggestedFriendsListSuccessEpic = (action$: Observable<ISuccessFetchAction<IGenericResponse<IFriend[]>>>) =>
    action$.pipe(
        ofType(fetchSuggestedFriendsListAction.successActionType),
        map(() => setCurrentDialog(CurrentDialogType.ADD_FRIENDS_LIST)))


export const fetchAllFriendsListSuccessEpic = (action$: Observable<ISuccessFetchAction<IGenericResponse<IFriend[]>>>) =>
    action$.pipe(
        ofType(fetchFriendsListAction.successActionType),
        mergeMap((action) => {
            console.info(`Redirect to ${FRIENDS_LIST_PATH}`)
            //@ts-ignore
            action.meta.meta.setAnchorEl && action.meta.meta.setAnchorEl(null)
            HashHistory.push(FRIENDS_LIST_PATH)
            return NEVER
        })
    )

export const fetchAddFriendsSuccessEpic = (action$: Observable<ISuccessFetchAction<IGenericResponse<IFriend[]>>>) =>
    action$.pipe(
        ofType(fetchAddFriendAction.successActionType),
        mergeMap(() => {
            //TODO piuttosto di chiamare fetchFriends, prendere il payload e modificare state
            return [fetchFriendsListAction.build(null, DEFAULT_REQUEST_ID), closeCurrentDialog()]
        })
    )