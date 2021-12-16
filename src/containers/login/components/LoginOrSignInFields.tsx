import * as React from 'react'
import {FC} from 'react'
import {Button, Link, Typography} from '@material-ui/core'
import {
    createProfileWithEmailAndPasswordAuth,
    loginProfileWithEmailAndPasswordAuth,
    resetPasswordAuth
} from '../../../commons/autentication/service.auth'
import {Field, Form, Formik} from 'formik'
import {ILoginFormProps} from '../login.types'
import {LOGIN_FIELDS_NAMES, LOGIN_FORM_INIT_VALUES, loginValidationSchema} from '../login.constants'
import {TextField} from 'formik-material-ui'
import {useDispatch, useSelector} from 'react-redux'
import {addError} from 'fetch-with-redux-observable/dist/user-message/user-message.actions'
import {isFetchProfilePendingSelector} from '../../profile/redux/profile.actions'
import {isFetchNearEventsListPendingSelector} from '../../events/redux/eventi.actions'

interface ILoginFields {
    isSingIn: boolean
}

const LoginOrSignInFields: FC<ILoginFields> = (props: ILoginFields) => {

    const {isSingIn = false} = props
    const isFetchProfilePending = useSelector(isFetchProfilePendingSelector)
    const isFetchNearEventsListPending = useSelector(isFetchNearEventsListPendingSelector)
    const dispatch = useDispatch()

    const handleAuthenticationEmailClick = async (formValues: ILoginFormProps) => {
        isSingIn ?
            await createProfileWithEmailAndPasswordAuth(formValues, dispatch) :
            await loginProfileWithEmailAndPasswordAuth(formValues?.email, formValues?.password, dispatch)
    }

    const handleForgotPassword = async (email: any) => {
        if (!!email) {
            const response = await resetPasswordAuth(email, dispatch)
            console.info('RESET PASSWORD: ', response)
        } else {
            dispatch(addError({userMessage: 'Inserire la mail prima di cliccare Recupera'}))
        }
    }

    return (
        <div className="col-5">
            <Formik initialValues={LOGIN_FORM_INIT_VALUES}
                    onSubmit={handleAuthenticationEmailClick}
                    validateOnChange={true}
                    validationSchema={loginValidationSchema(isSingIn)}>
                {
                    (formikProps) => {
                        return <Form autoComplete="off">
                            <div className="row justify-content-center">
                                {
                                    isSingIn &&
                                    <>
                                        <div className={`col-8 mt-3`}>
                                            <Field
                                                type="text"
                                                component={TextField}
                                                name={LOGIN_FIELDS_NAMES.name}
                                                label="Nome"
                                                InputLabelProps={{
                                                    shrink: true
                                                }}
                                            />
                                        </div>
                                        <div className={`col-8 mt-3`}>
                                            <Field
                                                type="text"
                                                component={TextField}
                                                name={LOGIN_FIELDS_NAMES.surname}
                                                label="Cognome"
                                                InputLabelProps={{
                                                    shrink: true
                                                }}
                                            />
                                        </div>
                                    </>
                                }
                                <div className="col-8 mt-3">
                                    <Field
                                        type="email"
                                        component={TextField}
                                        name={LOGIN_FIELDS_NAMES.email}
                                        label="Email"
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                    />
                                </div>
                                <div className="col-8 mt-3">
                                    <Field
                                        type="password"
                                        component={TextField}
                                        name={LOGIN_FIELDS_NAMES.password}
                                        label="Password"
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className={`col-8 mt-5 animate__animated animate__infinite ${isFetchProfilePending || isFetchNearEventsListPending ? 'animate__pulse' : ''}`} >
                                    <Button variant="contained" type="submit"  disabled={isFetchProfilePending || isFetchNearEventsListPending} fullWidth>
                                        {isSingIn ? 'Registrati' : 'Accedi'}
                                    </Button>
                                </div>
                            </div>
                            <div style={{position: 'absolute', left: '37%', bottom: '-80px'}}>
                                <Typography color="textSecondary">
                                    Password dimenticata?
                                    <Link className="ms-2"
                                          onClick={() => handleForgotPassword(formikProps.values.email)}>Recupera</Link>
                                </Typography>
                            </div>
                        </Form>
                    }}
            </Formik>
        </div>
    )
}

export default LoginOrSignInFields