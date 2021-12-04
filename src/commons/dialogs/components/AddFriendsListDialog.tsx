import * as React from 'react'
import {FC, useState} from 'react'
import {Button, CircularProgress, IconButton, TextField, Typography} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import {SearchOutlined} from '@material-ui/icons'
import {useDispatch, useSelector} from 'react-redux'
import {
    fetchAddFriendAction,
    fetchFilteredFriendsListAction,
    isFetchFilteredFriendsListPendingSelector
} from '../../../containers/friends/redux/friends.actions'
import {DEFAULT_REQUEST_ID} from 'fetch-with-redux-observable'
import {
    filteredFriendsListSelector,
    suggestedFriendsListSelector
} from '../../../containers/friends/redux/friends.selectors'
import {closeCurrentDialog} from '../../../redux/dialogs/current-dialogs.actions'
import GenericFriend from '../../../containers/friends/components/GenericFriend'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined'
import {IFriend} from '../../../containers/friends/friends.types'

interface IAddFriendsListDialogProps {
}

const AddFriendsListDialog: FC<IAddFriendsListDialogProps> = () => {

    const [searchValue, setSearchValue] = useState<string>('')
    const [isSuggestedShowed, setIsSuggestedShowed] = useState<boolean>(true)

    const dispatch = useDispatch()

    const suggestedFriendsList = useSelector(suggestedFriendsListSelector)
    const filteredFriendsList = useSelector(filteredFriendsListSelector)
    const isFetchFilteredFriendsListPending = useSelector(isFetchFilteredFriendsListPendingSelector)

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value)
    }

    const handleSearch = () => {
        setIsSuggestedShowed(false)
        dispatch(fetchFilteredFriendsListAction.build(null, DEFAULT_REQUEST_ID, undefined, {search: searchValue}))
    }

    const handleShowSuggestedFriend = () => {
        setIsSuggestedShowed(prev => !prev)
    }

    const handleClose = () => {
        dispatch(closeCurrentDialog())
    }

    const handleAddFriend = (friend: any) => {
        dispatch(fetchAddFriendAction.build({idUserFriendDocument: friend?.id}, friend.id))
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
                            {
                                isSuggestedShowed &&
                                <div className="row">
                                    <div className="col-12 d-flex justify-content-center">
                                        <Typography variant={'h4'} color="textSecondary">SUGGERITI</Typography>
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
                                    (isSuggestedShowed ? suggestedFriendsList : filteredFriendsList)?.map((friend: IFriend) =>
                                        <GenericFriend sectionId="addFriendsDialog"
                                                       friend={friend}
                                                       tooltipTitle="Clicca per aggiungerlo!"
                                                       handleClick={() => handleAddFriend(friend)}/>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 pt-5 d-flex align-items-end justify-content-center">

                            {/*SUGGESTED FRIENDS*/}
                            <Button variant={'contained'}
                                    disabled={isSuggestedShowed}
                                    onClick={handleShowSuggestedFriend}
                                    className="me-3">
                                SUGGERITI
                                <VisibilityOutlinedIcon fontSize={'small'} className="ms-1 mb-1"/>
                            </Button>

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