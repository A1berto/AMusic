import * as React from 'react'
import {FC} from 'react'
import {Button, TextField, Typography} from '@material-ui/core'
import FacebookLogo from '../../assets/img/facebookLogo.svg'
import GoogleLogo from '../../assets/img/googleLogo.svg'
import {AMUSIC_PALETTE_COLORS} from '../../AMusic_theme'


//TODO creare useStyle dove inserisco tutto lo stile che si può inserire di questo file
interface ILogin {
}

const Login: FC<ILogin> = () => {


    return (
        <div style={{textAlign: 'center', width: '60%'}}>
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <Typography variant={'h3'} color="primary">Divertiamoci</Typography>
                </div>
                <div className="col-12 d-flex justify-content-center">
                    {/*TODO fare in modo che nel sottotitolo non ripeto due volte le stesse parole, modificare!   (proposta: Ne hai già uno? Accedi)*/}
                    <Typography variant={'h4'} color="secondary">
                        Iniziamo creando il tuo account. Disponi già di un account? Accedi
                    </Typography>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-5">
                    <div className="row justify-content-center">
                        <div className="col-8 mt-3">
                            <TextField
                                label="Nome"
                                defaultValue="Alberto"
                            />
                        </div>
                        <div className="col-8 mt-3">
                            <TextField
                                label="Cognome"
                                defaultValue="Manuguerra"
                            />
                        </div>
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
                                Login
                            </Button>
                        </div>
                    </div>
                </div>

                {/*DIVIDER*/}
                <div style={{
                    borderLeft: '2px solid white',
                    opacity: '0.6',
                    height: '40vh',
                    position: 'fixed',
                    left: '50%',
                    marginTop: 'inherit'
                }}/>
                <div className="col-2 d-flex align-items-center justify-content-center">
                    <Typography variant="caption" color="secondary"
                                className="p-3"
                                style={{background: AMUSIC_PALETTE_COLORS.BLACK, zIndex: 1}}>
                        oppure
                    </Typography>
                </div>

                {/*LOGIN CON TERZI*/}
                <div className="col-5 d-flex align-items-center justify-content-center">
                    <div className="row" style={{paddingLeft: '3vw'}}
                         onClick={() => console.log('Login con Google')}>
                        <div className="col-12 d-flex align-items-center mb-2">
                            <img src={GoogleLogo} alt="GoogleLogo"/>
                            <Typography variant="h6" color="secondary" className="ms-3">
                                Continua su Google
                            </Typography>
                        </div>
                        <div className="col-12 d-flex align-items-center mt-2"
                             onClick={() => console.log('Login con Facebook')}>
                            <img src={FacebookLogo} alt="FacebookLogo"/>
                            <Typography variant="h6" color="secondary" className="ms-3">
                                Continua su Facebook
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login