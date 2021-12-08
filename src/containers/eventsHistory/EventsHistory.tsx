import * as React from 'react'
import {FC, useEffect, useState} from 'react'
import {Button,} from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined'
import EventsList from '../events/components/EventsList'
import {useSelector} from 'react-redux'
import {eventsHistoryListSelector} from '../events/redux/eventi.selectors'

interface IEventsHistoryProps {
}

const EventsHistory: FC<IEventsHistoryProps> = () => {

    const [isButtonComeBackUpVisible, setButtonComeBackUpVisible] = useState<boolean>(false)
    const eventsHistory= useSelector(eventsHistoryListSelector)

    /** @description When the user has scrolled at least 100px then I make the button go back up **/
    useEffect(() => {
        window.addEventListener('scroll', () =>
            window.pageYOffset > 100 ? setButtonComeBackUpVisible(true) : setButtonComeBackUpVisible(false)
        )
    }, [])

    /** @description Come back with animation to the top of page **/
    const handleCameBackUp = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        })
    }

    return (
        <div className="text-center">
            <div className="m-auto">
                <div className="row">
                    {/* TITLE */}
                    <div className="col-12 d-flex justify-content-center">
                        <Typography variant={'h3'} color="primary">Cronologia degli eventi</Typography>
                    </div>

                    {/*SUBTITLE*/}
                    <div className="col-12 d-flex justify-content-center">
                        <Typography variant={'h4'} color="secondary">
                           Visualizza gli eventi ai quali hai partecipato!
                        </Typography>
                    </div>
                </div>

                <div className="row d-flex justify-content-center pt-5">
                    <EventsList eventsList={eventsHistory}/>
                </div>

                {
                    isButtonComeBackUpVisible &&
                    <div style={{position: 'fixed', right: 20, bottom: 20}}>

                        {/* COME BACK UP BUTTON */}
                        <Button variant={'contained'} onClick={handleCameBackUp}>
                            TORNA SU
                            <ArrowUpwardOutlinedIcon fontSize={'small'} className="ms-1 mb-1"/>
                        </Button>
                    </div>
                }
            </div>
        </div>
    )
}
export default EventsHistory