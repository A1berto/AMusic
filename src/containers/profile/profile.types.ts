/*Interface used to identify user profile*/
export interface IProfile extends IProfileFormFields {
    accountNonExpired: boolean
    accountNonLocked: boolean
    createDate: string
    credentialsNonExpired: boolean
    displayName: string
    email: string
    emailVerified: boolean
    enabled: boolean
    id: string
    lastLogin: string
    name: string
    phoneNumber: string
    photoUrl: string
    surname: string
}

export interface IProfileFormFields {
    name: string
    surname: string
    sex?: string
    birthDay?: string
    city?: string
}


/*Interface used to identify profile Image*/
export interface IProfileImageFields {
    dropzone?: File
}
