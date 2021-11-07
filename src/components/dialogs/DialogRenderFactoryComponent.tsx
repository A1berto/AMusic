import React, {lazy, ReactElement} from 'react'
import {CurrentDialogType} from '../../redux/dialogs/current-dialog.constants'

interface ICustomDialogProps {
    disableEscapeKeyDown?: boolean,
    disableBackdropClick?: boolean
}

/* eslint-disable  @typescript-eslint/no-explicit-any */
interface IDialog<T = any> {
    component: ReactElement<T>
    customDialogProps?: ICustomDialogProps
}

/*
DIALOGS lazy imports
 */
const EditProfileImageDialog = lazy(() => import('./components/EditProfileImageDialog'))
const LocalInfos = lazy(() => import('./components/LocalInfos'))

/**
 * @description
 * SWITCH CHE FA IL RENDER DEI MODALI A SECONDA DELLA KEY
 */
/* eslint-disable  @typescript-eslint/no-explicit-any */
export const dialogRenderFactory = (modalType: string, meta?: any): null | IDialog => {
    switch (modalType) {
        case CurrentDialogType.EDIT_PROFILE_IMAGE:
            return ({
                component: <EditProfileImageDialog {...meta}/>,
                customDialogProps: {disableEscapeKeyDown: false},
            })
        case CurrentDialogType.LOCAL_INFOS:
            return ({
                component: <LocalInfos {...meta}/>,
                customDialogProps: {disableEscapeKeyDown: false},
            })
        default:
            return null
    }
}
