/*Interface used to identify user profile*/
export interface IProfile {
    name: string
    surname: string
    email: string
    password: string
    sex?: string
    birthDate?: string
    city?: string
    image?: string
    hobby?: string
}


/*Interface used to identify profile Image*/
export interface IProfileImageFields {
    dropzone?: File
}
