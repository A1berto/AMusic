
/*Interface used to identify user profile*/
export interface IProfile {
    name: string
    surname: string
    birthDate?: Date
    city?: string
    sex?: string
    credentials: ICrededentials
    image: any
}

/*Interface used to identify user credentials*/
export interface ICrededentials {
    email: string
    password: string
}

/*Interface used to identify profile Image*/
export interface IProfileImageFields {
    dropzone?: File
}
