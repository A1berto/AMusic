import * as React from 'react'
import {FC, useEffect} from 'react'
import Typography from '@material-ui/core/Typography'
import {Avatar, Button, createStyles, makeStyles} from '@material-ui/core'
import AddOutlinedIcon from '@material-ui/icons/AddOutlined'
import {useDispatch} from 'react-redux'
import {setCurrentDialog} from '../../redux/dialogs/current-dialogs.actions'
import {CurrentDialogType} from '../../redux/dialogs/current-dialog.constants'
import {fetchFriendsListAction} from './redux/friends.actions'
import {DEFAULT_REQUEST_ID} from 'fetch-with-redux-observable'
import Image from '../../assets/img/avatar-man.jpg'

export const friendsStyles = makeStyles(() =>
    createStyles({
        friendsList: {
            overflowY: 'scroll',
            height: '50vh',
            width: '100%',
            textAlign: 'start',
            margin: 'auto',
            marginTop:'24px'
        },
    }),
)


export const friendsList = [
    {name: 'Andrea', surname: 'Messina'},
    {name: 'Lorenzo', surname: 'Castorina'},
    {name: 'Sara', surname: 'Testa'},
    {name: 'Luca', surname: 'Varriale'},
    {name: 'Andrea', surname: 'Potì'},
    {name: 'Andrea', surname: 'Guarino'},
    {name: 'Antonino', surname: 'Manuguerra'},
    {name: 'Rossana', surname: 'Provenzano'},
    {name: 'Anna Maria', surname: 'Urso'},
    {name: 'Andrea', surname: 'Messina'},
    {name: 'Lorenzo', surname: 'Castorina'},
    {name: 'Sara', surname: 'Testa'},
    {name: 'Luca', surname: 'Varriale'},
    {name: 'Andrea', surname: 'Potì'},
    {name: 'Andrea', surname: 'Guarino'},
    {name: 'Antonino', surname: 'Manuguerra'},
    {name: 'Rossana', surname: 'Provenzano'},
    {name: 'Anna Maria', surname: 'Urso'},
    {name: 'Ciccio', surname: 'Urso'},
]

interface IFriendsListProps {
}

const Friends: FC<IFriendsListProps> = () => {

    const classes = friendsStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchFriendsListAction.build(null, DEFAULT_REQUEST_ID))
    }, [dispatch])

    const handleAddFriendsClick = () => {
        dispatch(setCurrentDialog(CurrentDialogType.ADD_FRIENDS_LIST))
    }

    const handleOpenInfoFriend = () => {
        dispatch(setCurrentDialog(CurrentDialogType.FRIEND_INFO))
    }

    return (
        <>
            <div style={{textAlign: 'center', width: '70%'}}>
                <div className="row pb-2">

                    {/* TITLE */}
                    <div className="col-12 d-flex justify-content-center">
                        <Typography variant={'h3'} color="primary">Lista amici</Typography>
                    </div>

                    {/*SUBTITLE*/}
                    <div className="col-12 d-flex justify-content-center">
                        <Typography variant={'h4'} color="secondary">
                            Visualizza gli amici che fanno parte della tua community oppure aggiungine altri!
                        </Typography>
                    </div>
                </div>

                {/* FRIENDS LIST */}
                <div className={`row px-2 ${classes.friendsList}`}>
                    {
                        friendsList?.map((friend: any) =>
                            <div className="col-4 p-4 d-flex align-items-center friend c-pointer"
                                 onClick={handleOpenInfoFriend}>
                                <Avatar
                                    variant="circle"
                                    alt="Profile Image"
                                    src={Image}         //TODO friend.image
                                    onClick={() => console.log('Cliccato avatar')}/>
                                <Typography variant="body2"
                                            color="secondary"
                                            className="ms-4">
                                    {`${friend.name} ${friend.surname}`}
                                </Typography>
                            </div>
                        )
                    }

                </div>

                <div style={{position: 'fixed', bottom: 40, right: '45.5%'}}>
                    {/* ADD FRIENDS */}
                    <Button variant={'contained'} onClick={handleAddFriendsClick}>
                        AGGIUNGI
                        <AddOutlinedIcon fontSize={'small'} className="ms-1 mb-1"/>
                    </Button>
                </div>
            </div>
        </>
    )
}
export default Friends