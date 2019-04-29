import React from 'react';

class SignUp extends React.Component {
    //create a local state to track all the fields for our form we will be building
    constructor(props) {
        super(props);
        this.state = {
            username: '', //inside our form, we want to have fields for username, email and password
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //build the actions that the form will use
    //handle input that can handle input for the username, email, pw; so I don't need three seperate functions
    handleInput(type) {
        return (e) => { //return an arrow function that will set the state for me
            this.setState({ [type]: e.target.value }); //pass in JS object, and any keys matching our state, will get updated 
            // e is the event object from the event handler
            //in order to make type the key value, i'll wrap in square ^ brackets, means the type will be evaluated before it gets assigned to the key
        };
    }

    //handle submitting the information of our state to the BE
    handleSubmit(e) {
        e.preventDefault();
        //use createNewUser(from the container), and pass in this.state obj 
        this.props.createNewUser(this.state)
            .then(() => this.props.history.push('/chirps')); //if we successfully create a new user, we want a cb function that will redirect us
        //note we don't history yet, but we will b/c we wrapped this whole component inside of a route
    }


    render() {
        return (
            <div className="session-form">
                <h2>Sign Up!</h2>
                <form>
                    <label>Username:
                <input type="text" value={this.state.username} onChange={this.handleInput('username')} />
                    </label>

                    <label>Email:
                <input type="text" value={this.state.email} onChange={this.handleInput('email')} />
                    </label>

                    <label>Password:
                <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
                    </label>

                    <button onClick={this.handleSubmit}>Sign Up</button>
                </form>
            </div>
        );
    }
};

//onClick or onChange
//button or input submit?