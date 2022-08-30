import React, { useContext, useEffect } from "react";
import AuthorWrapper from "../context/AuthorWrapper";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css"
import {useHistory} from "react-router";
import DeleteButton from "./DeleteButton";

export default (props) => {
    const { authors , setAuthors } = useContext(AuthorWrapper)
    const history = useHistory()

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => setAuthors(res.data.authors))
    },[])

    const refreshAuthors = (authorId) => {
        setAuthors(authors.filter( (author) => author._id != authorId ));
    }

    return (
        <div className={"container w-50 mt-4"}>
            <a className={"link-primary"} onClick={() => history.push("/new")}> add an author</a>
            <p>We have quotes by:</p>
            <table className="table table-striped table-hover">
                <thead className={"bg-dark text-light"}>
                    <tr>
                        <td>Author</td>
                        <td>Actions Available</td>
                    </tr>
                </thead>
                <tbody className={"bg-white"}>
                {authors.map((author,i) => {
                    return(
                        <tr key={i}>
                            <td>{author.name}</td>
                            <td className={"d-flex justify-content-center align-items-center"}>
                                <button className="btn btn-dark" onClick={()=> history.push(`/edit/${author._id}`)}>Edit</button>
                                <span className="mx-2"> | </span>
                                {(<DeleteButton authorId={author._id} callBackFunction={() => refreshAuthors(author._id)}/>)}
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}