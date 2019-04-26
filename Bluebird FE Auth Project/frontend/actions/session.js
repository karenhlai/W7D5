import { postUser, postSession, deleteSession } from '../utils/session'

//create const of messages we send to reducer

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

//POJOS
const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
    //no paylaod, logout user
});

//thunk action creators
//create user
export const createNewUser = (formUser) => dispatch => postUser(formUser)
    .then( user => dispatch(receiveCurrentUser(user) )
);

//login user
//formUser is the user object that we receive from user sign in form 
export const login = (formUser) => dispatch => postSession(formUser)
    .then( user => dispatch(receiveCurrentUser(user) )
);

//logout user
export const logout = () => dispatch => deleteSession()
    .then( dispatch(logoutCurrentUser() )
);