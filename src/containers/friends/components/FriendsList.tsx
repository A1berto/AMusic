import * as React from 'react'
import {FC} from 'react'
import {Avatar} from '@material-ui/core'
import Image from '../../../assets/img/avatar-man.jpg'
import Typography from '@material-ui/core/Typography'

interface IFriendsListProps {
    friendsList: string[]
}

const FriendsList: FC<IFriendsListProps> = props => {
    const {friendsList} = props

    return (
        <>

            <div className="col-12 p-2 d-flex align-items-center ">
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

            <div className="col-12 p-2 d-flex align-items-center ">
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

            <div className="col-12 p-2 d-flex align-items-center ">
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

            <div className="col-12 p-2 d-flex align-items-center ">
                <Avatar
                    variant="circle"
                    alt="Profile Image"
                    src={Image}         //TODO passare l'url che viene dal be
                    onClick={() => console.log('Cliccato avatar')}/>
                <Typography variant="body2"
                            color="secondary"
                            className="ms-4">
                    Lorenzo Castorina
                </Typography>
            </div>

            <div className="col-12 p-2 d-flex align-items-center ">
                <Avatar
                    variant="circle"
                    alt="Profile Image"
                    src={Image}         //TODO passare l'url che viene dal be
                    onClick={() => console.log('Cliccato avatar')}/>
                <Typography variant="body2"
                            color="secondary"
                            className="ms-4">
                    Alberto Manuguerra
                </Typography>
            </div>

            <div className="col-12 p-2 d-flex align-items-center ">
                <Avatar
                    variant="circle"
                    alt="Profile Image"
                    src={Image}         //TODO passare l'url che viene dal be
                    onClick={() => console.log('Cliccato avatar')}/>
                <Typography variant="body2"
                            color="secondary"
                            className="ms-4">
                    Sara Testa
                </Typography>
            </div>
        </>
    )
}
export default FriendsList