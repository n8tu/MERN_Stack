import React from "react";
import {useParams} from "react-router";

export default () => {
    const { param ,tColor , tBackground} = useParams();
    const textStyle = {
        background: tBackground,
        color: tColor,
        padding: "30px",
        border: "solid black 2px"
    }

    return(
        <div className={"my-5"}>
            {
                isNaN(param) ?
                <p style={textStyle}>The word is : {param}</p> :
                <p style={textStyle}>The number is : {param} </p>
            }
        </div>
    )
}