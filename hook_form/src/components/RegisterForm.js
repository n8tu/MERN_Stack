import React , {useState} from "react";


const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName,lastName,email,password,confirmPassword}
    }

    return(
        <>
            <form className={"container w-50 mt-5"} onSubmit={createUser}>
                <div className="row">
                    <div className="col-6">
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" className={"form-control"} onChange={ (e) => setFirstName(e.target.value)}/>
                    </div>
                    <div className="col-6">
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" className={"form-control"} onChange={ (e) => setLastName(e.target.value)}/>
                    </div>

                    <div className="col-12">
                        <label htmlFor="email">Email:</label>
                        <input type="email" className={"form-control"} onChange={ (e) => setEmail(e.target.value)}/>
                    </div>

                    <div className="col-12">
                        <label htmlFor="password">Password:</label>
                        <input type="text" className={"form-control"} onChange={ (e) => setPassword(e.target.value)}/>
                    </div>

                    <div className="col-12">
                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <input type="text" className={"form-control"} onChange={ (e) => setConfirmPassword(e.target.value)}/>
                    </div>


                </div>
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


export default UserForm;