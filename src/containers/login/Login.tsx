import * as React from 'react'
import {FC} from 'react'
import {makeStyles} from '@material-ui/core'
import {NOME_PROGETTO_PALETTE_COLORS} from '../../NomeProgetto_theme'
import loginBackground from '../../assets/img/LoginBackground.svg'

/*TODO perchè non si prende il loginBackground nella maniera corretta?*/
const useStyles = makeStyles(() => ({
    container: {
        background: NOME_PROGETTO_PALETTE_COLORS.MEDIUM_BLUE,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginContainer: {
        display: 'flex',
        height: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '6px',
        boxShadow: '0px 0px 5px #5B5B5B',
        backgroundImage: `url(${loginBackground})`,
    }
}))


interface ILogin {
}

const Login: FC<ILogin> = () => {

    const classes = useStyles()

    return (
        <div className={`row ${classes.container}`}>
            <div className={`col-6 ${classes.loginContainer}`}>
                Ciao bello
            </div>
        </div>
    )
}
export default Login