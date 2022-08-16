import React, {Component} from "react";

class Card extends Component{
    constructor(props) {
        super(props);
        this.state = {
            first_name: this.props.firstName,
            last_name: this.props.lastName,
            age: this.props.age,
            color: this.props.color
        }
    }

    birthDay = (e) => {
        this.setState({age: this.state.age+1});
    }

    render() {
        return(
          <>
              <div className="container text-center mt-4">
                  <h1>{this.state.first_name} {this.state.last_name}</h1>
                  <p>Age: {this.state.age}</p>
                  <p>Color: {this.state.color}</p>
                  <button onClick={this.birthDay} className="btn">BirthDay</button>
              </div>
              <hr/>
          </>
        );
    }
}

export default Card;