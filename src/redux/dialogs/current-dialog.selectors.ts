import {createSelector} from 'reselect'
import {ICurrentDialog} from './current-dialog.reducers'
import {currentDialogRootSelector} from '../selectors'

export const currentDialogTypeSelector = createSelector(
    currentDialogRootSelector,
    (currentDialog: ICurrentDialog | null): string | null => currentDialog?.type ?? null
)

export const currentDialogMetaSelector = createSelector(
    currentDialogRootSelector,
    (currentDialog: ICurrentDialog | null): unknown | undefined => currentDialog?.meta
)