import * as React from 'react'
import {FC} from 'react'
import {Avatar, CircularProgress, Tooltip, Typography} from '@material-ui/core'
import {useDispatch, useSelector} from 'react-redux'
import {fetchAddFriendAction, isFetchAddFriendPendingSelector} from '../redux/friends.actions'
import {IFriend} from '../friends.types'

interface IAddFriendListProps {
    friend: IFriend
}

const AddFriendList: FC<IAddFriendListProps> = (props) => {
    const {friend} = props
    const dispatch = useDispatch()

    const isFetchAddFriendPending = useSelector(isFetchAddFriendPendingSelector(friend.id))

    const handleAddFriend = (friend: any) => {
        dispatch(fetchAddFriendAction.build({idUserFriendDocument: friend?.id}, friend.id))
    }

    return (
        <>
            <div className="col-4 p-4 d-flex align-items-center c-pointer friend"
                 onClick={() => handleAddFriend(friend)}>
                <Tooltip title={'Clicca per aggiungerlo!'}>
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
                </Tooltip>
            </div>
        </>
    )
}
export default AddFriendList