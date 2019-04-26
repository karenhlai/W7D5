import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session';
import Signup from './signup';


const mapDispatchToProps = (dispatch) => ({
    createNewUser: (formUser) => dispatch(createNewUser(formUser) )
});
 

//pass null for mapStateToProps because we don't need to rely on any parts of state
export default connect(null, mapDispatchToProps)(SignUp);
//this file gives us a function called createNewUser inside of our props inside of SignUp;
//we can now call this.props.createNewUser, and pass it a JSON object and it wil create a new user for us