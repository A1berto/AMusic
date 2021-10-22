import * as React from 'react'
import {useCallback, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Dialog from '@material-ui/core/Dialog'
import {currentDialogMetaSelector, currentDialogTypeSelector} from '../../redux/dialogs/current-dialog.selectors'
import {closeCurrentDialog} from '../../redux/dialogs/current-dialogs.actions'
import {dialogRenderFactory} from './DialogRenderFactoryComponent'
import {TransitionProps} from '@material-ui/core/transitions'
import {Slide} from '@material-ui/core'

interface IDialogProviderProps {}

const DialogProvider: React.FC<IDialogProviderProps> = () => {

    const dispatch = useDispatch()

    const currentDialogType = useSelector(currentDialogTypeSelector)
    const currentDialogMeta = useSelector(currentDialogMetaSelector)

    const handleClose = useCallback(() => {
        dispatch(closeCurrentDialog())
    }, [dispatch])

    useEffect(() => {
        console.info('CURRENT DIALOG: ', currentDialogType)
    }, [currentDialogType])

    const dialogObj = currentDialogType ? dialogRenderFactory(currentDialogType, currentDialogMeta) : null

    return (
        <Dialog
            {...dialogObj?.customDialogProps}
            open={!!currentDialogType}
            onClose={handleClose}
            maxWidth={false}
            fullWidth={false}
            TransitionComponent={Transition}>
            {currentDialogType ? dialogObj?.component : <></>}
        </Dialog>
    )
}

export default DialogProvider

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});