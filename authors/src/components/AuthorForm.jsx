import React, {useState} from "react";
import {useHistory} from "react-router-dom";

export default (props) => {
    const history = useHistory();
    const { initialName , onSubmitProps } = props;
    const [name,setName] = useState(initialName);

    const submitHandler = (e) => {
        e.preventDefault();
        // send the data to create function throw onSubmit Props .
        onSubmitProps({name})
    }

    return(
        <div className="container w-50">
            <form  onSubmit={submitHandler} className={"border border-dark border-2 rounded p-3"}>
                <div className="container">
                    <label htmlFor="author_name">Name:</label>
                    <input onChange={(e) => setName(e.target.value)} value={name} type="text" className="form-control"/>
                </div>
                <div className="my-2">
                    <button type={"button"} className="btn btn-info mx-2 " onClick={() => history.push("/")}>Cancel</button>
                    <button type="submit" className="btn btn-dark">Submit</button>
                </div>
            </form>
        </div>
    )
}