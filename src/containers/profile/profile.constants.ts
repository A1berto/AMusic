import {IProfileFormFields, IProfileImageFields} from './profile.types'
import * as Yup from 'yup'
import {YUP_DEFAULT_ERROR_VALUE} from '../../utils'

export enum DROPZONE_FIELDS_NAMES {
    dropzone = 'dropzone',
}

export const DROPZONE_FORM_INIT_VALUES: IProfileImageFields = {
    [DROPZONE_FIELDS_NAMES.dropzone]: undefined
}

export enum PROFILE_FIELDS_NAMES {
    name = 'name',
    surname = 'surname',
    birthDay = 'birthDay',
    city = 'city',
    sex = 'sex',
    email = 'email',
    image = 'image',
    hobby = 'hobby'
}

export const PROFILE_FORM_INIT_VALUES: IProfileFormFields = {
    [PROFILE_FIELDS_NAMES.name]: '',
    [PROFILE_FIELDS_NAMES.surname]: '',
    [PROFILE_FIELDS_NAMES.birthDay]: '',
    [PROFILE_FIELDS_NAMES.city]: '',
    [PROFILE_FIELDS_NAMES.sex]: '',
}

export const profileValidationSchema = Yup.object().shape({
    [PROFILE_FIELDS_NAMES.name]: Yup.string().required(YUP_DEFAULT_ERROR_VALUE),
    [PROFILE_FIELDS_NAMES.surname]: Yup.string().required(YUP_DEFAULT_ERROR_VALUE),
})

export const GENERIC_DROPZONE_VALIDATION_SCHEMA = Yup.object().shape({
    [DROPZONE_FIELDS_NAMES.dropzone]: Yup.mixed().required(YUP_DEFAULT_ERROR_VALUE),
})

export const sexOptions = ['Maschio', 'Femmina', 'Altro']

