import {createTheme, Theme} from '@material-ui/core'
import {itIT} from '@material-ui/core/locale'

export const AMUSIC_PALETTE_COLORS = {
    /*USUALLY USED*/
    WHITE: '#f5f5eb',
    PURPLE: '#936F9D',
    VIOLET: '#382940',
    BLACK: '#111111',
    ELECTIC_BLUE: '#2B99FF',

    /*COMMON*/
    NERO: '#000',
    BIANCO: '#FFF',
    GRIGIO_BKGD: '#F4F7F6',
    GRIGIO_CHIARO: '#F2F2F2',
    GRIGIO_SCURO: '#5B5B5B',

    /*PRIMARY COLOR*/
    DARK_GREEN: '#006750',
    DARK_MEDIUM_GREEN: '#649301',

    /*SECONDARY COLOR*/
    MEDIUM_ORANGE: '#F4850F',

    /*ERROR COLOR*/
    ROSSO_LIGHT: '#EF5350',
    ROSSO_MAIN: '#D85D33',
    ROSSO_DARK: '#B71C1C',

    /*WARNING COLOR*/
    ARANCIONE_WG_LIGHT: '#ffb74d',
    ARANCIONE_WG_MAIN: '#ff9800',
    ARANCIONE_WG_DARK: '#f57c00',

    /*SUCCESS COLOR*/
    VERDE_SS_LIGHT: '#81c784',
    VERDE_SS_MAIN: '#4caf50',
    VERDE_SS_DARK: '#388e3c',


    AZZURRO: '#6FBDC2',
    YELLOW: '#e6ae27',
    BLUE: '#006172',
    LIGHT_BLUE: '#008c96',
}


