import React , { useEffect , useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

export default () => {

    const [product,setProduct] = useState([])
    const { _id } = useParams()

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
            </div>
        </div>
    )
}