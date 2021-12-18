import React, {Component} from "react";
import {timer} from "../context";
import "./GameEndPage.css"
import TopRecords from "./TopRecords";
import PlayerRecord from "./PlayerRecord";

export default class GameEndPage extends Component {
    render() {
        const timeElapsedObject = this.props.location.state.timeElapsedObject;
        const username = this.props.match.params.username;
        return <div className='end-message'>
            <div className='show-end-game-message'>{`${username}\nبازی تمام شد`}</div>
            <div className="show-end-game-message">زمان بازی شما:</div>
            <div className="show-time-elapsed">{timer.renderTime(timeElapsedObject)}</div>
            <PlayerRecord username={username} timeElapsedObject={timeElapsedObject}/>
            <TopRecords username={username} timeElapsedObject={timeElapsedObject}/>
        </div>
    }
}