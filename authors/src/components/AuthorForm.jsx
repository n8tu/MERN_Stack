import React, {useState} from "react";
import {useHistory} from "react-router-dom";

export default (props) => {
    const history = useHistory();
    const { initialName , onSubmitProps } = props;
    const [name,setName] = useState({
        value: initialName,
        error: true,
        message: "",
    });

    // Valid name before submit
    const validName = (e) => {
        let error = false;
        let message = "";
        if(e.target.value.length == 0){
            error = true;
            message = "Name is required!"
        }
        else if(e.target.value.length < 3){
            error = true;
            message = "Name must be at least 3 characters"
        }
        setName({
            value: e.target.value,
            error: error,
            message: message
        });
    }


    const submitHandler = (e) => {
        e.preventDefault();

        // Check if all data has no validation errors
        if([name.error].every((value) => value == false)){
            // send the data to create function throw onSubmit Props .
            onSubmitProps({name:name.value})
        }
    }


    return(
        <div className="container w-50">
            <form  onSubmit={submitHandler} className={"border border-dark border-2 rounded p-3"}>
                <div className="container">
                    <label htmlFor="author_name">Name:</label>
                    <input onChange={validName} value={name.value} type="text" className="form-control"/>
                    {name.error && (<span className="text-danger">{name.message}</span>)}
                </div>
                <div className="my-2">
                    <button type={"button"} className="btn btn-info mx-2 " onClick={() => history.push("/")}>Cancel</button>
                    <button type="submit" className="btn btn-dark">Submit</button>
                </div>
            </form>
        </div>
    )
}