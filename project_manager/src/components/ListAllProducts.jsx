import React from "react";
import {useHistory} from "react-router";

export default (props) => {

    const history = useHistory();

    const showProduct = (e,_id) => {
        e.preventDefault()
        history.push("/product/"+ _id)
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
                            <a onClick={(e) => showProduct(e,product._id)}>{product.title}</a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}