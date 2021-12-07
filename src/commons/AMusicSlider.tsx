import {Slider, withStyles} from '@material-ui/core'

export const AMusicSlider = withStyles({
    root: {
        color: '#936F9D',
        height: 4,
    },
    thumb: {
        height: 18,
        width: 18,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -5,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% - 2px)',
    },
    track: {
        height: 7,
        borderRadius: 4,
    },
    rail: {
        height: 6,
        borderRadius: 4,
    },
})(Slider)
