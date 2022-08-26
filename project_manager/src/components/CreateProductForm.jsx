import React , { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css"

export default () => {

    const [title,setTitle] = useState()
    const [price,setPrice] = useState()
    const [description,setDescription] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/product/new",{title,price,description})
            .then(res => console.log(res.data.message))
            .catch(err => console.log(err))
    }

    return (
        <div className="container w-50 py-4">
            <header className="pb-3 mb-4 border-bottom">
                <div className="p-4 rounded container-fluid bg-light text-center fw-bolder">
                    Product Manager
                </div>
            </header>
            <form onSubmit={handleSubmit} className="container-fluid p-3 bg-light rounded-5">
                <div className="row mb-3">
                    <div className="col-md-2 text-center align-self-center fw-semibold">
                        Title:
                    </div>
                    <div className="col-md-9 ">
                        <input type="text" onChange={ (e) => setTitle(e.target.value)} className="form-control"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-2 text-center align-self-center fw-semibold">
                        Price:
                    </div>
                    <div className="col-md-9 ">
                        <input type="Number" onChange={ (e) => setPrice(e.target.value)} className="form-control"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-2 text-center align-self-center fw-semibold">
                        Description:
                    </div>
                    <div className="col-md-9">
                        <textarea onChange={ (e) => setDescription(e.target.value)} className="form-control"></textarea>
                    </div>
                </div>
                <div className="row mb-3">
                    <input type="submit" value="Submit" className="btn btn-dark btn-block w-50 mx-auto"/>
                </div>

            </form>
        </div>
    )
}