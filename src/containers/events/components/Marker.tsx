import * as React from 'react'
import {FC} from 'react'
import {Card, CardContent, Icon, Typography} from '@material-ui/core'
import {infoAgenziaStyles} from '../EventsListContainer'

const Marker: FC<{ lat: number, lng: number, title: string, handleClick?: any, open?: boolean, currentEvent?: any }> = (props) => {

    const classes = infoAgenziaStyles()


    return <>
        <div className="SuperAwesomePin" onClick={props.handleClick}>
            <Icon>Marker
            </Icon>
        </div>
        {/*INFO AGENZIA PER MOBILE --> MODIFICARE STYLE, ALLINEAMENTO RISPETTO A MARKER */}
        {
            props.open &&
            <>
                <img alt="triangolo"
                     style={{width: '31px', height: '28px', position: 'relative', top: '15px', zIndex: 10}}/>

                <Card className={classes.cardStyle}>
                    <CardContent className="p-3">
                        {!!props.currentEvent ?
                            <>
                                {props.currentEvent?.indirizzo &&
                                <Typography variant="h6"
                                            className={`${classes.rootColor} ${classes.typography}`}>
                                    {`${props.currentEvent?.indirizzo || ''}, ${props.currentEvent?.comune || ''} - ${props.currentEvent?.cap || ''}`}
                                </Typography>
                                }
                                {(!!props.currentEvent?.phone || !!props.currentEvent?.fax) &&
                                <div className="d-flex">
                                    <Typography variant="h6"
                                                className={`${classes.rootColor} ${classes.typography}`}>
                                        Tel:
                                    </Typography>
                                    <Typography style={{marginLeft: '5px'}}
                                                variant="h6"
                                                className={classes.typography}
                                                color="inherit">
                                        <a style={{color: 'orange'}}
                                           className={classes.typography}
                                           href={`tel:${props.currentEvent?.phone}`}>
                                            {props.currentEvent?.phone}
                                        </a>
                                        {
                                            props.currentEvent?.fax &&
                                            <>
                                                <span>{` | `}</span>
                                                <a className={classes.typography}
                                                   style={{color: 'orange'}}
                                                   href={`tel:${props.currentEvent?.fax}`}>
                                                    {props.currentEvent?.fax}
                                                </a>
                                            </>
                                        }
                                    </Typography>
                                </div>
                                }
                                {!!props.currentEvent?.email &&
                                <div className="d-flex">
                                    <Typography variant="h6"
                                                className={`${classes.rootColor} ${classes.typography}`}>
                                        Email:
                                    </Typography>
                                    <Typography
                                        style={{
                                            marginLeft: '5px',
                                            textOverflow: 'ellipsis',
                                            overflow: 'hidden',
                                            whiteSpace: 'nowrap',
                                        }}
                                        variant="h6"
                                        color="secondary">
                                        <a style={{color: 'orange'}}
                                           href={`mailTo:${props.currentEvent?.email}`}
                                           className={`${classes.link} ${classes.typography}`}>
                                            {props.currentEvent?.email}
                                        </a>
                                    </Typography>
                                </div>
                                }
                            </> :
                            <div className="d-flex justify-content-center">
                                <Typography variant="h6">
                                    Nessuna informazione disponibile
                                </Typography>
                            </div>
                        }
                    </CardContent>
                </Card>
            </>}
    </>
}

export default Marker