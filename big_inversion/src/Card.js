import React, {Component} from "react";


const PersonCard = (props) => {
    return(
      <>
          <div className="container text-center mt-4">
              <h1>{props.firstName} {props.lastName}</h1>
              <p>Age: {props.age}</p>
              <p>HairColor: {props.color}</p>
          </div>
          <hr/>
      </>
    );
}

export default PersonCard;