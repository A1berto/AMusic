import * as React from 'react'
import {FC, useCallback, useEffect, useState} from 'react'
import {IEvent} from '../../../containers/eventi/eventi.types'
import {CircularProgress, IconButton, Tooltip, Typography} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import Fab from '@material-ui/core/Fab'
import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined'
import {useDispatch, useSelector} from 'react-redux'
import {closeCurrentDialog} from '../../../redux/dialogs/current-dialogs.actions'
import StripeContainer from '../../../containers/eventi/Payment/StripeContainer'
import {isFetchPaymentPendingSelector} from '../../../containers/eventi/redux/eventi.actions'

interface ILocalInfosProps {
    event: IEvent
}

const LocalInfos: FC<ILocalInfosProps> = props => {
    //PROPS
    const {event} = props

    //REACT STATE
    const [showPaymentForm, setPaymentForm] = useState<boolean>(false)

    const dispatch = useDispatch()
    const isFetchPaymentPending = useSelector(isFetchPaymentPendingSelector)


    const handleClose = useCallback(() => {
        dispatch(closeCurrentDialog())
    }, [dispatch])

    const handleOpenPayment = useCallback(() => {
        setPaymentForm(prev => !prev)
    }, [])

    return (
        <>
            <div className="row m-4" style={{width: '800px', minHeight: '500px', alignContent: 'start'}}>
                <div className="col-12 d-flex justify-content-center align-items-center">

                    {/* TITLE */}
                    <Typography variant={'h3'} color="primary">{event.localName}</Typography>

                    {/* CLOSE BUTTON*/}
                    <div style={{position: 'absolute', right: 16}}>
                        <IconButton onClick={handleClose}
                                    color="secondary">
                            <CloseIcon/>
                        </IconButton>
                    </div>
                </div>

                {/* EVENT DESCRIPTION*/}
                <div className="col-12 pt-3">
                    <Typography variant={'body1'} color="secondary">
                        {event.description}
                    </Typography>
                </div>


                {/*PAYMENT COMPONENT*/}
                {
                    showPaymentForm &&
                    <div className="col-12" style={{position: 'absolute', left: 0, bottom: 10}}>
                        <StripeContainer/>
                    </div>
                }

                {/*PAYMENT BUTTON*/}
                <div className="col-12">
                    <Tooltip title={'Iscrizione e Pagamento'} placement="left">
                        <Fab style={{position: 'absolute', right: 25, bottom: 25}} color="primary"
                             onClick={handleOpenPayment}>

                            {
                                isFetchPaymentPending ?
                                    <CircularProgress style={{color: 'white'}}/> : <PaymentOutlinedIcon/>
                            }
                        </Fab>
                    </Tooltip>
                </div>
            </div>
        </>
    )
}
export default LocalInfos