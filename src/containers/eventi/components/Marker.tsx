import * as React from 'react'
import {FC} from 'react'
import {Card, CardContent, Icon, Typography} from '@material-ui/core'
import {infoAgenziaStyles} from '../Events'

const Marker: FC<{ lat: number, lng: number, title: string, handleClick?: any, open?: boolean, agenziaCorrente?: any }> = (props) => {

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
                        {!!props.agenziaCorrente ?
                            <>
                                {props.agenziaCorrente?.indirizzo &&
                                <Typography variant="h6"
                                            className={`${classes.rootColor} ${classes.typography}`}>
                                    {`${props.agenziaCorrente?.indirizzo || ''}, ${props.agenziaCorrente?.comune || ''} - ${props.agenziaCorrente?.cap || ''}`}
                                </Typography>
                                }
                                {(!!props.agenziaCorrente?.phone || !!props.agenziaCorrente?.fax) &&
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
                                           href={`tel:${props.agenziaCorrente?.phone}`}>
                                            {props.agenziaCorrente?.phone}
                                        </a>
                                        {
                                            props.agenziaCorrente?.fax &&
                                            <>
                                                <span>{` | `}</span>
                                                <a className={classes.typography}
                                                   style={{color: 'orange'}}
                                                   href={`tel:${props.agenziaCorrente?.fax}`}>
                                                    {props.agenziaCorrente?.fax}
                                                </a>
                                            </>
                                        }
                                    </Typography>
                                </div>
                                }
                                {!!props.agenziaCorrente?.email &&
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
                                           href={`mailTo:${props.agenziaCorrente?.email}`}
                                           className={`${classes.link} ${classes.typography}`}>
                                            {props.agenziaCorrente?.email}
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