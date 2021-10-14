import * as React from 'react'
import {FC, useRef} from 'react'
import {IconButton, makeStyles, Tooltip, useMediaQuery} from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import {useHistory} from 'react-router-dom'
import {INFO_APP_PATH} from '../routes'


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

    const isTabletDevice = useMediaQuery('max-width:767px')
    const containerRef: any = useRef(null)

    const classes = useStyles()
    const history = useHistory()

    const handleOpenInfo = () => {
        console.info("Redirect to InfoAppComponent")
        history.push(INFO_APP_PATH)
    }

    return (
        <>
            <div className={classes.container}>
                {/*TOOLBAR*/}
                <div className="row">
                    <div className="col-12 d-flex align-items-center">

                        {/* HAMBURGER MENU ICON */}
                        <IconButton edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    onClick={() => console.log('click')}>
                            <MenuIcon color="secondary" style={{opacity: 0.6}}/>
                        </IconButton>

                        {/*APP TITLE*/}
                        <Typography
                            variant="h1"
                            color="primary"
                            style={{
                                fontSize: isTabletDevice ? '20px' : '24px',
                                fontWeight: 'bold',
                            }}>
                            AMusic
                        </Typography>

                        {/* INFO APP */}
                        <div className="col d-flex justify-content-end">
                            <Tooltip title="Più informazioni">
                                <IconButton edge="start"
                                            color="inherit"
                                            onClick={handleOpenInfo}>
                                    <InfoOutlinedIcon color="secondary" style={{opacity: 0.6}}/>
                                </IconButton>
                            </Tooltip>
                        </div>
                    </div>
                </div>


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
