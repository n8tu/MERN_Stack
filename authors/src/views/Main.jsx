import React , { useState , useEffect } from "react";
import { Route , Switch , BrowserRouter } from "react-router-dom";
import AuthorWrapper from "../context/AuthorWrapper"
import ListAuthors from "../components/ListAuthors";
import CreateAuthor from "./CreateAuthor";
import EditAuthor from "./EditAuthor";


export default () => {
        const [authors,setAuthors] = useState([]);
    return (
            <>
                <h1>Favorite authors</h1>
                <BrowserRouter>
                    <Switch>
                        <AuthorWrapper.Provider value={{authors , setAuthors}}>
                            <Route exact path={"/"}>
                                <ListAuthors />
                            </Route>
                            <Route path={"/new"}>
                                <CreateAuthor />
                            </Route>
                            <Route path={"/edit/:_id"}>
                                <EditAuthor />
                            </Route>
                        </AuthorWrapper.Provider>
                    </Switch>
                </BrowserRouter>
            </>
    )
}