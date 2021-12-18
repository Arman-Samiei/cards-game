import {compareRecords, getArrayLength, userIndexInTopRecords} from "./arrayUtils";
import {NUMBER_OF_TOPS_TO_SHOW} from "./constants";

export function createRecord(name, recordTime) {
    return {name, recordTime};
}

export function getRecords(recordsKey) {
    return JSON.parse(localStorage.getItem(recordsKey));
}

export function writeRecords(recordsKey, records) {
    localStorage.setItem(recordsKey, JSON.stringify(records));
}

export function getPlayerRecord(newPlayerResult, records) {
    let playerLatestRecord = records?.[newPlayerResult.name];
    if (!playerLatestRecord) {
        return newPlayerResult;
    }
    const compareResult = compareRecords(newPlayerResult, playerLatestRecord);
    if (compareResult === -1) {
        playerLatestRecord = newPlayerResult;
    }
    return playerLatestRecord;
}

export function updateRecords(playerNewRecord, records) {
    const playerName = playerNewRecord.name;
    if (!records) {
        records = {[playerName]: playerNewRecord};
    } else if ((!records[playerName]) || compareRecords(playerNewRecord, records[playerName]) === -1) {
        records[playerName] = playerNewRecord;
    }
    return records;
}


export function getTopRecords(newPlayerRecord, topRecords) {
    const topRecordsLength = getArrayLength(topRecords);
    if (!topRecordsLength) {
        topRecords = [newPlayerRecord];
        return topRecords;
    }
    const newPlayerRecordIndex = userIndexInTopRecords(newPlayerRecord, topRecords);
    if (newPlayerRecordIndex === -1) {
        topRecords.push(newPlayerRecord);
    } else if (compareRecords(newPlayerRecord, topRecords[newPlayerRecordIndex]) === -1) {
        topRecords[newPlayerRecordIndex] = newPlayerRecord;
    }
    topRecords.sort(compareRecords);
    topRecords = topRecords.slice(0, NUMBER_OF_TOPS_TO_SHOW);
    return topRecords;
}


