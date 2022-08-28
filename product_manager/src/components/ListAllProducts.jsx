import React, {useState} from "react";
import {useHistory} from "react-router";
import pencil_fill from "bootstrap-icons/icons/pencil-fill.svg"
import trash from "bootstrap-icons/icons/trash.svg"
import axios from "axios";
export default (props) => {

    const history = useHistory();

    // Redirect to show product path
    const showProduct = (e,_id) => {
        e.preventDefault()
        history.push("/product/"+ _id)
    }

    // Redirect to edit product path
    const editProduct = (e,_id) => {
        e.preventDefault()
        history.push("/product/"+ _id + "/edit")
    }

    // Delete Product and update the list in DOM by sending data to main
    const deleteProduct = (e,_id) => {
        axios.delete(`http://localhost:8000/product/${_id}/delete`)
            .then(() => {
                axios.get("http://localhost:8000/product")
                    .then(res => props.sendTrigger(res.data))
        });
    }

    return(
        <div className="container w-50 p-4 bg-light mb-4">
            <div className="mb-3 text-center">
                <h1 className="display-5">All Products</h1>
            </div>
            <div className="container">
                <ul className={"list-group text-center"}>
                    {props.products.map( (product,i) =>
                        <li key={i} className={"list-group-item"}>
                            <div className="row text-center">
                                <div className="col-10 fw-semibold">
                                    <p onClick={(e) => showProduct(e,product._id)}>{product.title}</p>
                                </div>
                                <div className="col-1">
                                    <img  onClick={(e) => editProduct(e,product._id)} src={pencil_fill}/>
                                </div>
                                <div className="col-1">
                                    <img onClick={(e) => deleteProduct(e,product._id)} src={trash}/>
                                </div>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}