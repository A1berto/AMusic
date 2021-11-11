import * as React from 'react'
import {useEffect} from 'react'
import {Grid, makeStyles, TextField, Typography} from '@material-ui/core'
import throttle from 'lodash/throttle'
import {Autocomplete} from '@material-ui/lab'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import parse from 'autosuggest-highlight/parse'
import {AMUSIC_PALETTE_COLORS} from '../../../AMusic_theme'
import {IGeoLocation} from '../eventi.types'


const useStyles = makeStyles((theme) => ({
    icon: {
        color: AMUSIC_PALETTE_COLORS.PURPLE,
        marginRight: theme.spacing(4),
    },
    paperHidden: {
        display: 'none',
    },
}))

interface PlaceType {
    description: string;
    place_id: string
    structured_formatting: {
        main_text: string;
        secondary_text: string;
        main_text_matched_substrings: [
            {
                offset: number;
                length: number;
            },
        ];
    };
}

const autocompleteService = {current: null}

export interface IGoogleMapsAutocomplete {
    onPlaceChange?: (location: IGeoLocation) => void
}


export const GoogleMapsAutocomplete: React.FC<IGoogleMapsAutocomplete> = props => {

    const classes = useStyles()
    const [value, setValue] = React.useState<PlaceType | null>(null)
    const [inputValue, setInputValue] = React.useState('')
    const [options, setOptions] = React.useState<PlaceType[]>([])


    const fetch = React.useMemo(
        () =>
            throttle(
                (request: { input: string, componentRestrictions: { country: 'it' } }, callback: (results?: PlaceType[]) => void) => {
                    (autocompleteService.current as any).getPredictions(request, callback)
                }, 200),
        [],
    )

    useEffect(() => {
        // se si vuole intercettare in cambio di location allora si puo passare onPlaceChange
        if (value && props.onPlaceChange) {
            const geocoder = new (window as any).google.maps.Geocoder()
            geocoder.geocode({placeId: value?.place_id}, (results: any, status: any) => {
                if (status === 'OK' && results[0]) {
                    props.onPlaceChange && props.onPlaceChange({
                        latitude: results[0].geometry.location.lat(),
                        longitude: results[0].geometry.location.lng(),
                    })
                } else {
                    alert('Geocode was not successful for the following reason: ' + status)
                }
            })
        }
        //NON MODIFICARE LE PROPS. Inserire come deps ( "props" ) chiama infinitamente questa funzione
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.onPlaceChange, value])


    useEffect(() => {
        let active = true

        if (!autocompleteService.current && (window as any).google) {
            autocompleteService.current = new (window as any).google.maps.places.AutocompleteService()
        }
        if (!autocompleteService.current) {
            return undefined
        }

        if (inputValue === '') {
            setOptions(value ? [value] : [])
            return undefined
        }


        fetch({input: inputValue, componentRestrictions: {country: 'it'}}, (results?: PlaceType[]) => {
            console.log('results', results)
            if (active) {
                let newOptions = [] as PlaceType[]

                if (value) {
                    newOptions = [value] ?? ''
                }

                if (results) {
                    newOptions = [...newOptions, ...results]
                }

                setOptions(newOptions)
            }
        })

        return () => {
            active = false
        }
    }, [value, inputValue, fetch])


    return (
        <Autocomplete
            id="google-map-demo"
            classes={{paper: inputValue === '' ? classes.paperHidden : ''}}
            getOptionLabel={(option) => (typeof option === 'string' ? option : option.description)}
            filterOptions={(x) => x}
            options={options}
            autoComplete
            includeInputInList
            filterSelectedOptions
            noOptionsText={<Typography color={'secondary'}>Nessun elemento trovato</Typography>}
            value={value}
            onChange={(event: any, newValue: PlaceType | null) => {
                setOptions(newValue ? [newValue, ...options] : options)
                // @ts-ignore
                console.log('newValue', autocompleteService.current)
                setValue(newValue)
            }}
            onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue)
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    fullWidth
                    placeholder="ES: Piazza Leonardo da Vinci, Milano"
                    InputProps={{
                        ...params.InputProps,
                        disableUnderline: true,
                    }}
                />
            )}
            renderOption={(option) => {
                const matches = option.structured_formatting.main_text_matched_substrings
                const parts = parse(
                    option.structured_formatting.main_text,
                    matches.map((match: any) => [match.offset, match.offset + match.length]),
                )

                return (
                    <Grid container alignItems="center">
                        <Grid item>
                            <LocationOnIcon className={classes.icon}/>
                        </Grid>
                        <Grid item xs>
                            {
                                parts.map((part, index) => (
                                    <span key={index} style={{
                                        fontWeight: part.highlight ? 700 : 400,
                                        color: AMUSIC_PALETTE_COLORS.WHITE,
                                        opacity: 0.6
                                    }}>
                                         {part.text}
                                    </span>
                                ))
                            }
                            <Typography variant="body2" style={{color: AMUSIC_PALETTE_COLORS.WHITE}}>
                                {option.structured_formatting.secondary_text}
                            </Typography>
                        </Grid>
                    </Grid>
                )
            }}
        />
    )
}
