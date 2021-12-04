import * as React from 'react'
import {FC, useMemo, useState} from 'react'
import {Avatar, CircularProgress, IconButton, Tooltip, Typography} from '@material-ui/core'
import {useSelector} from 'react-redux'
import {isFetchAddFriendPendingSelector} from '../redux/friends.actions'
import {IFriend} from '../friends.types'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'

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

    const isAddFriendDialogSection = useMemo(() => {
        return sectionId === 'addFriendsDialog'
    }, [sectionId])

    const onMouseEnter = () => {
        !isAddFriendDialogSection && setIsDeleteFriendPossible(true)
    }

    const onMouseLeave = () => {
        !isAddFriendDialogSection && setIsDeleteFriendPossible(false)
    }


    return (
        <>

            <div className="col-4 p-4 d-flex align-items-center friend"
                 onMouseEnter={onMouseEnter}
                 onMouseLeave={onMouseLeave}>
                <div className="row d-flex c-pointer">
                    <Tooltip title={tooltipTitle}>
                        <div className="col-auto d-flex"
                             onClick={handleClick}>
                            <div className="d-flex align-items-center">
                                {
                                    isFetchAddFriendPending ?
                                        <CircularProgress className="ms-2" size={80}
                                                          style={{color: 'white'}}/> :
                                        <Avatar variant="circle"
                                                alt="Friend Image"
                                                src={friend.photoUrl}/>
                                }
                                <Typography variant="body2"
                                            color="secondary"
                                            className="ms-4">
                                    {friend?.displayName}
                                </Typography>
                            </div>
                        </div>
                    </Tooltip>

                    <div className="col d-flex justify-content-center">
                        {
                            isDeleteFriendPossible &&
                            <Tooltip title={'Elimina amico'}>
                                <IconButton onClick={() => console.log('cliccato cancella')} color="primary">
                                    <DeleteOutlineIcon/>
                                </IconButton>
                            </Tooltip>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default GenericFriend