import * as React from 'react'
import {FC} from 'react'
import {Card, CardContent, CardMedia} from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import {IEvent} from '../eventi.types'
import {eventsContainer} from '../EventsContainer'
import disco from '../../../assets/img/disco.jpg'
import {useDispatch} from 'react-redux'
import {setCurrentDialog} from '../../../redux/dialogs/current-dialogs.actions'
import {CurrentDialogType} from '../../../redux/dialogs/current-dialog.constants'

interface IEventsListProps {
}

const EventsList: FC<IEventsListProps> = () => {

    const dispatch = useDispatch()

    const eventsList: IEvent[] = []

    /* Open the dialog to show local details */
    const handleCardClick = (event: IEvent) => {
        dispatch(setCurrentDialog(CurrentDialogType.LOCAL_DETAILS, {event: event}))
    }

    return (
        <>
            {
                eventsContainer?.map((event: IEvent, index) =>
                    <Card key={index}
                          className="col-12 col-sm-6 col-md-4 m-4 p-0 localCard c-pointer"
                          onClick={() => handleCardClick(event)}
                          style={{
                              background: '#252525',
                              height: '180px',
                              width: '360px',
                              boxShadow: '0px 0px 10px rgba(256, 256, 256, 0.6)',
                              borderRadius: 10
                          }}>
                        <CardMedia
                            component="img"
                            height="140px"
                            image={disco}
                            alt="eventImage"
                        />
                        <CardContent className="p-0">
                            <div className="row">
                                <div className="col-12 pt-2">

                                    {/* LOCAL NAME*/}
                                    <Typography variant="h5" component="div" color={'textSecondary'}>
                                        {event.localName}
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