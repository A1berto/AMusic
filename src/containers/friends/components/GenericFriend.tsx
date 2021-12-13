import * as React from 'react'
import {FC, useMemo, useState} from 'react'
import {Avatar, CircularProgress, IconButton, Tooltip, Typography} from '@material-ui/core'
import {useDispatch, useSelector} from 'react-redux'
import {
    fetchDeleteFriendAction,
    isFetchAddFriendPendingSelector,
    isFetchDeleteFriendPendingSelector
} from '../redux/friends.actions'
import {IFriend} from '../friends.types'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import {AMUSIC_PALETTE_COLORS} from '../../../AMusic_theme'

interface IAddFriendListProps {
    friend: IFriend
    tooltipTitle: string
    handleClick: any
    sectionId: string
}

const GenericFriend: FC<IAddFriendListProps> = (props) => {
    const {sectionId, friend, tooltipTitle, handleClick} = props

    const [isDeleteFriendPossible, setIsDeleteFriendPossible] = useState<boolean>(false)
    const isFetchAddFriendPending = useSelector(isFetchAddFriendPendingSelector(friend.id))
    const isFetchDeleteFriendPending = useSelector(isFetchDeleteFriendPendingSelector(friend.id))

    const dispatch = useDispatch()

    const isAddFriendDialogSection = useMemo(() => {
        return sectionId === 'addFriendsDialog'
    }, [sectionId])

    const onMouseEnter = () => {
        !isAddFriendDialogSection && setIsDeleteFriendPossible(true)
    }

    const onMouseLeave = () => {
        !isAddFriendDialogSection && setIsDeleteFriendPossible(false)
    }

    const handleDeleteFriend = () => {
        console.log('friend>>>', friend)
        dispatch(fetchDeleteFriendAction.build({idUserFriendDocument: friend?.id}, friend.id))
    }

    return (
        <>

            <div className="col-4 p-4 d-flex align-items-center friend"
                 onMouseEnter={onMouseEnter}
                 onMouseLeave={onMouseLeave}>
                <div className="row d-flex c-pointer">
                    <div className="col-auto d-flex">
                        <div className="d-flex align-items-center">
                            {
                                isFetchAddFriendPending ?
                                    <CircularProgress className="ms-2" size={80}
                                                      style={{color: 'white'}}/> :
                                    <Avatar variant="circular"
                                            alt="Friend Image"
                                            src={friend?.photoUrl}/>
                            }
                            {
                                isDeleteFriendPossible &&
                                <Tooltip title={'Elimina amico'}
                                         style={{marginLeft: '-65px', marginRight: '17px', backgroundColor: 'white'}}>
                                    <IconButton onClick={handleDeleteFriend} color="primary">
                                        {
                                            isFetchDeleteFriendPending ?
                                                <CircularProgress size={20}
                                                                  style={{color: AMUSIC_PALETTE_COLORS.PURPLE}}/> :
                                                <DeleteOutlineIcon/>
                                        }
                                    </IconButton>
                                </Tooltip>
                            }
                            <Tooltip title={tooltipTitle}
                                     onClick={handleClick}>
                                <Typography variant="body2"
                                            color="secondary"
                                            className="ms-4">
                                    {friend?.displayName}
                                </Typography>
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default GenericFriend