import React , { useState , useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css"
import { useParams , useHistory } from "react-router";
import ProductForm from "../components/ProductForm";

export default (props) => {

    const [product,setProduct] = useState();
    const [loaded,setLoaded] = useState(false);
    const { _id } = useParams();
    const history = useHistory();

    // Autofill states when the component is loaded
    useEffect( () => {
        axios.get("http://localhost:8000/product/" + _id)
            .then(res => {
                setProduct(res.data)
                setLoaded(true);
            })
            .catch(err => console.log(err))
    },[])

    const updateProduct = (product_form) => {
        axios.put(`http://localhost:8000/product/${product._id}/update`,product_form)
            .then(res => {
                console.log(res.data)
                history.push("/product");
            })
    }

    return (
        <>
            {loaded && (<ProductForm initialTitle={product.title}
                                     initialPrice={product.price}
                                     initialDescription={product.description}
                                     onSubmitProps={updateProduct}/>
            )}
        </>
    )
}