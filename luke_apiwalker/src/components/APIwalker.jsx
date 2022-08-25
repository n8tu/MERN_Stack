import React , { useState } from "react";
import { useHistory } from "react-router";
import "bootstrap/dist/css/bootstrap.css"

export default (props) => {

    const [selection,setSelection] = useState("people");
    const [id,setId] = useState("");
    const history = useHistory();
    const search = (e) => {
        e.preventDefault();

        // re-routing the user with all data.
        history.push(`/${selection}/${id}`);
    }


    return (
        <form onSubmit={search}>
            <div className="row mt-4 justify-content-center align-items-center">

                <div className="col-2">
                    <p>Search for: </p>
                </div>

                <div className="col-2">
                    <select  onChange={ (e) => setSelection(e.target.value)} className="form-control mx-2">
                        <option value=""> select option </option>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                    </select>
                </div>

                <div className="col-2">
                    <p>ID:</p>
                </div>

                <div className="col-2">
                    <input type="Number" onChange={ (e) => setId(e.target.value)} className="form-control"/>
                </div>

                <div className="col-2">
                    <button type={"submit"} className="btn btn-primary mx-2">Search</button>
                </div>

            </div>
        </form>
    )
}