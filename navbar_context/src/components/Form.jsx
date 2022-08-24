import React , { useContext } from "react";
import FormWrapper from "../contexts/FormWrapper";

const Form = () => {

    const {userName, setUserName} = useContext(FormWrapper)

    return(
        <form action="" className="container w-50 mt-5">
            <label htmlFor="name">Your Name:</label>
            <input type="text" onChange={(e) => setUserName(e.target.value)} className="form-control bg-light"/>
        </form>
    )
}

export default Form;
