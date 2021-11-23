import * as React from 'react'
import {FC} from 'react'
import {IconButton, Typography} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import FriendsList from '../../../containers/friends/components/FriendsList'

interface IAddFriendsListDialogProps {
}

const AddFriendsListDialog: FC<IAddFriendsListDialogProps> = props => {
    return (
        <>
            <div className="row m-4" style={{width: '800px', minHeight: '500px', alignContent: 'start'}}>
                <div className="col-12">

                    <div className="row">
                        <div className="col-12 d-flex justify-content-center align-items-center">

                            {/* TITLE */}
                            <Typography variant={'h3'} color="primary">Ricerca amici</Typography>

                            {/* CLOSE BUTTON*/}
                            <div style={{position: 'absolute', right: 16}}>
                                <IconButton onClick={() => console.log('amici')}
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
                        <div className="col-6  flex-column ">
                            <div className="row">
                                {/*TITLE*/}
                                <div className="col-12 d-flex justify-content-center">
                                    <Typography variant={'h4'} color="secondary"
                                                style={{opacity: 0.6}}>SUGGERITI</Typography>
                                </div>
                            </div>
                            <div className="row mt-4"
                                 style={{overflowY: 'scroll', height: '40vh', width: '22vw', textAlign:'start',margin:'auto'}}>
                                <FriendsList friendsList={[]}/>
                            </div>

                        </div>
                        <div className="col-6  flex-column ">
                            <div className="row">
                                {/*TITLE*/}
                                <div className="col-12 d-flex justify-content-center">
                                    <Typography variant={'h4'} color="secondary"
                                                style={{opacity: 0.6}}>ALTRI</Typography>
                                </div>
                            </div>
                            <div className="row mt-4"
                                 style={{overflowY: 'scroll', height: '40vh', width: '22vw', textAlign:'start',margin:'auto'}}>
                                <FriendsList friendsList={[]}/>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
export default AddFriendsListDialog