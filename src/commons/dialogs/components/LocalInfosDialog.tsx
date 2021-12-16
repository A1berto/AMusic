import * as React from 'react'
import {FC, useCallback, useEffect, useMemo, useState} from 'react'
import {IEvent, IPartecipant} from '../../../containers/events/eventi.types'
import {
    Avatar,
    Checkbox,
    CircularProgress,
    createStyles,
    IconButton,
    makeStyles,
    Tooltip,
    Typography
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import Fab from '@material-ui/core/Fab'
import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined'
import {useDispatch, useSelector} from 'react-redux'
import {closeCurrentDialog} from '../../../redux/dialogs/current-dialogs.actions'
import StripeContainer from '../../../containers/events/Payment/StripeContainer'
import {
    fetchPaymentAction,
    isFetchPaymentPendingSelector,
    resetStripeClienteSecretAction
} from '../../../containers/events/redux/eventi.actions'
import {DEFAULT_REQUEST_ID} from 'fetch-with-redux-observable'
import {paymentClientSecretSelector} from '../../../containers/events/redux/eventi.selectors'
import {EVENTS_HISTORY_PATH} from '../../../routes'
import HelpIcon from '@material-ui/icons/Help'
import {AMUSIC_PALETTE_COLORS} from '../../../AMusic_theme'


export const localInfosStyles = makeStyles(() =>
    createStyles({
        link: {
            color: AMUSIC_PALETTE_COLORS.PURPLE,
            '&:hover': {
                color: AMUSIC_PALETTE_COLORS.ARANCIONE_WG_LIGHT,
            },
        },

    }),
)

interface ILocalInfosProps {
    event: IEvent
    paymentInfo?: any
}

const LocalInfosDialog: FC<ILocalInfosProps> = props => {

    const {event, paymentInfo} = props
    const classes = localInfosStyles()

    const [showPaymentForm, setPaymentForm] = useState<boolean>(false)
    const [visibleChecked, setVisibleChecked] = useState<boolean>(true)

    const clientSecret = useSelector(paymentClientSecretSelector)
    const isFetchPaymentPending = useSelector(isFetchPaymentPendingSelector)
    const dispatch = useDispatch()

    /* Boolean to understand which infos to be showed */
    const isInHistorySection = useMemo(() => {
        return window.location.hash.includes(EVENTS_HISTORY_PATH)
    }, [])

    /* When client secret isn't null I can show Payment Form */
    useEffect(() => {
        !!clientSecret && setPaymentForm(true)
    }, [clientSecret])

    const handleVisibleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVisibleChecked(event.target.checked)
    }

    /* Create stripe intent to permit user payment*/
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
    
    useEffect(() => () => {
        dispatch(resetStripeClienteSecretAction(''))
    },[dispatch])

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

                <div className="col-12 d-flex align-items-center mt-2">
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

                <div className="col-12 d-flex align-items-center mt-2">
                    <div className="col-2">
                        <Typography variant="h5"
                                    color="textSecondary">
                            Telefono
                        </Typography>
                    </div>
                    <div className="col ms-2">
                        <Typography variant="h6"
                                    color="secondary">
                            <Tooltip title={'Clicca per chiamare'} placement="right">
                                <a href={`tel:${event?.phoneNumber}`}
                                   className={classes.link}>
                                    {event?.phoneNumber}
                                </a>
                            </Tooltip>
                        </Typography>
                    </div>
                </div>

                <div className="col-12 d-flex align-items-center mt-2">
                    <div className="col-2">
                        <Typography variant="h5"
                                    color="textSecondary">
                            Prezzo
                        </Typography>
                    </div>
                    <div className="col d-flex ms-2">
                        <Typography variant="h6"
                                    color="secondary">
                            {event?.ticketPrice} €
                        </Typography>
                        {
                            isInHistorySection &&
                            <Tooltip className="ms-3"
                                     title={
                                         <>
                                             <div>Id pagamento : {paymentInfo.idPayment}</div>
                                             <div>Data del pagamento : {paymentInfo.datePayment}</div>
                                             <div>Vendor : {paymentInfo.vendor}</div>
                                         </>
                                     }
                                     placement="right">
                                <HelpIcon color="secondary"/>
                            </Tooltip>
                        }
                    </div>
                </div>

                {/* PARTECIPANTS LIST*/}
                <div className="col-12 pt-4">
                    <div className="row">
                        {
                            event?.partecipants.map((partecipant: IPartecipant, index: number) =>
                                <div className="col-auto  mt-2" key={index}>
                                    <Tooltip title={`${partecipant?.name} ${partecipant?.surname}`}
                                             className="c-pointer">
                                        <Avatar variant="circular"
                                                alt="Partecipant Image"
                                                src={partecipant?.photoUrl}/>
                                    </Tooltip>
                                </div>
                            )}
                    </div>
                </div>

                {
                    !isInHistorySection && !event.bought && event?.partecipants.length < event?.maxPartecipants &&
                    <>
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
                        { !event.bought && event?.partecipants.length < event?.maxPartecipants &&
                            <div className="col-12">
                                {/*PAYMENT BUTTON*/}
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
                        }
                    </>
                }
                {
                    event.bought &&
                    <div className="col-12 pt-4 d-flex align-items-center justify-content-center">
                        <Typography variant="h6"
                                    style={{color: '#ffb74d'}}>
                            Biglietto già acquistato per questo evento
                        </Typography>
                    </div>
                }
            </div>

            {/*PAYMENT COMPONENT*/}
            {
                !!clientSecret && showPaymentForm && !event.bought &&
                <div style={{left: 0, right: 0, top: '29%', margin: 'auto', position: 'absolute', width: '50%'}}>
                    <StripeContainer clientSecret={clientSecret}/>
                </div>
            }
        </>
    )
}
export default LocalInfosDialog