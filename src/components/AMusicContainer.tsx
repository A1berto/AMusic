import * as React from 'react'
import {FC, useRef} from 'react'
import {makeStyles, useMediaQuery} from '@material-ui/core'
import Header from './Header'


const useStyles = makeStyles(() => ({
    container: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '65px 70px'
    },
    components: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        padding: '10px'
    }
}))

interface IAMusicContainerProps {
}

const AMusicContainerFC: FC<IAMusicContainerProps> = props => {

    const containerRef: any = useRef(null)

    const classes = useStyles()


    return (
        <>
            <div className={classes.container}>

                {/*HEADER*/}
                <Header/>

                {/*MOUNTED COMPONENT*/}
                <div ref={containerRef} className="container-fluid h-100">
                    <div className={classes.components}>
                        {props.children}
                    </div>
                </div>
            </div>

        </>
    )
}

export const AMusicContainer = AMusicContainerFC
