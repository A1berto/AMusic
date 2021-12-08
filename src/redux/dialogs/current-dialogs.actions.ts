// ACTION TYPE
export const SET_CURRENT_DIALOG = 'SET_CURRENT_DIALOG'

export const setCurrentDialog = (currentDialog: string | {} | null, meta?: unknown) => ({
    type: SET_CURRENT_DIALOG,
    payload: currentDialog,
    meta
})

export const CLOSE_CURRENT_DIALOG = 'CLOSE_CURRENT_DIALOG'
export const closeCurrentDialog = () => ({type: CLOSE_CURRENT_DIALOG})