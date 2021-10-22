import {IProfileImageFields} from './profile.types'

export enum DROPZONE_FIELDS_NAMES {
    dropzone = 'dropzone',
}

export const DROPZONE_FORM_INIT_VALUES: IProfileImageFields = {
    [DROPZONE_FIELDS_NAMES.dropzone]: undefined
}