import React , {useState} from "react";

const DisplayContent = (props) => {

    // display the main content that has been set in "App" from "show" function.
    return(
        <div className="container mt-3 w-50 border border-2 border-dark">
            <p className="p-4">
                {props.display ? props.display : "No content"}
            </p>
        </div>
    )
}

export default DisplayContent;