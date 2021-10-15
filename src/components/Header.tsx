import * as React from 'react'
import {FC} from 'react'
import {IconButton, Menu, MenuItem, Tooltip, useMediaQuery} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import {INFO_APP_PATH} from '../routes'
import {useHistory} from 'react-router-dom'
import {AMUSIC_PALETTE_COLORS} from '../AMusic_theme'

interface IHeaderProps {
}

const Header: FC<IHeaderProps> = props => {


    //ReactState
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

    const isTabletDevice = useMediaQuery('max-width:767px')

    const history = useHistory()

    const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleOpenInfo = () => {
        console.info('Redirect to InfoAppComponent')
        history.push(INFO_APP_PATH)
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
                    <MenuItem onClick={handleClose}>Profilo</MenuItem>
                    <MenuItem onClick={handleClose}>Eventi</MenuItem>
                    <MenuItem onClick={handleClose}>Lista amici</MenuItem>
                    <MenuItem onClick={handleClose}>Cronologia eventi</MenuItem>
                </Menu>

                {/*APP TITLE*/}
                <Typography
                    variant="h1"
                    color="secondary"
                    style={{
                        fontSize: isTabletDevice ? '20px' : '24px',
                        fontWeight: 'bold',
                    }}>
                    A<span style={{color: AMUSIC_PALETTE_COLORS.PURPLE}}>M</span>usic
                </Typography>

                {/* INFO APP */}
                <div className="col d-flex justify-content-end">
                    <Tooltip title="Più informazioni">
                        <IconButton edge="start"
                                    color="inherit"
                                    onClick={handleOpenInfo}>
                            <InfoOutlinedIcon color="secondary" style={{opacity: 0.6}}/>
                        </IconButton>
                    </Tooltip>
                </div>
            </div>
        </div>
    )
}
export default Header