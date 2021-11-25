import {IProfile, IProfileFormFields, IProfileImageFields} from './profile.types'

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
    password = 'password',
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