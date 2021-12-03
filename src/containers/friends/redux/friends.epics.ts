import {fetchFriendsListAction, fetchSuggestedFriendsListAction} from './friends.actions'
import {ofType} from 'redux-observable'
import {map, mergeMap} from 'rxjs/operators'
import {NEVER, Observable} from 'rxjs'
import {IGenericResponse, ISuccessFetchAction} from 'fetch-with-redux-observable'
import {CurrentDialogType} from '../../../redux/dialogs/current-dialog.constants'
import {setCurrentDialog} from '../../../redux/dialogs/current-dialogs.actions'
import {FRIENDS_LIST_PATH} from '../../../routes'
import {HashHistory} from '../../../index'

//TODO inserire la giusta interfaccia (parlare con andrea)
export const fetchSuggestedFriendsListSuccessEpic = (action$: Observable<ISuccessFetchAction<IGenericResponse<any>>>) =>
    action$.pipe(
        ofType(fetchSuggestedFriendsListAction.successActionType),
        map(() => setCurrentDialog(CurrentDialogType.ADD_FRIENDS_LIST)))


export const fetchAllFriendsListSuccessEpic = (action$: Observable<ISuccessFetchAction<IGenericResponse<any>>>) =>
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