import React, {useEffect, useState} from "react";
import CreateProductForm from "../components/CreateProductForm";
import ListAllProducts from "../components/ListAllProducts";
import {BrowserRouter , Switch , Route} from "react-router-dom";
import axios from "axios";
import ProductDetails from "../components/ProductDetails";


export default () => {
    const [products,setProducts] = useState([])
    const [loaded,setLoaded] = useState(false)

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
                <Route path={"/product/:_id"}>
                    <ProductDetails/>
                </Route>
                <Route path={"/product"}>
                    <CreateProductForm/>
                    <hr className={"w-75 mx-auto my-3"}/>
                    {loaded && <ListAllProducts products={products}/>}
                </Route>
            </Switch>

        </BrowserRouter>

    )
}