import * as React from 'react'
import {FC} from 'react'
import {Button, TextField} from '@material-ui/core'


interface ILoginFields {
    isSingIn: boolean
}

const LoginFields: FC<ILoginFields> = (props) => {


    return (
        <div className="col-5">
            <div
                className={`row justify-content-center`}>
                {
                    props.isSingIn &&
                    <>
                        <div className={`col-8 mt-3`}>
                            <TextField
                                label="Nome"
                                defaultValue="Alberto"
                            />
                        </div>
                        <div className={`col-8 mt-3`}>
                            <TextField
                                label="Cognome"
                                defaultValue="Manuguerra"
                            />
                        </div>
                    </>
                }
                <div className="col-8 mt-3">
                    <TextField
                        label="Email"
                        defaultValue="a@mail.it"
                    />
                </div>
                <div className="col-8 mt-3">
                    <TextField
                        label="Password"
                        defaultValue="*******"
                    />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-8 mt-5">
                    <Button variant="contained" fullWidth>
                        {props.isSingIn ? 'Registrati' : 'Accedi'}
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default LoginFields