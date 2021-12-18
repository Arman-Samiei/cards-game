import React, {Component} from "react";
import "./Greeting.css"

class Greeting extends Component {
    render() {
        return <div className="greeting">
            {`سلام ${this.props.username}`}
        </div>
    }
}

export default Greeting;