// @ts-ignore
export const AMUSIC_THEME: Theme = createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 370,
                md: 500,
                lg: 1024,
                xl: 1920,
            },
        },
        palette: {
            common: {
                black: AMUSIC_PALETTE_COLORS.NERO,
                white: AMUSIC_PALETTE_COLORS.BIANCO,
            },
            primary: {
                main: AMUSIC_PALETTE_COLORS.PURPLE,
            },
            secondary: {
                main: '#F5F5EB',
            },
            error: {
                main: AMUSIC_PALETTE_COLORS.ROSSO_MAIN,
            },
            warning: {
                light: AMUSIC_PALETTE_COLORS.ARANCIONE_WG_LIGHT,
                main: AMUSIC_PALETTE_COLORS.ARANCIONE_WG_MAIN,
                dark: AMUSIC_PALETTE_COLORS.ARANCIONE_WG_DARK,
                contrastText: AMUSIC_PALETTE_COLORS.NERO,
            },
            success: {
                light: AMUSIC_PALETTE_COLORS.VERDE_SS_LIGHT,
                main: AMUSIC_PALETTE_COLORS.VERDE_SS_MAIN,
                dark: AMUSIC_PALETTE_COLORS.VERDE_SS_DARK,
                contrastText: AMUSIC_PALETTE_COLORS.NERO,
            },
            grey: {
                50: '#fafafa',
                100: '#f5f5f5',
                200: '#eeeeee',
                300: '#e0e0e0',
                400: '#bdbdbd',
                500: '#9e9e9e',
                600: '#757575',
                700: '#616161',
                800: '#424242',
                900: '#212121',
                A100: '#d5d5d5',
                A200: '#aaaaaa',
                A400: '#303030',
                A700: '#616161',
            },
            contrastThreshold: 3,
            tonalOffset: 0.2,

            // VALUTARE SE MODIFICARE
            text: {
                primary: '#212121',
                secondary: 'rgba(255,255,255,0.6)',
                disabled: 'rgba(0, 0, 0, 0.38)',
                hint: 'rgba(0, 0, 0, 0.38)',
            },
            // VALUTARE
            divider: 'rgba(0, 0, 0, 0.12)',
            // VALUTARE
            background: {
                paper: AMUSIC_PALETTE_COLORS.BIANCO,
                default: '#fafafa',
            },
            action: {
                hoverOpacity: 0.04,
                selectedOpacity: 0.08,
                disabledOpacity: 0.38,
                focusOpacity: 0.12,
                activatedOpacity: 0.12,
            },

        },
        spacing: [0, 2, 3, 5, 8],

        shadows: [
            'none',
            '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
            '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
            '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
            '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
            '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
            '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
            '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
            '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
            '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
            '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
            '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
            '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
            '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
            '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
            '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
            '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
            '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
            '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
            '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
            '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
            '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
            '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
            '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
            '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)',
        ],
        typography: {
            htmlFontSize: 16,
            // CAMBIARE
            fontFamily: [
                '"Nunito"',
                'sans-serif',
            ].join(','),
            // CAMBIARE
            fontSize: 14,
            fontWeightLight: 300,
            fontWeightRegular: 400,
            fontWeightMedium: 500,
            fontWeightBold: 700,

            // MODIFICARE !?!?!
            h1: {
                fontFamily: [
                    '"Nunito"',
                    'sans-serif',
                ].join(','),
                fontWeight: 300,
                fontSize: '6rem',
                lineHeight: 1.167,
                letterSpacing: '-0.01562em',

            },
            h2: {
                fontFamily: [
                    '"Nunito"',
                    'sans-serif',
                ].join(','),
                fontWeight: 400,
                fontSize: '3rem',
                lineHeight: 1.2,
                letterSpacing: '-0.00833em',
            },
            //CONTROLLARE || MODIFICARE FONT SIZE - FONT UTILIZZATO PER TITOLO SEZIONI
            h3: {
                fontFamily: [
                    '"Nunito"',
                    'sans-serif',
                ].join(','),
                fontWeight: 700 /*400*/,
                fontSize: '2.25rem' /*3rem*/,
                lineHeight: '32px',
                /*
                                background: AMUSIC_PALETTE_COLORS.VERDE_LIME_HIGHLIGHTED_TEXT_GRADIENT,
                */
                width: 'max-content',
            },
            //USATO PER SOTTOTITOLI SEZIONE (SPECIFICA LA TIPOLOGIA......) E RECAP POLIZZA (LA TUA POLIZZA)
            h4: {
                fontFamily: [
                    '"Nunito"',
                    'sans-serif',
                ].join(','),
                fontWeight: 400,
                fontSize: '1.5rem',
                lineHeight: '32px',
            },
            //USATO PER TITOLO GARANZIE (VERDE -- ES: Incendio Fabbricato)
            h5: {
                fontFamily: [
                    '"Nunito"',
                    'sans-serif',
                ].join(','),
                fontWeight: 700,
                fontSize: '1.125rem',
                lineHeight: '26px',
            },
            //USATO PER DESCRIZIONE CARD SCURI (Es: Se non ricordi...) E DESCRIZIONE GARANZIE E RIEPILOGO POLIZZA CHECKED E INFO AGENZIA
            h6: {
                fontFamily: [
                    '"Nunito"',
                    'sans-serif',
                ].join(','),
                fontWeight: 400,
                fontSize: '1rem '/*'1.25rem'*/,
                lineHeight: '24px',
                paddingBottom:'2px'
            },
            // USATO PER TITOLI CARD SCURI (Es: quanti m2 ha l'iimobile) E ACCORDION RIEPILOGO POLIZZA (ES: Garanzie) E TITOLO RIEPILOGO POLIZZA E INFO AGENZIA TITOLO
            subtitle1: {
                fontFamily: [
                    '"Nunito"',
                    'sans-serif',
                ].join(','),
                fontWeight: 700,
                fontSize: '1rem',
                lineHeight: '24px',

            },
            //USATO PER STEPPER LABEL E MODIFICA TEXT ACCORDION
            subtitle2: {
                fontFamily: [
                    '"Nunito"',
                    'sans-serif',
                ].join(','),
                fontWeight: 700,
                fontSize: '0.75rem',
                lineHeight: 1.43,
                letterSpacing: '0.1em'
            },
            // CONTENUTO ACCORDION E DESCRIZIONE GARANZIE E LABEL CHECKBOX
            body1: {
                fontFamily: [
                    '"Nunito"',
                    'sans-serif',
                ].join(','),
                fontWeight: 400,
                fontSize: '1rem',
                lineHeight: '24px',
            },
            // USATO PER LABEL INPUT E DATA PARTENZA POLIZZA E INDIETRO BUTTON
            body2: {
                fontFamily: [
                    '"Nunito"',
                    'sans-serif',
                ].join(','),
                fontWeight: 700,
                fontSize: '1rem',
                lineHeight: '24px',
            },
            // PULSANTI
            button: {
                fontFamily: [
                    '"Nunito"',
                    'sans-serif',
                ].join(','),
                fontWeight: 'bold',
                fontSize: '14px',
                lineHeight: '22px',
                cursor: 'pointer',
            },
            // USATO PER FOOTER e SCRITTA 'al mese' in RIEPILOGO POLIZZA
            caption: {
                fontFamily: [
                    '"Nunito"',
                    'sans-serif',
                ].join(','),
                fontWeight: 400,
                fontSize: '0.75rem',
                lineHeight: '20px',
            },
            // USATO PER HELPER TEXT ARANCIONE, COME CALCOLO CODICE FISCALE E MODIFICA DATA PARTENZA
            overline: {
                fontFamily: [
                    '"Nunito"',
                    'sans-serif',
                ].join(','),
                fontWeight: 700,
                fontSize: '0.813rem',
                lineHeight: '21px',
            },

            // PIÙ INFORMAZIONI TEXT ACCORDION 1rem 800 weight --> customizzare in createStyle
        },
        shape: {
            borderRadius: 4,
        },

        /*OVERRIDES COMPONENTI MATERIAL*/
        overrides: {
            MuiCard: {
                root: {
                    background: AMUSIC_PALETTE_COLORS.VIOLET,
                    borderRadius: '10px',
                    boxShadow: '0px 0px 10px rgba(253, 255, 255, 0.1)',
                },
            },
            MuiButton: {
                contained: {
                    backgroundColor: AMUSIC_PALETTE_COLORS.VIOLET,
                    color: 'white',
                    borderRadius: '4px',
                    boxSizing: 'border-box',
                    minWidth: '130px',
                    maxWidth: '216px',
                    height: '40px',
                    boxShadow: '0 4px 4px rgba(0, 0, 0, 0.2)',
                    textTransform: 'none',
                    letterSpacing: '0.1em',
                    '&$disabled': {
                        color: AMUSIC_PALETTE_COLORS.BIANCO,
                        opacity: 0.5,
                    },
                    '&:hover': {
                        backgroundColor: AMUSIC_PALETTE_COLORS.PURPLE
                    }
                },
                outlined: {
                    color: AMUSIC_PALETTE_COLORS.BIANCO,
                    border: `1px solid ${AMUSIC_PALETTE_COLORS.BIANCO}`,
                    borderRadius: '20px',
                    height: '40px',
                    backgroundColor: 'inherit',
                    outline: 'none!important',
                    textTransform: 'none',
                    letterSpacing: '0.1em',
                    '&$disabled': {
                        color: AMUSIC_PALETTE_COLORS.BIANCO,
                        border: `1px solid ${AMUSIC_PALETTE_COLORS.BIANCO}`,
                        opacity: 0.5,
                    },
                },
            },
            MuiAccordion: {
                root: {
                    backgroundColor: AMUSIC_PALETTE_COLORS.BLACK,
                    border: '1px solid rgba(113,105,116,0.95)',

                    borderLeft: 0,
                    borderRight: 0,
                    boxShadow: 'none',
                    '&:not(:last-child)': {
                        borderBottom: 'none',
                    },
                    '&:last-child': {
                        borderBottom: 'none',
                    },
                    '&:first-child': {
                        border: 'none',
                    },
                    '&:before': {
                        display: 'none',
                    },
                    '&$expanded': {
                        margin: 'auto',
                        borderBottom: 0,
                    },
                },
                expanded: {},
            },
            MuiAccordionSummary: {
                root: {
                    backgroundColor: AMUSIC_PALETTE_COLORS.BLACK,
                    borderTop: 0,
                    marginBottom: -1,
                    minHeight: 56,
                    '&$expanded': {
                        minHeight: 56,
                    },
                },
                content: {
                    fontFamily: [
                        '"Nunito"',
                        'sans-serif',
                    ].join(','),
                    color: AMUSIC_PALETTE_COLORS.WHITE,
                    opacity: 0.6,
                    fontSize: '16px',
                    fontWeight: 700,
                    '&$expanded': {
                        margin: '12px 0',
                    },
                },
                expanded: {},
                expandIcon: {
                    color: AMUSIC_PALETTE_COLORS.WHITE,
                    opacity: 0.6
                },
            },
            MuiAccordionDetails: {
                root: {
                    padding: '10px',
                    color: 'white',
                    opacity: '0.9',
                    '&$expanded': {
                        borderBottom: 0,
                    },
                },
            },
            MuiLink: {
                root: {
                    cursor: 'pointer',
                    color: AMUSIC_PALETTE_COLORS.WHITE,
                    '&:hover': {
                        color: AMUSIC_PALETTE_COLORS.PURPLE,
                        textDecorationColor: 'rgba(245,245,235,0.7)',
                    }
                },
            },
            MuiInputLabel: {
                root: {
                    color: '#F5F5EB'
                },
                shrink: {
                    fontSize: '22px',
                    fontWeight: 400,
                },
                formControl: {
                    top: '-5px'
                }
            },
            MuiInput: {
                root: {
                    border: '2px solid #F2F2F2',
                    borderRadius: '4px',
                    height: '40px',
                    color: 'white',
                    textDecoration: 'none',
                    '&$disabled': {
                        opacity: 0.2,
                    },
                },
                input: {
                    marginLeft: '15px',
                    width: '90%',
                    padding: 'auto',
                },
                formControl: {
                    '&$disabled': {
                        opacity: 0.6,
                    },
                },
            },
            MuiFormLabel: {
                root: {
                    '&$disabled': {
                        color: '#f5f5eb',
                    },
                }
            },
            MuiInputBase: {
                root: {
                    color: '#F5F5EB !important',
                    textDecoration: 'underline',
                    textDecorationColor: AMUSIC_PALETTE_COLORS.PURPLE,
                    '&$disabled': {
                        textDecoration: 'none',
                    },
                },
                input: {
                    padding: '0 8px 0 8px'
                }
            },
            MuiSelect: {
                select: {
                    '&:focus': {
                        backgroundColor: 'transparent',
                    },
                },
                icon:{
                    color:AMUSIC_PALETTE_COLORS.WHITE
                }
            },
            MuiListItem: {
                root: {
                    '&:hover': {
                        backgroundColor: '#382940 !important'
                    }
                }
            },
            MuiFormHelperText: {
                root: {
                    marginLeft: '15px'
                },
            },
            MuiAvatar: {
                circle: {
                    width: '80px',
                    height: '80px',
                }
            },
            MuiDialog: {
                paper: {
                    boxShadow: '5px 10px 30px rgba(0, 0, 0, 0.1)',
                    borderRadius: 10,
                },
            },
            MuiDrawer: {
                paperAnchorBottom: {
                    height: 'auto',
                    maxHeight: '98%',
                },
            },
            MuiPaper: {
                root: {
                    backgroundColor: 'rgba(38,38,38,1)',
                }
            },
            MuiMenuItem: {
                root: {
                    fontWeight: 'bold',
                    color: AMUSIC_PALETTE_COLORS.WHITE,
                }
            },
            MuiGrid: {
                root: {
                    '&:hover': {
                        backgroundColor: 'rgba(229, 229, 229, 0.1)',
                    }
                }
            },
            MuiBackdrop: {
                root: {
                    //backgroundColor: 'none',
                },
            },
            /*@ts-ignore*/
            MuiPickersToolbar: {
                toolbar: {
                    backgroundColor: AMUSIC_PALETTE_COLORS.DARK_GREEN,
                },
            },
            MuiPickersCalendarHeader: {
                switchHeader: {
                    color: AMUSIC_PALETTE_COLORS.DARK_GREEN,
                },
            },
            MuiPickersDay: {
                day: {
                    color: AMUSIC_PALETTE_COLORS.NERO,
                },
                daySelected: {
                    backgroundImage: AMUSIC_PALETTE_COLORS.VIOLET,
                },
                current: {
                    color: AMUSIC_PALETTE_COLORS.DARK_GREEN,
                },
            },

            MuiAutocomplete: {
                endAdornment: {
                    paddingRight: '10px'
                }
            },
        },
    },
    itIT,
)

