import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

const receiveAllUsers = users => ({
    type: RECEIVE_ALL_USERS,
    users
});

export const fetchUsers = () => dispatch => UserApiUtil.fetchUsers()
    .then(users => dispatch(receiveAllUsers(users)))

export const fetchUser = user => dispatch => UserApiUtil.fetchUser(user)
    .then(user => dispatch(receiveUser(user)))

export const updateUser = user => dispatch => UserApiUtil.patchUser(user)
    .then(user => dispatch(receiveUser(user)))

