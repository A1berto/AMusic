import {IProfileFormFields, IProfileImageFields} from './profile.types'
import * as Yup from 'yup'

export enum DROPZONE_FIELDS_NAMES {
    dropzone = 'dropzone',
}

export const DROPZONE_FORM_INIT_VALUES: IProfileImageFields = {
    [DROPZONE_FIELDS_NAMES.dropzone]: undefined
}

export enum PROFILE_FIELDS_NAMES {
    name = 'name',
    surname = 'surname',
    birthDate = 'birthDate',
    city = 'city',
    sex = 'sex',
    email = 'email',
    image = 'image',
    hobby = 'hobby'
}

export const PROFILE_FORM_INIT_VALUES: IProfileFormFields = {
    [PROFILE_FIELDS_NAMES.name]: '',
    [PROFILE_FIELDS_NAMES.surname]: '',
    [PROFILE_FIELDS_NAMES.birthDate]: '',
    [PROFILE_FIELDS_NAMES.city]: '',
    [PROFILE_FIELDS_NAMES.sex]: '',
}

export const profileValidationSchema = Yup.object().shape({
    [PROFILE_FIELDS_NAMES.name]: Yup.string().required('Campo obbligatorio'),
    [PROFILE_FIELDS_NAMES.surname]: Yup.string().required('Campo obbligatorio'),
})

export const sexOptions = ['Maschio', 'Femmina', 'Altro']
