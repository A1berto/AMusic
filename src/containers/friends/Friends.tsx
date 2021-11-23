import * as React from 'react'
import {FC, useEffect, useState} from 'react'
import Typography from '@material-ui/core/Typography'
import {Button, TextField} from '@material-ui/core'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined'
import AddOutlinedIcon from '@material-ui/icons/AddOutlined'
import {useDispatch} from 'react-redux'
import {setCurrentDialog} from '../../redux/dialogs/current-dialogs.actions'
import {CurrentDialogType} from '../../redux/dialogs/current-dialog.constants'
import FriendsList from './components/FriendsList'
import {fetchFriendsListAction} from './redux/friends.actions'
import {DEFAULT_REQUEST_ID} from 'fetch-with-redux-observable'

interface IFriendsListProps {
}

const Friends: FC<IFriendsListProps> = () => {
    const dispatch = useDispatch()

    const [isSearchClicked, setIsSearchClicked] = useState<boolean>(false)
    const [searchValue, setSearchValue] = useState<string>('')


    useEffect(() => {
        dispatch(fetchFriendsListAction.build(null, DEFAULT_REQUEST_ID, {USER_ID: 'asd'}))
    }, [dispatch])

    const handleAddFriendsClick = () => {
        dispatch(setCurrentDialog(CurrentDialogType.ADD_FRIENDS_LIST))
    }

    const handleSearch = () => {
        setIsSearchClicked(prev => !prev)
    }

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value)
    }

    return (
        <>
            <div style={{textAlign: 'center', width: '50%'}}>
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
                <div className="row mt-5"
                     style={{overflowY: 'scroll', height: '40vh', width: '30vw', textAlign: 'start', margin: 'auto'}}>
                    <FriendsList friendsList={[]}/>
                </div>

                <div style={{position: 'fixed', bottom: 40, right: '40%'}}>

                    {
                        isSearchClicked &&
                        <div className="pb-3">
                            <TextField
                                value={searchValue}
                                onChange={handleSearchChange}
                                variant="standard"
                            />
                        </div>
                    }

                    {/* SEARCH BUTTON */}
                    <Button variant={'contained'}
                            onClick={handleSearch}
                            className="me-4">
                        {isSearchClicked ? 'ANNULLA' : 'CERCA'}
                        <SearchOutlinedIcon fontSize={'small'} className="ms-1 mb-1"/>
                    </Button>

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