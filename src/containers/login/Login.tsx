import * as React from 'react'
import {FC, useState} from 'react'
import {createStyles, makeStyles, Typography} from '@material-ui/core'
import FacebookLogo from '../../assets/img/facebookLogo.svg'
import GoogleLogo from '../../assets/img/googleLogo.svg'
import GitHubLogo from '../../assets/img/gitHubLogo.svg'
import {AMUSIC_PALETTE_COLORS} from '../../AMusic_theme'
import LoginFields from './LoginFields'
import {facebookProvider, gitHubProvider, googleProvider} from '../../components/autentication/authMethods'
import {socialMediaAuth} from '../../components/autentication/service.auth'


const useStyles = makeStyles(() =>
    createStyles({
        divider: (isSingIn) => ({
            borderLeft: '2px solid white',
            opacity: '0.6',
            height: isSingIn ? '30vh' : '20vh',
            position: 'fixed',
            left: '50%',
            marginTop: 'inherit'
        }),
        link: {
            marginLeft: '8px',
            textDecoration: 'underline',
            cursor: 'pointer'
        }
    }),
)


interface ILogin {
}

const Login: FC<ILogin> = () => {

    const [isSingIn, setIsSingIn] = useState<boolean>(false)

    const classes = useStyles(isSingIn)

    const handleToggleClick = () => {
        setIsSingIn(preveState => !preveState)
    }

    const handleAuthenticationClick = async (provider: any) => {
        const response = await socialMediaAuth(provider)
        console.log('AUTHENTICATION: response>>>', response)
    }

    return (
        <div style={{textAlign: 'center', width: '60%'}}>
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <Typography variant={'h3'} color="primary">Divertiamoci</Typography>
                </div>
                <div className="col-12 d-flex justify-content-center">
                    {
                        isSingIn ?
                            <Typography variant={'h4'} color="secondary">
                                Per cominciare, crea il tuo account AMusic. Ne hai già uno?
                                <span className={classes.link} onClick={handleToggleClick}>Accedi</span>
                            </Typography> :
                            <Typography variant={'h4'} color="secondary">
                                Per cominciare, crea il tuo account AMusic. Non ne hai già uno?
                                <span className={classes.link} onClick={handleToggleClick}>Registrati</span>
                            </Typography>
                    }
                </div>
            </div>
            <div className={`row mt-5 ${!isSingIn ? 'animate__animated animate__fadeInRight' : 'animate__animated animate__fadeInLeft'}`}>

                {/*SING IN*/}
                <LoginFields isSingIn={isSingIn}/>

                {/*DIVIDER*/}
                <div className="col-2 d-flex align-items-center justify-content-center">
                    <div className={classes.divider}/>
                    <Typography variant="caption" color="secondary"
                                className="p-3"
                                style={{background: AMUSIC_PALETTE_COLORS.BLACK, zIndex: 1}}>
                        oppure
                    </Typography>
                </div>

                {/*LOGIN CON TERZI*/}
                <div className="col-5 d-flex align-items-center justify-content-center">
                    <div className="row" style={{paddingLeft: '3vw'}}>

                        <div className={`col-12 appTerzeParti mb-2`}
                             onClick={() => handleAuthenticationClick(googleProvider)}>
                            <img src={GoogleLogo} className="appTerzePartiHover" alt="GoogleLogo"/>
                            <Typography variant="h6" color="secondary" className="ms-3">
                                Continua su Google
                            </Typography>
                        </div>

                        <div className={`col-12 appTerzeParti my-2`}
                             onClick={() => handleAuthenticationClick(facebookProvider)}>
                            <img src={FacebookLogo} className="appTerzePartiHover" alt="FacebookLogo"/>
                            <Typography variant="h6" color="secondary" className="ms-3">
                                Continua su Facebook
                            </Typography>
                        </div>

                        <div className={`col-12 appTerzeParti mt-2`}
                             onClick={() => handleAuthenticationClick(gitHubProvider)}>
                            <img src={GitHubLogo} className="appTerzePartiHover" alt="GitHubLogo"/>
                            <Typography variant="h6" color="secondary" className="ms-3">
                                Continua su GitHub
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login