import * as React from 'react'
import {FC} from 'react'
import {Tooltip} from '@material-ui/core'
import marker from '../../../assets/img/selectedMarker.svg'
import {IEvent} from '../eventi.types'

const Marker: FC<{ lat: number, lng: number, title: string, handleClick?: any, open?: boolean, currentEvent: IEvent }> = (props) => {

    return <>
        <Tooltip title={props?.currentEvent?.eventName}>
            <div className="SuperAwesomePin" onClick={props.handleClick}>
                <img src={marker} alt="Marker"/>
            </div>
        </Tooltip>
    </>
}

export default Marker