import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import APIwalker from "./components/APIwalker";
import People from "./components/People";
import Planet from "./components/Planet";

function App() {
    return (
        <BrowserRouter>
            <APIwalker/>
            <Switch>
                <Route path="/people/:id">
                    <People />
                </Route>
                <Route path="/planets/:id">
                    <Planet />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;