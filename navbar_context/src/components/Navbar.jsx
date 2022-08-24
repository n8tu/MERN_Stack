import React , { useContext } from "react";
import Wrapper from "../contexts/Wrapper";
import "bootstrap/dist/css/bootstrap.min.css";


const Navbar = () => {
    const userName = useContext(Wrapper);
    const navbar = {
        backgroundColor: "#333",
        color: "white",
        height: "100px",
    }

    return(
        <nav className={"row"} style={navbar}>
           <div className="container d-flex justify-content-end align-items-center">
               <p className={"mx-4 font-weight-bold"}>{userName}</p>
           </div>
        </nav>
    )
}

export default Navbar;