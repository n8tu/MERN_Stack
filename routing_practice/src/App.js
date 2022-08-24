import './App.css';
import {Route , Link , Switch , BrowserRouter} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
import Home from "./components/Home";
import Param from "./components/Param";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark text-light">
              <div className="container p-3">
                  <Link className="nav-link" to={"/home"}>Home</Link>
              </div>
          </nav>
        <Switch>
            <Route path={"/home"}>
                <Home />
            </Route>
            <Route path={"/:param/:tColor/:tBackground"}>
                <Param />
            </Route>
            <Route path={"/:param"}>
                <Param />
            </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
