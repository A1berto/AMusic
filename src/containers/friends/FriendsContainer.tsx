import * as React from 'react'
import {FC} from 'react'
import Typography from '@material-ui/core/Typography'
import {Button, createStyles, makeStyles} from '@material-ui/core'
import AddOutlinedIcon from '@material-ui/icons/AddOutlined'
import {useDispatch, useSelector} from 'react-redux'
import {setCurrentDialog} from '../../redux/dialogs/current-dialogs.actions'
import {CurrentDialogType} from '../../redux/dialogs/current-dialog.constants'
import {fetchSuggestedFriendsListAction, isFetchSuggestedFriendsListPendingSelector} from './redux/friends.actions'
import {DEFAULT_REQUEST_ID} from 'fetch-with-redux-observable'
import {friendsListSelector} from './redux/friends.selectors'
import {IFriend} from './friends.types'
import GenericFriend from './components/GenericFriend'

export const friendsStyles = makeStyles(() =>
    createStyles({
        friendsList: {
            overflowY: 'scroll',
            height: '50vh',
            width: '100%',
            textAlign: 'start',
            margin: 'auto',
            marginTop: '24px'
        },
    }),
)

interface IFriendsListProps {
}

const FriendsContainer: FC<IFriendsListProps> = () => {

    const classes = friendsStyles()
    const dispatch = useDispatch()

    const friendsList = useSelector(friendsListSelector)
    const isFetchSuggestedFriendsListPending = useSelector(isFetchSuggestedFriendsListPendingSelector)

    /**@description To go to addFriend section firstly I check if there are suggested friends*/
    const handleAddFriendsClick = () => {
        dispatch(fetchSuggestedFriendsListAction.build(null, DEFAULT_REQUEST_ID))
    }

    const handleOpenInfoFriend = (friend: IFriend) => {
        dispatch(setCurrentDialog(CurrentDialogType.FRIEND_INFO, {friend}))
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
                        friendsList?.map((friend: IFriend) =>
                            <GenericFriend sectionId="friendsContainer"
                                           tooltipTitle="Visualizza il dettaglio"
                                           friend={friend}
                                           handleClick={() => handleOpenInfoFriend(friend)}/>
                        )
                    }

                </div>

                <div style={{position: 'fixed', bottom: 40, right: '45.5%'}}
                     className={`animate__animated animate__infinite ${isFetchSuggestedFriendsListPending ? 'animate__pulse' : ''}`}>
                    {/* ADD FRIENDS */}
                    <Button variant={'contained'} onClick={handleAddFriendsClick}
                            disabled={isFetchSuggestedFriendsListPending}>
                        AGGIUNGI
                        <AddOutlinedIcon fontSize={'small'} className="ms-1 mb-1"/>
                    </Button>
                </div>
            </div>
        </>
    )
}
export default FriendsContainer