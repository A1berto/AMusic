import * as React from 'react'
import {FC, useCallback, useEffect, useState} from 'react'
import {Button, Card, CardContent, CardHeader} from '@material-ui/core'
import {GoogleMapsAutocomplete} from './components/GoogleMapsAutocomplete'
import {IEvent, IGeoLocation} from './eventi.types'
import Typography from '@material-ui/core/Typography'
import Marker from './components/Marker'
import EventsList from './components/EventsList'
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined'
import {useDispatch, useSelector} from 'react-redux'
import {eventsListSelector} from './redux/eventi.selectors'
import {setCurrentDialog} from '../../redux/dialogs/current-dialogs.actions'
import {CurrentDialogType} from '../../redux/dialogs/current-dialog.constants'
import GoogleMapsReact, {Props as GoogleMapsReactProps} from 'google-map-react'
import {AMusicSlider} from '../../commons/AMusicSlider'
import {userLocationSelector} from './user-location/user-location.selectors'


interface IEventsListContainerProps {
}

const EventsListContainer: FC<IEventsListContainerProps> = () => {
    const dispatch = useDispatch()
    const [isButtonComeBackUpVisible, setButtonComeBackUpVisible] = useState<boolean>(false)
    const [distanceValue, setDistanceValue] = React.useState<number>(5)
    const userLocation = useSelector(userLocationSelector)
    const eventsList = useSelector(eventsListSelector)
    const [mapsProps, setMapsPros] = useState<GoogleMapsReactProps>({
        center: {
            lat: !!userLocation?.latitude ? userLocation?.latitude : 41.9027835,
            lng: !!userLocation?.longitude ? userLocation?.longitude : 12.4963655,
        },
        zoom: 12,
        options: () => ({
            fullscreenControl: false,
            zoomControl: false,
        }),
        onGoogleApiLoaded(maps: { map: any; maps: any; ref: Element | null }) {
            console.log('loaded')
        },
    })


    const handleDistanceChange = (event: any, newValue: number | number[]) => {
        setDistanceValue(newValue as number)
    }

    /** @description When the user has scrolled at least 100px then I make the button go back up **/
    useEffect(() => {
        window.addEventListener('scroll', () =>
            window.pageYOffset > 100 ? setButtonComeBackUpVisible(true) : setButtonComeBackUpVisible(false)
        )
    }, [])

    /** @description Come back with animation to the top of page **/
    const handleComeBackUp = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        })
    }

    /** @description Function used to center map based on the selected place **/
    const handleAutocompleChangePlace = useCallback((location: IGeoLocation) => {
        setMapsPros(val => ({
            ...val,
            center: {
                lat: location.latitude,
                lng: location.longitude,
            },
            zoom: 13,
        }))
    }, [])

    const handleMarkerClick = (event: IEvent) => {
        dispatch(setCurrentDialog(CurrentDialogType.LOCAL_DETAILS, {event}))
    }

    return (
        <div style={{textAlign: 'center', width: '90%'}}>
            <div style={{width: '60%', margin: 'auto'}}>
                <div className="row">

                    {/* TITLE */}
                    <div className="col-12 d-flex justify-content-center">
                        <Typography variant={'h3'} color="primary">Eventi</Typography>
                    </div>

                    {/*SUBTITLE*/}
                    <div className="col-12 d-flex justify-content-center">
                        <Typography variant={'h4'} color="secondary">
                            Inserisci una località per scegliere il locale più vicino!
                        </Typography>
                    </div>
                </div>

                <div className="row my-5">
                    <div className="col-12 d-flex justify-content-center">
                        <Card style={{width: '80%', backgroundColor: '#382940'}}>

                            {/* GOOGLE MAPS AUTOCOMPLETE*/}
                            <CardHeader title={
                                <GoogleMapsAutocomplete onPlaceChange={handleAutocompleChangePlace}
                                                        distance={distanceValue}/>}/>
                            <CardContent>
                                <div className="row">
                                    <div className="col-12"
                                         style={{
                                             height: '240px',
                                             width: '100%',
                                             position: 'relative',
                                             overflow: 'hidden',
                                         }}>

                                        {/* GOOGLE MAPS REACT */}
                                        <GoogleMapsReact
                                            bootstrapURLKeys={{
                                                key: 'AIzaSyDTNW-bYg4EQSNqkQ2IMImBY3AdsBEK-0c',
                                                language: 'it',
                                                libraries: ['places', 'geometry'],
                                            }}
                                            yesIWantToUseGoogleMapApiInternals={true}
                                            {...mapsProps}>
                                            {
                                                eventsList?.map((event: IEvent, index) =>
                                                    <Marker key={`marker${index}`}
                                                            lat={event?.geoPoint?.latitude}
                                                            lng={event?.geoPoint?.longitude}
                                                            title={'GoogleMaps Marker'}
                                                            currentEvent={event}
                                                            handleClick={() => handleMarkerClick(event)}/>
                                                )
                                            }
                                        </GoogleMapsReact>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <Typography id="discrete-slider" color="secondary" gutterBottom>
                            {`Distanza di ricerca evento (${distanceValue} km)`}
                        </Typography>
                        <AMusicSlider
                            value={distanceValue}
                            onChange={handleDistanceChange}
                            valueLabelDisplay="auto"
                            min={1}
                            max={15}
                        />
                    </div>
                </div>
            </div>

            {
                !!eventsList.length ?
                    <div className="row d-flex justify-content-center pt-2">
                        {/* EVENTS LIST BASED ON GOOGLE MAPS PLACE */}
                        <EventsList eventsList={eventsList}/>
                    </div> :
                    <div className="col-12 mt-4">
                        <div className="row d-flex justify-content-center">
                            <div className="col-auto" style={{border: '0.5px solid #f57c00', borderRadius: 4}}>
                                <Typography color="secondary">
                                    NESSUN ELEMENTRO TROVATO IN ZONA
                                </Typography>
                            </div>
                        </div>
                    </div>

            }
            {
                isButtonComeBackUpVisible &&
                <div style={{position: 'fixed', right: 20, bottom: 20}}>

                    {/* COME BACK UP BUTTON */}
                    <Button variant={'contained'} onClick={handleComeBackUp}>
                        TORNA SU
                        <ArrowUpwardOutlinedIcon fontSize={'small'} className="ms-1 mb-1"/>
                    </Button>
                </div>
            }

        </div>
    )
}
export default EventsListContainer