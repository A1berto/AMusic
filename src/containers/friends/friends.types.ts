import {IEvent} from '../events/eventi.types'

export interface IFriend{
    displayName: string
    friendSince: string
    id: string
    lastLogin: string
    nextEvents: IEvent[]
    photoUrl: string
}