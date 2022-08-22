import React, { useReducer } from 'react';

const initialState = {


    firstName: { // <= "type"
        value: '',
        error: true, // to prevent submitting empty form in the beginning
        message: null, // error message ( if any )
    },
    lastName: { // <= "type"
        value: '',
        error: true, // to prevent submitting empty form in the beginning
        message: null,  // error message ( if any )
    },
    email: { // <= "type"
        value: '',
        error: true, // to prevent submitting empty form in the beginning
        message: null, // error message ( if any )
    }
}

function reducer(state, action) {
    return {
        ...state,
        [action.type]: action.payload
    };
}

export default () => {

    const [state, dispatch] = useReducer(reducer, initialState);


    const firstNameHandler = (e) => {
        // reset errors everytime this function is called
        const { name , value } = e.target;
        let message = null;
        let error = false;

        // validating the first name if errors found set error to true and set message
        if(value.length < 3){
            message = "First name must be at least 3 characters";
            error = true;
        }
        // reducer function receives an action in parameter
        // "type" will be our input name that match with state."name"
        // "payload" will update the data for the type we mentioned .
        dispatch({
            type: name,
            // update the data
            payload: {
                value:value,
                error: error,
                message: message
            },
        });
    }

    const lastNameHandler = (e) => {
        // reset errors everytime this function is called
        const { name , value } = e.target;
        let message = null;
        let error = false;

        // validating the last name if errors found set error to true and set message
        if(value.length < 3){
            message = "Last name must be at least 3 characters"
            error = true;
        }

        // reducer function receives an action in parameter
        // "type" will be our input name that match with state."name"
        // "payload" will update the data for the type we mentioned .
        dispatch({
            type: name,
            payload: {
                value: value,
                error: error,
                message: message
            }
        });
    }

    const emailHandler = (e) => {
        // reset errors everytime this function is called
        const { name , value } = e.target;
        let message = null;
        let error = false;

        // validating the email if errors found set error to true and set message
        if(value.length < 1){
            message = "Email is required!";
            error = true;
        }else if(value.length < 5){
            message = "Email must be at least 5 characters"
            error = true;
        }

        // reducer function receives an action in parameter
        // "type" will be our input name that match with state."name"
        // "payload" will update the data for the type we mentioned .
        dispatch({
            type: name,
            payload: {
                value: value,
                error: error,
                message: message
            }
        });
    }



    const submitHandler = (e) => {
        e.preventDefault();
        const {firstName , lastName , email} = state;
        // will check if fields has an errors: stop the process
        // otherwise, continue the process
        if(firstName.error || lastName.error || email.error){
            alert("fill form carefully!")
        }else{
            alert("success!")
        }
    }



    return (
        <form className={"container w-50 mt-5"} onSubmit={submitHandler}>
            <div className="row">
                <div className="col-6">
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text"
                           name="firstName"
                           value={state.firstName.value}
                           className={"form-control"}
                           onChange={firstNameHandler}/>
                    {state.firstName.error === true && (
                        <span className="text-danger">{state.firstName.message}</span>
                    )}
                </div>
                <div className="col-6">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        className={"form-control"}
                        name="lastName"
                        onChange={lastNameHandler}/>
                    {state.lastName.error === true && (
                        <span className="text-danger">{state.lastName.message}</span>
                    )}
                </div>

                <div className="col-12">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        className={"form-control"}
                        name="email"
                        onChange={emailHandler}/>
                    {state.email.error === true && (
                        <span className="text-danger">{state.email.message}</span>
                    )}
                </div>

                <button className="btn my-4 btn-block w-50 mx-auto btn-dark" type={"submit"}>Submit</button>

            </div>
        </form>
    );
}