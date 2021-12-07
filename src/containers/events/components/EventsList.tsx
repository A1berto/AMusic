import * as React from 'react'
import {FC, useEffect, useMemo} from 'react'
import {IEvent, IEventHistory} from '../eventi.types'
import {useDispatch} from 'react-redux'
import {setCurrentDialog} from '../../../redux/dialogs/current-dialogs.actions'
import {CurrentDialogType} from '../../../redux/dialogs/current-dialog.constants'
import {EVENTS_HISTORY_PATH} from '../../../routes'
import {Card, CardContent, CardMedia, Typography} from '@material-ui/core'
import moment from 'moment/moment'

interface IEventsListProps {
    eventsList: IEvent[] | IEventHistory[]
}

const EventsList: FC<IEventsListProps> = (props) => {

    const {eventsList} = props

    /* Boolean to understand which infos to be showed */
    const isInHistorySection = useMemo(() => {
        return window.location.hash.includes(EVENTS_HISTORY_PATH)
    }, [])

    const dispatch = useDispatch()

    /* Open the dialog to show local details */
    const handleCardClick = (event: any) => {
        dispatch(setCurrentDialog(CurrentDialogType.LOCAL_DETAILS,
            isInHistorySection ? {
                event: event.event,
                paymentInfo: {
                    datePayment: moment(event.datePayment).format('DD/MM/YYYY, h:mm:ss a'),
                    idPayment: event.idPayment,
                    vendor: event.vendor
                }
            } : {event}))
    }

    useEffect(() => {
        console.log('eventsList>>>', eventsList)
    }, [eventsList])

    return (
        <>

            {    // @ts-ignore
                eventsList?.map((event, index: number) =>
                    <Card key={index}
                          className="col-12 col-sm-6 col-md-4 m-4 p-0 localCard c-pointer"
                          onClick={() => handleCardClick(event)}
                          style={{
                              background: '#252525',
                              height: '180px',
                              width: '360px',
                              boxShadow: '0px 0px 10px rgba(256, 256, 256, 0.4)',
                              borderRadius: 10
                          }}>
                        <CardMedia
                            component="img"
                            height="140px"
                            image={isInHistorySection ? event.event.imageUrl : event.imageUrl}
                            alt="eventImage"
                        />
                        <CardContent className="p-0">
                            <div className="row">
                                <div className="col-12 pt-2">

                                    {/* LOCAL NAME */}
                                    <Typography variant="h5" component="div" color={'textSecondary'}>
                                        {isInHistorySection ? event.event.eventName : event.eventName}
                                    </Typography>
                                </div>
                            </div>
                        </CardContent>
                    </Card>)
            }

        </>
    )
}
export default EventsList