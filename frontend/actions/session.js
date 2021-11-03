import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const REMOVE_ERRORS = 'REMOVE_ERRORS';

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
});

const removeErrors = () => ({
    type: REMOVE_ERRORS
})

export const signup = formUser => dispatch => SessionApiUtil.postUser(formUser)
    .then(user => dispatch(receiveCurrentUser(user)))
    .fail(errors => dispatch(receiveErrors(errors)))

export const login = formUser => dispatch => {
    // debugger
    return SessionApiUtil.postSession(formUser)
    .then(user => dispatch(receiveCurrentUser(user)))
    .fail(errors => dispatch(receiveErrors(errors)))
}

export const logout = () => dispatch => SessionApiUtil.deleteSession()
    .then(() => dispatch(logoutCurrentUser()))
    .fail(errors => dispatch(receiveErrors(errors)))

export const hideErrors = () => dispatch => dispatch(removeErrors())
