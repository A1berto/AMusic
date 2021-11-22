import * as React from 'react'
import {FC} from 'react'
import Typography from '@material-ui/core/Typography'
import {Avatar, Button} from '@material-ui/core'
import Image from '../../assets/img/avatar-man.jpg'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined'

interface IFriendsListProps {
}

const FriendsList: FC<IFriendsListProps> = () => {
    return (
        <>
            <div style={{textAlign: 'center', width: '50%'}}>
                <div className="row">

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

{/*
                //TODO devo far scrollare solamente le image
*/}
                <div className="row mt-5 flex-column">
                    <div className="col p-2 d-flex align-items-center justify-content-center">
                        <Avatar
                            variant="circle"
                            alt="Profile Image"
                            src={Image}         //TODO passare l'url che viene dal be
                            onClick={() => console.log('Cliccato avatar')}/>
                        <Typography variant="body2"
                                    color="secondary"
                                    className="ms-4">
                            Andrea Messina
                        </Typography>
                    </div>

                    <div className="col p-2 d-flex align-items-center justify-content-center">
                        <Avatar
                            variant="circle"
                            alt="Profile Image"
                            src={Image}         //TODO passare l'url che viene dal be
                            onClick={() => console.log('Cliccato avatar')}/>
                        <Typography variant="body2"
                                    color="secondary"
                                    className="ms-4">
                            Andrea Messina
                        </Typography>
                    </div>

                    <div className="col p-2 d-flex align-items-center justify-content-center">
                        <Avatar
                            variant="circle"
                            alt="Profile Image"
                            src={Image}         //TODO passare l'url che viene dal be
                            onClick={() => console.log('Cliccato avatar')}/>
                        <Typography variant="body2"
                                    color="secondary"
                                    className="ms-4">
                            Andrea Messina
                        </Typography>
                    </div>

                    <div className="col p-2 d-flex align-items-center justify-content-center">
                        <Avatar
                            variant="circle"
                            alt="Profile Image"
                            src={Image}         //TODO passare l'url che viene dal be
                            onClick={() => console.log('Cliccato avatar')}/>
                        <Typography variant="body2"
                                    color="secondary"
                                    className="ms-4">
                            Andrea Messina
                        </Typography>
                    </div>

                    <div className="col p-2 d-flex align-items-center justify-content-center">
                        <Avatar
                            variant="circle"
                            alt="Profile Image"
                            src={Image}         //TODO passare l'url che viene dal be
                            onClick={() => console.log('Cliccato avatar')}/>
                        <Typography variant="body2"
                                    color="secondary"
                                    className="ms-4">
                            Andrea Messina
                        </Typography>
                    </div>

                    <div className="col p-2 d-flex align-items-center justify-content-center">
                        <Avatar
                            variant="circle"
                            alt="Profile Image"
                            src={Image}         //TODO passare l'url che viene dal be
                            onClick={() => console.log('Cliccato avatar')}/>
                        <Typography variant="body2"
                                    color="secondary"
                                    className="ms-4">
                            Andrea Messina
                        </Typography>
                    </div>
                </div>

                <div style={{position: 'fixed', bottom: 40, right: '45%'}}>
                    {/* COME BACK UP BUTTON */}
                    <Button variant={'contained'} onClick={() => console.log('opendDialog')}>
                        CERCA
                        <SearchOutlinedIcon fontSize={'small'} className="ms-1 mb-1"/>
                    </Button>
                </div>
            </div>
        </>
    )
}
export default FriendsList