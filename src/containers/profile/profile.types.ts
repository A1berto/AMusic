/*Interface used to identify user profile*/
export interface IProfile extends IProfileFormFields{
    image?: string
    email: string
    password: string
}

export interface IProfileFormFields{
    name: string
    surname: string
    sex?: string
    birthDate?: string
    city?: string
}


/*Interface used to identify profile Image*/
export interface IProfileImageFields {
    dropzone?: File
}
