import React , {useState} from "react";

const RegisterForm = props => {

    const [firstName, setFirstName] = useState("");
    const [firstNameErrors , setFirstNameErrors] = useState("");

    const [lastName, setLastName] = useState("");
    const [lastNameErrors, setLastNameErrors] = useState("");

    const [email, setEmail] = useState("");
    const [emailErrors, setEmailErrors] = useState("");

    const [password, setPassword] = useState("");
    const [passwordErrors, setPasswordErrors] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordErrors, setConfirmPasswordErrors] = useState("");

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    //Valid the First Name if found any errors will return true otherwise reset as default;
    const handelFirstName = () => {
        if(firstName.length < 1){
            setFirstNameErrors("First Name is Required!")
            return true;
        }else if(firstName.length < 4){
            setFirstNameErrors("First Name must be at least 4 characters")
            return true;
        }else{
            setFirstNameErrors("")
            return false;
        }
    }

    //Valid the Last Name if found any errors will return true otherwise reset as default;
    const handelLastName = () => {
        if(lastName.length < 1){
            setLastNameErrors("Last Name is Required!")
            return true;
        }else if(firstName.length < 4){
            setLastNameErrors("Last Name must be at least 4 characters")
            return true;
        }else{
            setLastNameErrors("")
            return false;
        }
    }

    //Valid the Email if found any errors will return true otherwise reset as default;
    const handelEmail = () => {
        if(email.length < 1){
            setEmailErrors("Email is Required!")
            return true;
        }else if(email.length < 4){
            setEmailErrors("Email must be at least 4 characters")
            return true;
        }else{
            setEmailErrors("");
            return false;
        }
    }

    //Valid the Password if found any errors will return true otherwise reset as default;
    const handelPassword = () => {
        if(password.length < 1){
            setPasswordErrors("Password is Required!")
            return true;
        }else if(password.length < 8){
            setPasswordErrors("password must be at least 8 characters")
            return true;
        }else{
            setPasswordErrors("");
            return false;
        }
    }

    //Valid the Confirm Password if found any errors will return true otherwise reset as default;
    const handelConfirmPassword = () => {
        if(confirmPassword.length < 1){
            setConfirmPasswordErrors("Confirm password is Required!")
            return true;
        }else if(confirmPassword != password){
            setConfirmPasswordErrors("Confirm password must match password")
            return true;
        }else{
            setConfirmPasswordErrors("");
            return false;
        }
    }

    const createUser = (e) => {
        e.preventDefault();
        handelFirstName(); // start validation for firstName
        handelLastName();   // start validation for lastName
        handelEmail();  // start validation for email
        handelPassword();   // start validation for password
        handelConfirmPassword();    // start validation for confirm password

        //if any of handlers returned true the creation will be stopped
        // otherwise, continue the process
        if(handelFirstName() || handelLastName() || handelEmail() || handelPassword() || handelConfirmPassword()){
            setHasBeenSubmitted(false);
        }else{
            const newUser = {firstName,lastName,email,password,confirmPassword}
            setHasBeenSubmitted(true);
        }
    }

    return(
        <>
            <form className={"container w-50 mt-5"} onSubmit={createUser}>
                {
                    hasBeenSubmitted ?
                        <div className="container">
                            Thank you for submitting!
                        </div>
                        :
                        <div className="row">
                            <div className="col-6">
                                <label htmlFor="firstName">First Name:</label>
                                <input type="text" className={"form-control"} onChange={ (e) => setFirstName(e.target.value)}/>
                                {firstNameErrors ? <p className="text-danger">{firstNameErrors}</p> : ""}
                            </div>
                            <div className="col-6">
                                <label htmlFor="lastName">Last Name:</label>
                                <input type="text" className={"form-control"} onChange={ (e) => setLastName(e.target.value)}/>
                                {lastNameErrors ? <p className="text-danger">{lastNameErrors}</p> : ""}
                            </div>

                            <div className="col-12">
                                <label htmlFor="email">Email:</label>
                                <input type="email" className={"form-control"} onChange={ (e) => setEmail(e.target.value)}/>
                                {emailErrors ? <p className="text-danger">{emailErrors}</p> : ""}
                            </div>

                            <div className="col-12">
                                <label htmlFor="password">Password:</label>
                                <input type="text" className={"form-control"} onChange={ (e) => setPassword(e.target.value)}/>
                                {passwordErrors ? <p className="text-danger">{passwordErrors}</p> : ""}
                            </div>

                            <div className="col-12">
                                <label htmlFor="confirmPassword">Confirm Password:</label>
                                <input type="text" className={"form-control"} onChange={ (e) => setConfirmPassword(e.target.value)}/>
                                {confirmPasswordErrors ? <p className="text-danger">{confirmPasswordErrors}</p> : ""}
                            </div>

                            <button className="btn my-4 btn-block w-50 mx-auto btn-dark" type={"submit"}>Submit</button>


                        </div>
                }
            </form>

            <div className={"container mt-5"}>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </>
    );
};

export default RegisterForm;