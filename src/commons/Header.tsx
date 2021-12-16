import * as React from 'react'
import {FC, useState} from 'react'
import {IconButton, Menu, MenuItem, Tooltip, Typography} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import {
    EVENTS_HISTORY_PATH,
    EVENTS_PATH,
    FRIENDS_LIST_PATH,
    INFO_APP_PATH,
    LOGIN_OR_SIGNIN_PATH,
    PROFILE_PATH
} from '../routes'
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {fetchFriendsListAction, isFetchFriendsListPendingSelector} from '../containers/friends/redux/friends.actions'
import {DEFAULT_REQUEST_ID} from 'fetch-with-redux-observable'
import {isFetchProfilePendingSelector} from '../containers/profile/redux/profile.actions'
import {
    fetchEventsHistoryListAction, fetchNearEventsListAction,
    isFetchEventsHistoryListPendingSelector,
    isFetchNearEventsListPendingSelector
} from '../containers/events/redux/eventi.actions'
import {AMUSIC_PALETTE_COLORS} from '../AMusic_theme'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import {userLocationSelector} from '../containers/events/user-location/user-location.selectors'


interface IHeaderProps {
}

const Header: FC<IHeaderProps> = () => {

    //ReactState
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

    const history = useHistory()
    const dispatch = useDispatch()

    const location = useSelector(userLocationSelector)
    const isFetchProfilePending = useSelector(isFetchProfilePendingSelector)
    const isFetchNearEventsListPending = useSelector(isFetchNearEventsListPendingSelector)
    const isFetchEventsHistoryListPending = useSelector(isFetchEventsHistoryListPendingSelector)
    const isFetchFriendsListPending = useSelector(isFetchFriendsListPendingSelector)

    const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        !history.location.pathname.includes(LOGIN_OR_SIGNIN_PATH) && setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleOpenSection = (path: string) => {
        if (!history.location.pathname.includes(LOGIN_OR_SIGNIN_PATH)) {
            switch (path) {
                case PROFILE_PATH:
                    history.push(PROFILE_PATH)
                    setAnchorEl(null)
                    break
                case EVENTS_PATH:
                    dispatch(fetchNearEventsListAction.build(null, DEFAULT_REQUEST_ID, undefined, {lat: location?.latitude, lon: location?.longitude}, {setAnchorEl}))
                    break
                case FRIENDS_LIST_PATH:
                    dispatch(fetchFriendsListAction.build(null, DEFAULT_REQUEST_ID, undefined, undefined, {setAnchorEl}))
                    break
                case EVENTS_HISTORY_PATH:
                    dispatch(fetchEventsHistoryListAction.build(null, DEFAULT_REQUEST_ID, undefined, undefined, {setAnchorEl}))
                    break
                case INFO_APP_PATH:
                    history.push(INFO_APP_PATH)
                    break
            }
        }
    }

    const isSectionDisabled = (path: string) => {
        return !window.location.hash.includes(path)
    }

    return (
        <div className="row">
            <div className="col-12 d-flex align-items-center">

                {/* HAMBURGER MENU ICON */}
                <IconButton edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleOpenMenu}>
                    <MenuIcon color="secondary" style={{opacity: 0.6}}/>
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    getContentAnchorEl={null}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    {
                        isSectionDisabled(PROFILE_PATH) &&
                        <MenuItem onClick={() => handleOpenSection(PROFILE_PATH)}
                                  className={`animate__animated animate__infinite ${isFetchProfilePending ? 'animate__headShake' : ''}`}>
                            Profilo
                        </MenuItem>
                    }
                    {
                        isSectionDisabled(EVENTS_PATH) &&
                        <MenuItem onClick={() => handleOpenSection(EVENTS_PATH)}
                                  className={`animate__animated animate__infinite ${isFetchNearEventsListPending ? 'animate__headShake' : ''}`}>
                            Eventi
                        </MenuItem>
                    }
                    {
                        isSectionDisabled(FRIENDS_LIST_PATH) &&
                        <MenuItem onClick={() => handleOpenSection(FRIENDS_LIST_PATH)}
                                  className={`animate__animated animate__infinite ${isFetchFriendsListPending ? 'animate__headShake' : ''}`}>
                            Lista amici
                        </MenuItem>
                    }
                    {
                        isSectionDisabled(EVENTS_HISTORY_PATH) &&
                        <MenuItem onClick={() => handleOpenSection(EVENTS_HISTORY_PATH)}
                                  className={`animate__animated animate__infinite ${isFetchEventsHistoryListPending ? 'animate__headShake' : ''}`}>
                            Cronologia eventi
                        </MenuItem>
                    }
                </Menu>

                {/*APP TITLE*/}
                <Typography
                    variant="h1"
                    color="secondary"
                    style={{
                        fontSize: '24px',
                        fontWeight: 'bold',
                    }}>
                    A<span style={{color: AMUSIC_PALETTE_COLORS.PURPLE}}>M</span>usic
                </Typography>

                {/* INFO APP */}
                <div className="col d-flex justify-content-end">
                    <Tooltip title="Più informazioni">
                        <IconButton edge="start"
                                    color="inherit"
                                    onClick={() => handleOpenSection(INFO_APP_PATH)}>
                            <InfoOutlinedIcon color="secondary" style={{opacity: 0.6}}/>
                        </IconButton>
                    </Tooltip>
                </div>
            </div>
        </div>
    )
}
export default Header