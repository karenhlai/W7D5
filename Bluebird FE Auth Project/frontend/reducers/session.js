import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session'


//create a slice to store the current user information

//setup default state for a current_user POJO
const _nullSession = {
    current_user = null
};


export default (state = _nullSession, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, { currentUser: action.user });
                //why not state? don't need to worry about what state it was before
                //once we get the curretUser, we just use the currentUser (and not the old currentUser)
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        default:
            return state; //if no matched actions, return state it was before
    }
}



