import {IAction} from 'fetch-with-redux-observable'
import {CLOSE_CURRENT_DIALOG, SET_CURRENT_DIALOG} from './current-dialogs.actions'

export interface ICurrentDialog {
    type: string
    meta?: unknown // EXTRA INFOS
}

export const currentDialogReducer = (state: ICurrentDialog | null = null, action: IAction<string>): ICurrentDialog | null => {
    switch (action.type) {
        case SET_CURRENT_DIALOG:
            return {type: action.payload, meta: action.meta}
        case CLOSE_CURRENT_DIALOG:
            return null
        default:
            return state
    }
}
