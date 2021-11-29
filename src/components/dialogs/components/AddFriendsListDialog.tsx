import * as React from 'react'
import {FC, useState} from 'react'
import {Avatar, Button, CircularProgress, IconButton, TextField, Typography} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import Image from '../../../assets/img/avatar-man.jpg'
import {SearchOutlined} from '@material-ui/icons'
import {useDispatch, useSelector} from 'react-redux'
import {
    fetchAddFriendAction,
    fetchFilteredFriendsListAction,
    isFetchFilteredFriendsListPendingSelector
} from '../../../containers/friends/redux/friends.actions'
import {DEFAULT_REQUEST_ID} from 'fetch-with-redux-observable'
import {filteredFriendsListSelector} from '../../../containers/friends/redux/friends.selectors'
import {friendsList} from '../../../containers/friends/Friends'
import {closeCurrentDialog} from '../../../redux/dialogs/current-dialogs.actions'

interface IAddFriendsListDialogProps {
}

const AddFriendsListDialog: FC<IAddFriendsListDialogProps> = () => {

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
        dispatch(fetchAddFriendAction.build(null, DEFAULT_REQUEST_ID, undefined, {idUserDocument: friend?.id}))
    }

    const handleSearch = () => {
        dispatch(fetchFilteredFriendsListAction.build(null, DEFAULT_REQUEST_ID, undefined, {search: searchValue}))
    }

    const handleClose = () => {
        dispatch(closeCurrentDialog())
    }

    return (
        <>
            <div className="row m-4" style={{width: '900px', minHeight: '500px', alignContent: 'start'}}>
                <div className="col-12">

                    <div className="row">
                        <div className="col-12 d-flex justify-content-center align-items-center">

                            {/* TITLE */}
                            <Typography variant={'h3'} color="primary">Ricerca amici</Typography>

                            {/* CLOSE BUTTON*/}
                            <div style={{position: 'absolute', right: 16}}>
                                <IconButton onClick={handleClose}
                                            color="secondary">
                                    <CloseIcon/>
                                </IconButton>
                            </div>
                        </div>
                        <div className="col-12 text-center">
                            <Typography variant={'h4'} color="secondary">
                                Clicca su un amico per aggiungerlo alla tua community!
                            </Typography>
                        </div>
                    </div>

                    {/*CONTENT*/}
                    <div className="row pt-5">
                        {/*SUGGERITI*/}
                        <div className="col-12">


                            {/*TITLE*/}
                            {
                                !filteredFriendsList &&
                                <div className="row">
                                    <div className="col-12 d-flex justify-content-center">
                                        <Typography variant={'h4'} color="secondary"
                                                    style={{opacity: 0.6}}>SUGGERITI</Typography>
                                    </div>
                                </div>
                            }
                            <div className="row mt-2 px-2"
                                 style={{
                                     overflowY: 'scroll',
                                     height: '35vh',
                                     width: '100%',
                                     textAlign: 'start',
                                     margin: 'auto'
                                 }}>
                                {
                                    (!!filteredFriendsList ? filteredFriendsList : friendsList)?.map((friend: any) =>
                                        <div className="col-4 p-4 d-flex align-items-center c-pointer friend"
                                             onClick={() => handleAddFriend(friend)}>
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
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 pt-5 d-flex align-items-end justify-content-center">
                            <TextField
                                value={searchValue}
                                onChange={handleSearchChange}
                                label="Filtra la ricerca"
                                InputLabelProps={{
                                    shrink: true
                                }}/>

                            {/* SEARCH FRIENDS*/}
                            <Button variant={'contained'} onClick={handleSearch} className="ms-3">
                                CERCA UTENTE
                                {
                                    isFetchFilteredFriendsListPending ?
                                        <CircularProgress className="ms-2" size={20} style={{color: 'white'}}/> :
                                        <SearchOutlined fontSize={'small'} className="ms-1 mb-1"/>
                                }
                            </Button>
                        </div>

                    </div>
                </div>

            </div>

        </>
    )
}
export default AddFriendsListDialog