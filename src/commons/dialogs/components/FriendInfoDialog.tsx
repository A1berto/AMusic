import * as React from 'react'
import {FC} from 'react'
import {IconButton, Link, Tooltip, Typography} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import {useDispatch} from 'react-redux'
import {closeCurrentDialog, setCurrentDialog} from '../../../redux/dialogs/current-dialogs.actions'
import {CurrentDialogType} from '../../../redux/dialogs/current-dialog.constants'
import {IEvent} from '../../../containers/events/eventi.types'
import {IFriend} from '../../../containers/friends/friends.types'

interface IFriendInfoDialogProps {
    friend: IFriend
}

const FriendInfoDialog: FC<IFriendInfoDialogProps> = (props) => {
    const {friend} = props
    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch(closeCurrentDialog())
    }

    const handleOpenEvent = (event: IEvent) => {
        dispatch(setCurrentDialog(CurrentDialogType.LOCAL_DETAILS, {event}))
    }

    return (
        <>
            <div className="row m-4" style={{width: '600px', minHeight: '300px', alignContent: 'start'}}>
                <div className="col-12">

                    <div className="row">
                        <div className="col-12 p-1 d-flex align-items-center">
                            {/* TITLE */}
                            <Typography variant={'h3'} color="primary">Dettagli amico</Typography>

                            {/* CLOSE BUTTON*/}
                            <div style={{position: 'absolute', right: 16}}>
                                <IconButton onClick={handleClose}
                                            color="secondary">
                                    <CloseIcon/>
                                </IconButton>
                            </div>
                        </div>
                    </div>

                    <div className="row pt-4">
                        <div className="col-12 d-flex align-items-end">
                            <div className="col-auto">
                                <Typography variant="h4"
                                            color="textSecondary">
                                    Amici da
                                </Typography>
                            </div>
                            <div className="col">
                                <Typography variant="h6"
                                            color="secondary"
                                            className="ms-3">
                                    {friend.friendSince}
                                </Typography>
                            </div>
                        </div>
                        <div className="col-12 pt-3 d-flex align-items-baseline">
                            <div className="col-auto">
                                <Typography variant="h4"
                                            color="textSecondary">
                                    Ultimo accesso
                                </Typography>
                            </div>
                            <div className="col">
                                <Typography variant="h6"
                                            color="secondary"
                                            className="ms-3">
                                    {friend.lastLogin}
                                </Typography>
                            </div>
                        </div>
                    </div>

                    <div className="row pt-3">
                        <Typography variant={'h4'} color="textSecondary">
                            Lista iscrizione eventi
                        </Typography>
                        <div className="col-12 d-flex">
                            {
                                friend?.nextEvents?.map((event: IEvent, index) =>
                                <Tooltip title="Clicca per visionare"
                                         className="c-pointer"
                                         onClick={() => handleOpenEvent(event)}>
                                    <Link className="me-2">
                                        {event?.eventName}{friend?.nextEvents?.length - 1 !== index ? `,` : '.'}
                                    </Link>
                                </Tooltip>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default FriendInfoDialog