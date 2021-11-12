import {HttpMethods, IRequestModel} from 'fetch-with-redux-observable'

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

