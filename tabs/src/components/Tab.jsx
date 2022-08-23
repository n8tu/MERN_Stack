import React , {useState} from "react";
import "bootstrap/dist/css/bootstrap.css"

const Tab = (props) => {

    // to be called on clicked, and send the content from the children if any, otherwise send normal message
    //via "mail" props => function.
    const openTab = (e) => {
        props.mail(
            props.children ? props.children : props.name + " content is here"
        );
    }
    return(
        <>
            <button className="tab-button btn btn-outline-dark m-2"
                    onClick={openTab}>
                {props.name ? props.name : "Tab"}
            </button>
        </>
    )

}

export default Tab;