export interface IEvent {
    lat: number
    lng: number
    description: string
    localName:string
    id: number
    address: string
    cap: string
    comune: string
    phone: string
    email: string
    localCode: string
    image:string
}

export interface IGeoLocation {
    accuracy?: number
    altitude?: number | null
    altitudeAccuracy?: number | null
    heading?: number | null
    latitude: number
    longitude: number
}