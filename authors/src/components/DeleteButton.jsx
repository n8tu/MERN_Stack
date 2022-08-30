import React from "react";
import axios from "axios";

export default (props) => {
    const { authorId , callBackFunction} = props;

    const deleteAuthor = (e) => {
        e.preventDefault();
        axios.delete("http://localhost:8000/api/author/" + authorId)
            .then( () => callBackFunction() )
    }
    return (
        <>
            <button onClick={deleteAuthor} className="btn btn-danger">Delete</button>
        </>
    )
}