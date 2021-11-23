import * as React from 'react'
import {FC} from 'react'
import {Button} from '@material-ui/core'
import {
    createProfileWithEmailAndPasswordAuth,
    loginProfileWithEmailAndPasswordAuth
} from '../../../components/autentication/service.auth'
import {Field, Form, Formik, FormikProps} from 'formik'
import {ILoginFormProps} from '../login.types'
import {LOGIN_FIELDS_NAMES, LOGIN_FORM_INIT_VALUES} from '../login.constants'
import {TextField} from 'formik-material-ui'

interface ILoginFields {
    isSingIn: boolean
}

const LoginFields: FC<ILoginFields> = (props) => {

    const handleAuthenticationEmailClick = async (e: any) => {
        props.isSingIn ?
            await createProfileWithEmailAndPasswordAuth('ema25il@gmail.com', 'password') :
            await loginProfileWithEmailAndPasswordAuth('ema25il@gmail.com', 'password')
    }

    const handleValidate = (values: ILoginFormProps) => {
        const errors: { [key: string]: string } = {}
        const emailPattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)

        if (!values.email && !emailPattern.test(values.email)) {
            errors[LOGIN_FIELDS_NAMES.email] = 'Email non valida'
        }
        if (!values.password) {
            errors[LOGIN_FIELDS_NAMES.password] = 'Password non valida'
        }
        console.log('errors>>>', errors)
        return errors
    }

    return (
        <div className="col-5">
            {/*TODO non far spuntare gli helper di google*/}
            <Formik initialValues={LOGIN_FORM_INIT_VALUES}
                    onSubmit={handleAuthenticationEmailClick}
                    validateOnChange={true}
                    validate={handleValidate}>
                {
                    (formikProps: FormikProps<ILoginFormProps>) => {
                        return <Form autoComplete="off">

                            <div className={`row justify-content-center`}>
                                {
                                    props.isSingIn &&
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
                                        {props.isSingIn ? 'Registrati' : 'Accedi'}
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