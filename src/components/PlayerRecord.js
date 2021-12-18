import {Component} from "react";
import {createRecord, getPlayerRecord, getRecords, updateRecords, writeRecords} from "../utils/recordsUtils";
import {timer} from "../context";


class PlayerRecord extends Component{
    state = {playerRecord: null}
    componentDidMount() {
        const newPlayerResult = createRecord(this.props.username, this.props.timeElapsedObject);
        let latestRecords = getRecords('records');
        const playerNewRecord = getPlayerRecord(newPlayerResult, latestRecords);
        latestRecords = updateRecords(playerNewRecord, latestRecords);
        writeRecords('records', latestRecords);
        this.setState({playerRecord: playerNewRecord});
    }
    render(){
        if(!this.state.playerRecord){
            return null;
        }
        const recordTimeString = timer.renderTime(this.state.playerRecord.recordTime);
        return <div className='player-record'>
            <div>{`${this.props.username} رکورد شما:  ${recordTimeString}`}</div>
        </div>
    }
}

export default PlayerRecord;