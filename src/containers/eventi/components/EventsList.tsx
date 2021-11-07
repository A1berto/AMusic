import * as React from 'react'
import {FC} from 'react'
import {Card, CardContent, CardMedia} from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import {IEvent} from '../eventi.types'
import {events} from '../Events'
import disco from '../../../assets/img/disco.jpg'
import {useDispatch} from 'react-redux'
import {setCurrentDialog} from '../../../redux/dialogs/current-dialogs.actions'
import {CurrentDialogType} from '../../../redux/dialogs/current-dialog.constants'

interface IEventsListProps {
}

const EventsList: FC<IEventsListProps> = () => {

    const dispatch = useDispatch()

    const eventsList: IEvent[] = []

    const handleCardClick = (event: IEvent) => {
        dispatch(setCurrentDialog(CurrentDialogType.LOCAL_INFOS, {event: event}))
    }

    return (
        <>{
            events?.map((event: IEvent) =>
                <Card className="col-12 col-sm-6 col-md-4 m-4 p-0 localCard c-pointer"
                      onClick={() => handleCardClick(event)}
                      style={{
                          background: '#252525',
                          height: '160px',
                          width: '320px',
                          boxShadow: 'none',
                          borderRadius: 4
                      }}>
                    <CardMedia
                        component="img"
                        height="130px"
                        image={disco}
                        alt="eventImage"
                    />
                    <CardContent className="p-0">
                        <div className="row">
                            <div className="col-12">
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