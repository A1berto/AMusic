import {ILoginFormProps} from './login.types'
import * as Yup from 'yup'


export enum LOGIN_FIELDS_NAMES {
    name = 'name',
    surname = 'surname',
    email = 'email',
    password = 'password',
}

export const LOGIN_FORM_INIT_VALUES: ILoginFormProps = {
    [LOGIN_FIELDS_NAMES.name]: '',
    [LOGIN_FIELDS_NAMES.surname]: '',
    [LOGIN_FIELDS_NAMES.email]: '',
    [LOGIN_FIELDS_NAMES.password]: '',
}


export const loginValidationSchema = (isSignIn: boolean) => {

    const validationLoginForm = {
        [LOGIN_FIELDS_NAMES.email]: Yup.string()
            .email('Email non valida')
            .required('Campo obbligatorio'),
        [LOGIN_FIELDS_NAMES.password]: Yup.string()
            .min(6, 'Almeno 6 caratteri')
            .required('Campo Obbligatorio'),
    }
    const validationSignInForm = {
        ...validationLoginForm,
        [LOGIN_FIELDS_NAMES.name]: Yup.string()
            .required('Campo obbligatorio'),
        [LOGIN_FIELDS_NAMES.surname]: Yup.string()
            .required('Campo obbligatorio'),
    }

    return Yup.object().shape(isSignIn ? validationSignInForm : validationLoginForm)
}