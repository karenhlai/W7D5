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
        //user createNewUser to the
    }


    render () {
        return (
            <div className="session-form">
            </div>
        );
    }
};