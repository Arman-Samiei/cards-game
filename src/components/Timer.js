import React, {Component} from "react";
import {timer} from "../context";

class Timer extends Component {
    state = {timer: timer, timeElapsed: ""}
    interval = null;
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({timeElapsed: timer.renderTime(timer.getTimeElapsed())});
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return <div className='timer'>
            {this.state.timeElapsed}
        </div>
    }
}

export default Timer;