import {HttpMethods, IRequestModel} from 'fetch-with-redux-observable'

/**
 * @description Take profile info
 * @method GET
 */
export const FETCH_PROFILE_API: IRequestModel = {
    url: `/profile`,
    method: HttpMethods.GET
}