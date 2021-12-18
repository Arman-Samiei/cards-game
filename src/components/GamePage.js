import React, {Component} from "react";
import "./GamePage.css";
import Greeting from "./Greeting";
import Cards from "./Cards";
import Timer from "./Timer";


class GamePage extends Component {

    render() {
        return <div className="card-images-container">
            <Greeting username={this.props.match.params.username}/>
            <Timer/>
            <Cards username={this.props.match.params.username} numOfCards={parseInt(this.props.location.numOfCards)}/>
        </div>
    }
}

export default GamePage;
