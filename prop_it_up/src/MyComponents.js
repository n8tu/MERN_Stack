import React , {Component} from "react";
import App from "./App";

class Card extends Component{
    render() {
        const {firstName , lastName , age , color} = this.props;
        return (
            <>
                <div> {firstName} , {lastName}</div>
                <p>Age: {age}</p>
                <p> Hair Color: {color}</p>
                <hr/>
            </>
        );
    }

}

export default Card;