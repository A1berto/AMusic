import {HttpMethods, IRequestModel} from 'fetch-with-redux-observable'


const USER_ID = 'idUserDocument'

/**
 * @description Take profile info
 * @method GET
 */
export const FETCH_PROFILE_API: IRequestModel = {
    url: `/profile`,
    method: HttpMethods.GET
}

/**
 * @description Take profile info
 * @method GET
 */
export const FETCH_PAYMENT_API: IRequestModel = {
    url: `/pay`,
    method: HttpMethods.POST,
    headers: {
        'Content-Type': 'application/json'
    },
}

/**
 * @description Take profile info
 * @method GET
 */
export const FETCH_REGISTER_API: IRequestModel = {
    url: `/pay`,
    method: HttpMethods.POST,
    headers: {
        'Content-Type': 'application/json'
    },
}

/**
 * @description Get friends list
 * @method GET
 */
export const FETCH_FRIENDS_LIST_API: IRequestModel = {
    url: `/user/${{USER_ID}}/friends`,
    method: HttpMethods.GET,
}

/**
 * @description Get filtered friends list
 * @method GET
 */
export const FETCH_FILTERED_FRIENDS_LIST_API: IRequestModel = {
    url: `/user/${{USER_ID}}/friends/search`,
    method: HttpMethods.GET,
}
