import React, {Component} from "react";
import {createRecord, getRecords, getTopRecords, writeRecords} from "../utils/recordsUtils";
import {timer} from "../context";


class TopRecords extends Component {
    state = {topRecords: null}

    componentDidMount() {
        const newPlayerResult = createRecord(this.props.username, this.props.timeElapsedObject);
        let oldTopRecords = getRecords('topRecords');
        let newTopRecords = getTopRecords(newPlayerResult, oldTopRecords);
        writeRecords('topRecords', newTopRecords);
        this.setState({topRecords: newTopRecords});
    }

    render() {
        if (!this.state.topRecords) {
            return null;
        }
        return <div className='top-records'>
            <table className='top-records-table'>
                {this.state.topRecords.map(topRecord => {
                    const recordTimeString = timer.renderTime(topRecord.recordTime);
                    return <tr>
                        <td>{topRecord.name}</td>
                        <td>{recordTimeString}</td>
                    </tr>
                })}
            </table>
        </div>
    }
}

export default TopRecords;