import React , { useState , useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css"
import { useParams , useHistory } from "react-router";

export default (props) => {

    const [title,setTitle] = useState("")
    const [price,setPrice] = useState("")
    const [description,setDescription] = useState("")
    const { _id } = useParams();
    const history = useHistory();

    // Autofill states when the component is loaded
    useEffect( () => {
        axios.get("http://localhost:8000/product/" + _id)
            .then(res => {
                setTitle(res.data.title);
                setDescription(res.data.description)
                setPrice(res.data.price)
            })
            .catch(err => console.log(err))
    },[])

    // Update the product and update the DOM by sending the data to main if update is succeed
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/product/${_id}/update`,{title,price,description})
            .then( res => {
                axios.get("http://localhost:8000/product")
                    .then(res => props.sendTrigger(res.data))
                history.push("/product")
            })
            .catch(err => console.log(err))


        setTitle("")
        setPrice("")
        setDescription("")
    }


    return (
        <div className="container w-50 py-4">
            <header className="pb-3 mb-4 border-bottom">
                <div className="p-4 rounded container-fluid bg-light text-center fw-bolder">
                    {title}
                </div>
            </header>
            <form onSubmit={handleSubmit} className="container-fluid p-3 bg-light rounded-5">
                <div className="row mb-3">
                    <div className="col-md-2 text-center align-self-center fw-semibold">
                        Title:
                    </div>
                    <div className="col-md-9 ">
                        <input type="text" onChange={ (e) => setTitle(e.target.value)}
                               value={title} className="form-control"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-2 text-center align-self-center fw-semibold">
                        Price:
                    </div>
                    <div className="col-md-9 ">
                        <input type="Number" onChange={ (e) => setPrice(e.target.value)}
                               value={price} className="form-control"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-2 text-center align-self-center fw-semibold">
                        Description:
                    </div>
                    <div className="col-md-9">
                        <textarea onChange={ (e) => setDescription(e.target.value)}
                                  value={description} className="form-control"></textarea>
                    </div>
                </div>
                <div className="row mb-3">
                    <input type="submit" value="Submit" className="btn btn-dark btn-block w-50 mx-auto"/>
                </div>

            </form>
        </div>
    )
}