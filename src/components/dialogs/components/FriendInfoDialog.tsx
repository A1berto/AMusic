import * as React from 'react'
import {FC, useState} from 'react'
import {IconButton, Link, Typography} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import {useDispatch, useSelector} from 'react-redux'
import {
    fetchFilteredFriendsListAction,
    isFetchFilteredFriendsListPendingSelector
} from '../../../containers/friends/redux/friends.actions'
import {DEFAULT_REQUEST_ID} from 'fetch-with-redux-observable'
import {filteredFriendsListSelector} from '../../../containers/friends/redux/friends.selectors'

interface IAddFriendsListDialogProps {
}

const AddFriendsListDialog: FC<IAddFriendsListDialogProps> = props => {

    const [searchValue, setSearchValue] = useState<string>('')

    const dispatch = useDispatch()
    /*
        const friendsList = useSelector(friendsListSelector)  TODO decommentare quando il be tornerà la lista
    */
    const filteredFriendsList = useSelector(filteredFriendsListSelector)
    const isFetchFilteredFriendsListPending = useSelector(isFetchFilteredFriendsListPendingSelector)


    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value)
    }

    const handleAddFriend = (friend: any) => {
        //TODO dispatch addFriend
    }

    const handleSearch = () => {
        dispatch(fetchFilteredFriendsListAction.build(null, DEFAULT_REQUEST_ID, undefined, {name: searchValue}))
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
                                <IconButton onClick={() => console.log('amici')}
                                            color="secondary">
                                    <CloseIcon/>
                                </IconButton>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12 d-flex align-items-baseline">
                            <div className="col-auto">
                                <Typography variant="h4"
                                            color="secondary"
                                            style={{opacity: 0.6}}>
                                    Data di nascita
                                </Typography>
                            </div>
                            <div className="col">
                                <Typography variant="h6"
                                            color="secondary"
                                            className="ms-3">
                                    22/10/2020
                                </Typography>
                            </div>
                        </div>
                    </div>

                    <div className="row pt-3">
                        <Typography variant={'h4'} color="secondary" style={{opacity: 0.6}}>
                            Lista iscrizione eventi
                        </Typography>
                        {[].map((evento: any) => <Link>{evento?.name}</Link>)}
                    </div>

                </div>

            </div>

        </>
    )
}
export default AddFriendsListDialog