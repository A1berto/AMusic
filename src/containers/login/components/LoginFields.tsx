import * as React from 'react'
import {FC} from 'react'
import {Button} from '@material-ui/core'
import {
    createProfileWithEmailAndPasswordAuth,
    loginProfileWithEmailAndPasswordAuth
} from '../../../commons/autentication/service.auth'
import {Field, Form, Formik} from 'formik'
import {ILoginFormProps} from '../login.types'
import {LOGIN_FIELDS_NAMES, LOGIN_FORM_INIT_VALUES, loginValidationSchema} from '../login.constants'
import {TextField} from 'formik-material-ui'
import {useDispatch} from 'react-redux'

interface ILoginFields {
    isSingIn: boolean
}

const LoginFields: FC<ILoginFields> = (props: ILoginFields) => {

    const {isSingIn = false} = props
    const dispatch= useDispatch()

    const handleAuthenticationEmailClick = async (formValues: ILoginFormProps) => {
        isSingIn ?
            await createProfileWithEmailAndPasswordAuth(formValues?.email, formValues?.password,dispatch) :
            await loginProfileWithEmailAndPasswordAuth(formValues?.email, formValues?.password,dispatch)
    }

    return (
        <div className="col-5">
            {/*TODO non far spuntare gli helper di google*/}
            <Formik initialValues={LOGIN_FORM_INIT_VALUES}
                    onSubmit={handleAuthenticationEmailClick}
                    validateOnChange={true}
                    validationSchema={loginValidationSchema(isSingIn)}>
                {
                    () => {
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
                                <div className="col-8 mt-5">
                                    <Button variant="contained" type="submit" fullWidth>
                                        {isSingIn ? 'Registrati' : 'Accedi'}
                                    </Button>
                                </div>
                            </div>
                        </Form>
                    }}
            </Formik>
        </div>
    )
}

export default LoginFields