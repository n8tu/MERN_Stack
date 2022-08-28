import React, {useEffect, useState} from "react";
import ProductForm from "../components/ProductForm";
import ListAllProducts from "../components/ListAllProducts";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import axios from "axios";
import ProductDetails from "../components/ProductDetails";
import EditProductPage from "./EditProductPage";


export default () => {
    const [products,setProducts] = useState([])
    const [loaded,setLoaded] = useState(false)

    // function to be called after form submission
    const createProduct = (product) => {
        axios.post("http://localhost:8000/product/new",product)
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
                    <EditProductPage/>
                </Route>
                <Route path={"/product/:_id"}>
                    <ProductDetails/>
                </Route>
                <Route path={"/product"}>
                    <ProductForm onSubmitProps={createProduct}/>
                    <hr className={"w-75 mx-auto my-3"}/>
                    {loaded && <ListAllProducts products={products} />}
                </Route>
                <Route>
                    <Redirect to={"/product"}/>
                </Route>
            </Switch>
        </BrowserRouter>

    )
}