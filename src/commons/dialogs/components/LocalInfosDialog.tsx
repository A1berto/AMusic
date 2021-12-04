import * as React from 'react'
import {FC, useCallback, useEffect, useState} from 'react'
import {IEvent, IPartecipant} from '../../../containers/events/eventi.types'
import {Avatar, Checkbox, CircularProgress, IconButton, Tooltip, Typography} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import Fab from '@material-ui/core/Fab'
import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined'
import {useDispatch, useSelector} from 'react-redux'
import {closeCurrentDialog} from '../../../redux/dialogs/current-dialogs.actions'
import StripeContainer from '../../../containers/events/Payment/StripeContainer'
import {fetchPaymentAction, isFetchPaymentPendingSelector} from '../../../containers/events/redux/eventi.actions'
import {DEFAULT_REQUEST_ID} from 'fetch-with-redux-observable'
import {paymentClientSecretSelector} from '../../../containers/events/redux/eventi.selectors'

interface ILocalInfosProps {
    event: IEvent
}

const LocalInfosDialog: FC<ILocalInfosProps> = props => {
    //PROPS
    const {event} = props

    //REACT STATE
    const [showPaymentForm, setPaymentForm] = useState<boolean>(false)
    const [visibleChecked, setVisibleChecked] = useState<boolean>(true)

    const dispatch = useDispatch()
    const clientSecret = useSelector(paymentClientSecretSelector)
    const isFetchPaymentPending = useSelector(isFetchPaymentPendingSelector)


    useEffect(() => {
        !!clientSecret && setPaymentForm(true)
    }, [clientSecret])

    const handleVisibleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVisibleChecked(event.target.checked)
    }

    const handleOpenPayment = useCallback(() => {
        if (!showPaymentForm) {
            dispatch(fetchPaymentAction.build({
                provider: 'STRIPE',
                eventDocumentId: event?.id,
                visible: visibleChecked
            }, DEFAULT_REQUEST_ID))
        } else {
            setPaymentForm(false)
        }
    }, [dispatch, event?.id, showPaymentForm, visibleChecked])

    const handleClose = useCallback(() => {
        dispatch(closeCurrentDialog())
    }, [dispatch])

    return (
        <>
            <div className="row m-4" style={{width: '800px', minHeight: '500px', alignContent: 'start'}}>
                <div className="col-12 d-flex justify-content-center align-items-center">

                    {/* TITLE */}
                    <Typography variant={'h3'} color="primary">{event.eventName}</Typography>

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

                <div className="col-12 d-flex align-items-baseline mt-3">
                    <div className="col-2">
                        <Typography variant="h5"
                                    color="textSecondary">
                            Data
                        </Typography>
                    </div>
                    <div className="col ms-2">
                        <Typography variant="h6"
                                    color="secondary">
                            {event?.eventDate}
                        </Typography>
                    </div>
                </div>

                <div className="col-12 d-flex align-items-center mt-1">
                    <div className="col-2">
                        <Typography variant="h5"
                                    color="textSecondary">
                            Indirizzo
                        </Typography>
                    </div>
                    <div className="col ms-2">
                        <Typography variant="h6"
                                    color="secondary">
                            {event?.address}
                        </Typography>
                    </div>
                </div>

                <div className="col-12 d-flex align-items-center mt-1">
                    <div className="col-2">
                        <Typography variant="h5"
                                    color="textSecondary">
                            Telefono
                        </Typography>
                    </div>
                    <div className="col ms-2">
                        <Typography variant="h6"
                                    color="secondary">
                            {event?.phoneNumber}
                        </Typography>
                    </div>
                </div>

                <div className="col-12 d-flex align-items-center mt-1">
                    <div className="col-2">
                        <Typography variant="h5"
                                    color="textSecondary">
                            Prezzo
                        </Typography>
                    </div>
                    <div className="col ms-2">
                        <Typography variant="h6"
                                    color="secondary">
                            {event?.ticketPrice}
                        </Typography>
                    </div>
                </div>

                <div className="col-12 pt-4">

                    <div className="row">
                        {//TODO creare componente
                            event?.partecipants.map((partecipant: IPartecipant) =>
                               <div className="col-auto  mt-2">
                                    <Tooltip title={`${partecipant?.name} ${partecipant?.surname}`}
                                             className="c-pointer">
                                        <Avatar
                                            variant="circle"
                                            alt="Partecipant Image"
                                            src={partecipant?.photoUrl}/>
                                    </Tooltip>
                                </div>
                            )}
                    </div>

                </div>

                {/* VISIBLE PARTICIPATION*/}
                <div className="col-12 pt-4 d-flex align-items-center">
                    <Typography variant="h6"
                                color="secondary">
                        Rendo visibile agli altri utenti la partecipazione a questo evento
                    </Typography>
                    <Checkbox
                        color="primary"
                        checked={visibleChecked}
                        onChange={handleVisibleChange}/>
                </div>

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


            {/*PAYMENT COMPONENT*/}
            {
                !!clientSecret && showPaymentForm &&
                <div style={{left: 0, right: 0, top: '29%', margin: 'auto', position: 'absolute', width: '50%'}}>
                    <StripeContainer clientSecret={clientSecret}/>
                </div>
            }
        </>
    )
}
export default LocalInfosDialog