import {fetchSuggestedFriendsListAction} from './friends.actions'
import {ofType} from 'redux-observable'
import {map} from 'rxjs/operators'
import {Observable} from 'rxjs'
import {IGenericResponse, ISuccessFetchAction} from 'fetch-with-redux-observable'
import {CurrentDialogType} from '../../../redux/dialogs/current-dialog.constants'
import {setCurrentDialog} from '../../../redux/dialogs/current-dialogs.actions'

//TODO inserire la giusta interfaccia (parlare con andrea)
export const fetchSuggestedFriendsListSuccessEpic = (action$: Observable<ISuccessFetchAction<IGenericResponse<any>>>) =>
    action$.pipe(
        ofType(fetchSuggestedFriendsListAction.successActionType),
        map(() => setCurrentDialog(CurrentDialogType.ADD_FRIENDS_LIST)))
