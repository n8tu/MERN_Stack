import React, {useContext, useEffect, useState} from "react";
import AuthorForm from "../components/AuthorForm";
import axios from "axios";
import AuthorWrapper from "../context/AuthorWrapper";
import {useHistory} from "react-router-dom";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css"



export default () => {
    const { authors , setAuthors } = useContext(AuthorWrapper)
    const [ errors , setErrors ] = useState([]);
    const history = useHistory();

    const createAuthor = (author_data) => {
        axios.post("http://localhost:8000/api/author/new",author_data)
            .then(res => {
                setAuthors([...authors,res.data.author]);
                // Redirect to main after submission .
                history.push("/");
            })
            .catch(err => {
                // Process each error message came from database and push them into an array to print it later.
                const errorResponse = err.response.data.errors;
                const errorArr = []
                // Loop through all errors and get the messages
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }

    // Notification library to I'm using it to send alerts for validations
    const alert = (message ,color = "green", duration= 3000) => {
        Toastify({
            text: message,
            duration: duration,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: color,
            },
        }).showToast();
    }

    return(
        <>
            <a onClick={()=> history.push("/")} className="link-primary">Home</a>
            <p>Add a new author:</p>
            {/* Print All Errors messages */}
            {errors.length > 0 && errors.map((error) => {
                    return(
                        alert(error,"Red")
                    )
                })
            }
            
            {(<AuthorForm onSubmitProps={createAuthor}/>)}
        </>
    )
}