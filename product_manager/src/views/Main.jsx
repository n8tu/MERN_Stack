import React, {useEffect, useState} from "react";
import ProductForm from "../components/ProductForm";
import ListAllProducts from "../components/ListAllProducts";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import axios from "axios";
import ProductDetails from "../components/ProductDetails";
import UpdateProductForm from "../components/UpdateProductForm";


export default () => {
    const [products,setProducts] = useState([])
    const [loaded,setLoaded] = useState(false)

    const createProduct = (form_data) => {
        axios.post("http://localhost:8000/product/new",form_data)
            .then( (res) => {
                setProducts([...products,res.data])
            })
    }


    // Autofill states when the component is loaded
    useEffect(() => {
        axios.get("http://localhost:8000/product")
            .then(res => {
                setProducts(res.data)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    },[])

    return (
        <BrowserRouter>
            <Switch>
                <Route path={"/product/:_id/edit"}>
                    <UpdateProductForm  sendTrigger={triggerProducts}/>
                </Route>
                <Route path={"/product/:_id"}>
                    <ProductDetails/>
                </Route>
                <Route path={"/product"}>
                    <CreateProductForm sendTrigger={triggerProducts}/>
                    <hr className={"w-75 mx-auto my-3"}/>
                    {loaded && <ListAllProducts products={products} sendTrigger={triggerProducts} />}
                </Route>
                <Route>
                    <Redirect to={"/product"}/>
                </Route>
            </Switch>
        </BrowserRouter>

    )
}