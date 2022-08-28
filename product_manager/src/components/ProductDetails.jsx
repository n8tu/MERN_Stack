import React , { useEffect , useState} from "react";
import axios from "axios";
import {useHistory} from "react-router";
import {useParams} from "react-router-dom";

export default (props) => {

    const [product,setProduct] = useState([])
    const { _id } = useParams()
    const history = useHistory();

    // Redirect to edit product path
    const editProduct = (e,_id) => {
        e.preventDefault()
        history.push("/product/"+ _id + "/edit")
    }

    // Autofill states when the component is loaded
    useEffect(() => {
        axios.get("http://localhost:8000/product/" + _id)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    },[])

    return(
        <div style={{marginTop:"50px"}} className="container p-5">
            <div className="container text-center p-3 mb-3">
                <p className={"fw-bold"}>{product.title}</p>
                <p>Price: {product.price}</p>
                <p>Description: {product.description}</p>
                <button  onClick={(e) => editProduct(e,product._id)} className="btn btn-dark">Edit</button>
            </div>
        </div>
    )
}