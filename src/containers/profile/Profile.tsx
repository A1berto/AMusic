import * as React from 'react'
import {FC, useState} from 'react'
import {Avatar, Button, InputBase, Tooltip, Typography} from '@material-ui/core'
import Image from '../../assets/img/avatar-man.jpg'
import {AMUSIC_PALETTE_COLORS} from '../../AMusic_theme'
import {CurrentDialogType} from '../../redux/dialogs/current-dialog.constants'
import {setCurrentDialog} from '../../redux/dialogs/current-dialogs.actions'
import {useDispatch} from 'react-redux'


interface IProfileProps {
}

const Profile: FC<IProfileProps> = () => {

    const [isEditProfile, setIsEditProfile] = useState<boolean>(false)

    const dispatch = useDispatch()

    //La utilizzerò per popolare l'avatar, ogni volta che effettuo la modifica devo cambiare lo state su redux
    /*
        const profileImage = useSelector(profileImageSelector)
    */

    const handleEditClick = () => {
        setIsEditProfile(prevState => !prevState)
    }
    const handleOpenEditImageDialog = () => {
        dispatch(setCurrentDialog(CurrentDialogType.EDIT_PROFILE_IMAGE))
    }

    return (
        <div style={{width: '70%'}}>
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <Tooltip title="Change profile image" placement="right" className="c-pointer">
                        <Avatar
                            variant="circle"
                            alt="Profile Image"
                            src={Image}
                            onClick={handleOpenEditImageDialog}/>
                    </Tooltip>
                </div>
                <div className="col-12 d-flex justify-content-center"
                     style={{
                         marginTop: '-10px',
                         background: AMUSIC_PALETTE_COLORS.BLACK,
                         zIndex: 1
                     }}>
                    <Typography variant={'h3'} color="primary">Alberto Manuguerra</Typography>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-6">
                    <div className="row">
                        <div className="col-12 px-1 mb-2">
                            <Typography variant="h2" color="secondary">
                                Dati
                            </Typography>
                        </div>
                        <div className="col-12 d-flex align-items-center mt-4">
                            <div className="col-3">
                                <Typography variant="h4"
                                            color="secondary"
                                            style={{opacity: 0.6}}>
                                    Città
                                </Typography>
                            </div>
                            <div className="col-4">
                                <InputBase
                                    defaultValue="Trapani"
                                    color="secondary"
                                    disabled={!isEditProfile}/>
                            </div>
                        </div>
                        <div className="col-12 d-flex align-items-center mt-4">
                            <div className="col-3">
                                <Typography variant="h4"
                                            color="secondary"
                                            style={{opacity: 0.6}}>
                                    Età
                                </Typography>
                            </div>
                            <div className="col-4">
                                <InputBase
                                    defaultValue="21"
                                    color="secondary"
                                    type="number"
                                    disabled={!isEditProfile}/>
                            </div>
                        </div>
                        <div className="col-12 d-flex align-items-center mt-4">
                            <div className="col-3">
                                <Typography variant="h4"
                                            color="secondary"
                                            style={{opacity: 0.6}}>
                                    Sesso
                                </Typography>
                            </div>
                            <div className="col-4">
                                <InputBase
                                    defaultValue="Maschio"
                                    color="secondary"
                                    disabled={!isEditProfile}/>
                            </div>
                        </div>
                        <div className="col-12 d-flex align-items-center mt-4">
                            <div className="col-3">
                                <Typography variant="h4"
                                            color="secondary"
                                            style={{opacity: 0.6}}>
                                    Altro 1
                                </Typography>
                            </div>
                            <div className="col-4">
                                <InputBase
                                    defaultValue="asdasfdas"
                                    color="secondary"
                                    disabled={!isEditProfile}/>
                            </div>
                        </div>
                        <div className="col-12 d-flex align-items-center mt-4">
                            <div className="col-3">
                                <Typography variant="h4"
                                            color="secondary"
                                            style={{opacity: 0.6}}>
                                    Altro 2
                                </Typography>
                            </div>
                            <div className="col-4">
                                <InputBase
                                    defaultValue="asdasfdas"
                                    color="secondary"
                                    disabled={!isEditProfile}/>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-6">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-end px-1 mb-2">
                            <Typography variant="h2" color="secondary">
                                Credenziali
                            </Typography>
                        </div>
                        <div className="col-12 d-flex justify-content-end align-items-center mt-4">
                            <div className="col-3">
                                <Typography variant="h4"
                                            color="secondary"
                                            style={{opacity: 0.6}}>
                                    Email
                                </Typography>
                            </div>
                            <div className="col-4">
                                <InputBase
                                    defaultValue="albertomanuguerra18@gmail.com"
                                    color="secondary"
                                    disabled
                                />
                            </div>
                        </div>
                        <div className="col-12 d-flex justify-content-end align-items-center mt-4">
                            <div className="col-3">
                                <Typography variant="h4"
                                            color="secondary"
                                            style={{opacity: 0.6}}>
                                    Password
                                </Typography>
                            </div>
                            <div className="col-4">
                                <InputBase
                                    defaultValue="asfasfasdasd"
                                    color="secondary"
                                    type="password"
                                    disabled={!isEditProfile}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-end" style={{marginTop: '110px'}}>
                        <Button variant="contained" onClick={handleEditClick}>
                            {isEditProfile ? 'Conferma modifica' : 'Modifica dati'}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile