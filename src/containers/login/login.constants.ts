import {ILoginFormProps} from './login.types'


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