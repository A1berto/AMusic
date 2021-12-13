import {HttpMethods, IRequestModel} from 'fetch-with-redux-observable'

/**
 * @description Take profile info
 * @method GET
 */
export const FETCH_PROFILE_API: IRequestModel = {
    url: `/profile`,
    method: HttpMethods.GET,
    headers: {
        'Content-Type': 'application/json'
    },
}

/**
 * @description Update profile info
 * @method GET
 */
export const UPDATE_PROFILE_API: IRequestModel = {
    url: `/private/user/update`,
    method: HttpMethods.PUT,
    headers: {
        'Content-Type': 'application/json'
    },
}

/**
 * @description Change profile password
 * @method GET
 */
export const CHANGE_PROFILE_PASSWORD_API: IRequestModel = {
    url: `/private/user/changePassword`,
    method: HttpMethods.POST,
    headers: {
        'Content-Type': 'application/json'
    },
}

/**
 * @description Take profile info
 * @method GET
 */
export const FETCH_PAYMENT_API: IRequestModel = {
    url: `/private/pay`,
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
    url: `/private/user/friends`,
    method: HttpMethods.GET,
    headers: {
        'Content-Type': 'application/json'
    },
}

/**
 * @description Get suggested friends list
 * @method GET
 */
export const FETCH_SUGGESTED_FRIENDS_LIST_API: IRequestModel = {
    url: `/private/user/suggestedFriends`,
    method: HttpMethods.GET,
    headers: {
        'Content-Type': 'application/json'
    },
}

/**
 * @description Get filtered friends list
 * @method GET
 */
export const FETCH_FILTERED_FRIENDS_LIST_API: IRequestModel = {
    url: `/private/user`,
    method: HttpMethods.GET,
    headers: {
        'Content-Type': 'application/json'
    },
}

/**
 * @description Add friend
 * @method POST
 */
export const FETCH_ADD_FRIEND_API: IRequestModel = {
    url: `/private/user/addFriend`,
    method: HttpMethods.POST,
    headers: {
        'Content-Type': 'application/json'
    },
}

/**
 * @description Remove friend
 * @method POST
 */
export const FETCH_DELETE_FRIEND_API: IRequestModel = {
    url: `/private/user/removeFriend`,
    method: HttpMethods.DELETE,
    headers: {
        'Content-Type': 'application/json'
    },
}

/**
 * @description Get events list
 * @method GET
 */
export const FETCH_EVENTS_LIST_API: IRequestModel = {
    url: `/private/events`,
    method: HttpMethods.GET,
    headers: {
        'Content-Type': 'application/json'
    },
}

/**
 * @description Get near events list
 * @method GET
 */
export const FETCH_NEAR_EVENTS_LIST_API: IRequestModel = {
    url: `/private/events/near`,
    method: HttpMethods.GET,
    headers: {
        'Content-Type': 'application/json'
    },
}

/**
 * @description Get events history list
 * @method GET
 */
export const FETCH_EVENTS_HISTORY_LIST_API: IRequestModel = {
    url: `/private/payment/history`,
    method: HttpMethods.GET,
    headers: {
        'Content-Type': 'application/json'
    },
}
