import * as React from 'react'
import {FC, useCallback, useEffect, useState} from 'react'
import {Button, Card, CardContent, CardHeader, createStyles, makeStyles,} from '@material-ui/core'
import GoogleMapsReact, {Props as GoogleMapsReactProps} from 'google-map-react'
import {GoogleMapsAutocomplete} from './components/GoogleMapsAutocomplete'
import {IEvent, IGeoLocation} from './eventi.types'
import Typography from '@material-ui/core/Typography'
import Marker from './components/Marker'
import EventsList from './components/EventsList'
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined'

export const infoAgenziaStyles = makeStyles(() =>
    createStyles({
        rootColor: {
            color: '#5A5A5A',
        },
        typography: {
            fontSize: '13px',
        },
        cardHeaderLabel: {
            fontWeight: 400,
        },
        cardHeaderAgencyDescription: {
            fontSize: '20px',
            fontWeight: 700,
            textTransform: 'uppercase',
        },
        link: {
            color: 'orange',
            '&:hover': {
                color: 'blue',
            },
        },
        cardStyle: {
            maxWidth: '75vw',
            position: 'absolute',
            border: `1px solid orange`,
            borderRadius: '5px',
            transform: 'translate(-50%, 2%)',
            zIndex: 9
        },
    }),
)


export const events: IEvent[] = [
    {
        lat: 23,
        lng: 24,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        id: 23,
        address: 'VIa non so che 22',
        cap: '91100',
        comune: 'Trapani',
        phone: '3286655726',
        email: 'alberto@gmail.it',
        localCode: '23',
        localName: 'DiscoPub La Quercia',
        image: ''
    }, {
        lat: 23,
        lng: 24,
        description: 'evento2',
        id: 23,
        address: 'VIa non so che 22',
        cap: '91100',
        comune: 'Trapani',
        phone: '3286655726',
        email: 'alberto@gmail.it',
        localCode: '23',
        localName: 'Bar Casantini',
        image: ''
    }, {
        lat: 23,
        lng: 24,
        description: 'evento2',
        id: 23,
        address: 'VIa non so che 22',
        cap: '91100',
        comune: 'Trapani',
        phone: '3286655726',
        email: 'alberto@gmail.it',
        localCode: '23',
        localName: 'La Giovinezza',
        image: ''
    }, {
        lat: 23,
        lng: 24,
        description: 'evento2',
        id: 23,
        address: 'VIa non so che 22',
        cap: '91100',
        comune: 'Trapani',
        phone: '3286655726',
        email: 'alberto@gmail.it',
        localCode: '23',
        localName: 'La Giovinezza',
        image: ''
    }, {
        lat: 23,
        lng: 24,
        description: 'evento2',
        id: 23,
        address: 'VIa non so che 22',
        cap: '91100',
        comune: 'Trapani',
        phone: '3286655726',
        email: 'alberto@gmail.it',
        localCode: '23',
        localName: 'La Giovinezza',
        image: ''
    }, {
        lat: 23,
        lng: 24,
        description: 'evento2',
        id: 23,
        address: 'VIa non so che 22',
        cap: '91100',
        comune: 'Trapani',
        phone: '3286655726',
        email: 'alberto@gmail.it',
        localCode: '23',
        localName: 'La Giovinezza',
        image: ''
    }, {
        lat: 23,
        lng: 24,
        description: 'evento2',
        id: 23,
        address: 'VIa non so che 22',
        cap: '91100',
        comune: 'Trapani',
        phone: '3286655726',
        email: 'alberto@gmail.it',
        localCode: '23',
        localName: 'La Giovinezza',
        image: ''
    }]

interface IEventsProps {
}

const Events: FC<IEventsProps> = () => {
    const [isButtonComeBackVisible, setButtonComeBackVisible] = useState<boolean>(false)
    const [mapsProps, setMapsPros] = useState<GoogleMapsReactProps>({
        center: {
            lat: 41.9027835,
            lng: 12.4963655,
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

    /*Quando l'utente ha scrollato almeno di 100px allora faccio visaulizzare il bottone torna su*/
    useEffect(() => {
        window.addEventListener('scroll',()=>
            window.pageYOffset > 100 ? setButtonComeBackVisible(true) : setButtonComeBackVisible(false)
        )
    }, [])


    const handleCameBackUp = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        })
    }
    /*Funzione utilizzata per centrare la mappa in base al posto selezionato dal field autocomplete*/
    const handleAutocompleChangePlace = useCallback((location: IGeoLocation) => {
        console.log('Nuova posizione da autocomplete', location)
        setMapsPros(val => ({
            ...val,
            center: {
                lat: location.latitude,
                lng: location.longitude,
            },
            zoom: 13,
        }))
    }, [])


    return (
        <div style={{textAlign: 'center', width: '80%'}}>
            <div style={{width: '60%', margin: 'auto'}}>
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <Typography variant={'h3'} color="primary">Eventi</Typography>
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                        <Typography variant={'h4'} color="secondary">
                            Inserisci una località per scegliere il locale più vicino!
                        </Typography>
                    </div>
                </div>

                <div className="row my-4">
                    <div className="col-12 d-flex justify-content-center">
                        <Card style={{width: '80%', backgroundColor: '#382940'}}>
                            <CardHeader title={<GoogleMapsAutocomplete onPlaceChange={handleAutocompleChangePlace}/>}/>

                            <CardContent>
                                <div className="row">
                                    <div className="col-12"
                                         style={{
                                             height: '240px',
                                             width: '100%',
                                             position: 'relative',
                                             overflow: 'hidden',
                                         }}>
                                        <GoogleMapsReact
                                            bootstrapURLKeys={{
                                                key: '',
                                                language: 'it',
                                                libraries: ['places', 'geometry'],
                                            }}
                                            {...mapsProps}>
                                            {events?.map((evento: IEvent, index) =>
                                                <Marker key={`marker${index}`}
                                                        lat={evento.lat}
                                                        lng={evento.lng}
                                                        handleClick={() => console.log('cliccato')}
                                                        title={'descrizione'}
                                                        agenziaCorrente={evento}/>)}
                                        </GoogleMapsReact>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            <div className="row d-flex justify-content-center">
                <EventsList/>
            </div>

            {
                isButtonComeBackVisible &&
                <div style={{position: 'fixed', right: 20, bottom: 20}}>
                    <Button variant={'contained'} onClick={handleCameBackUp}>
                        TORNA SU
                        <ArrowUpwardOutlinedIcon fontSize={'small'} className="ms-1 mb-1"/>
                    </Button>
                </div>
            }

        </div>
    )
}
export default Events