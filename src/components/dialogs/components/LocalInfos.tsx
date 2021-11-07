import * as React from 'react'
import {FC, useCallback} from 'react'
import {IEvent} from '../../../containers/eventi/eventi.types'
import {IconButton, Tooltip, Typography} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import Fab from '@material-ui/core/Fab'
import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined'
import {useDispatch} from 'react-redux'
import {closeCurrentDialog} from '../../../redux/dialogs/current-dialogs.actions'

interface ILocalInfosProps {
    event: IEvent
}

const LocalInfos: FC<ILocalInfosProps> = props => {
    const {event} = props

    const dispatch = useDispatch()

    const handleClose = useCallback(() => {
        dispatch(closeCurrentDialog())
    }, [dispatch])

    return (
        <>
            <div className="row m-4" style={{width: '800px', minHeight: '500px', alignContent: 'start'}}>
                <div className="col-12 d-flex justify-content-center align-items-center">
                    <Typography variant={'h3'} color="primary">{event.localName}</Typography>
                    <div style={{position: 'absolute', right: 16}}>
                        <IconButton onClick={handleClose}
                                    color="secondary">
                            <CloseIcon/>
                        </IconButton>
                    </div>
                </div>
                <div className="col-12 pt-3">
                    <Typography variant={'body1'} color="secondary">
                        {event.description}
                    </Typography>
                </div>

                {/*PAYMENT BUTTON*/}
                <div className="col-12">
                    <Tooltip title={'Iscrizione e Pagamento'} placement="left">
                        <Fab style={{position: 'absolute', right: 25, bottom: 25}} color="primary">
                            <PaymentOutlinedIcon/>
                        </Fab>
                    </Tooltip>
                </div>
            </div>
        </>
    )
}
export default LocalInfos