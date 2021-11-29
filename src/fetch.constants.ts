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
 * @description Update profile info
 * @method GET
 */
export const UPDATE_PROFILE_API: IRequestModel = {
    url: `/user/update`,
    method: HttpMethods.POST,
    headers: {
        'Content-Type': 'application/json'
    },
}

/**
 * @description Change profile password
 * @method GET
 */
export const CHANGE_PROFILE_PASSWORD_API: IRequestModel = {
    url: `/user/changePassword`,
    method: HttpMethods.GET,
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
 * @description Get friends list
 * @method GET
 */
export const FETCH_FRIENDS_LIST_API: IRequestModel = {
    url: `/user/friends`,
    method: HttpMethods.GET,
}

/**
 * @description Get suggested friends list
 * @method GET
 */
export const FETCH_SUGGESTED_FRIENDS_LIST_API: IRequestModel = {
    url: `/user/suggestedFriends`,
    method: HttpMethods.GET,
}

/**
 * @description Get filtered friends list
 * @method GET
 */
export const FETCH_FILTERED_FRIENDS_LIST_API: IRequestModel = {
    url: `/user`,
    method: HttpMethods.GET,
}

/**
 * @description Add friend
 * @method POST
 */
export const FETCH_ADD_FRIEND_API: IRequestModel = {
    url: `/user/addFriend`,
    method: HttpMethods.POST,
}
