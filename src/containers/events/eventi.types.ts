export interface IEvent {
    description: string
    id: string
    geoPoint: IGeoLocation
    phoneNumber: string
    eventName:string
    eventDate: string
    eventDatePublished: string
    imageUrl: string
    maxPartecipants: number
    partecipants: IPartecipant[]
    ticketPrice: number
    bought:boolean
    address: string
}

export interface IEventHistory{
    amount: number
    datePayment: string
    event: IEvent
    id: string
    idPayment: string
    status: string
    vendor: string
}

export interface IPartecipant {
    id: string
    name: string
    photoUrl: string
    surname: string
}

export interface IGeoLocation {
    accuracy?: number
    altitude?: number | null
    altitudeAccuracy?: number | null
    heading?: number | null
    latitude: number
    longitude: number
}