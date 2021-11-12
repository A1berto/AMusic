import {IProfile, IProfileImageFields} from './profile.types'

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

export const PROFILE_FORM_INIT_VALUES: IProfile = {
    [PROFILE_FIELDS_NAMES.name]: '',
    [PROFILE_FIELDS_NAMES.surname]: '',
    [PROFILE_FIELDS_NAMES.birthDate]: '',
    [PROFILE_FIELDS_NAMES.city]: '',
    [PROFILE_FIELDS_NAMES.sex]: '',
    [PROFILE_FIELDS_NAMES.email]: '',
    [PROFILE_FIELDS_NAMES.password]: '',
    [PROFILE_FIELDS_NAMES.image]: '',       //TODO inserire url di default
    [PROFILE_FIELDS_NAMES.hobby]: '',
}