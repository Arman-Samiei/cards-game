export function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

export function compareRecords(record1, record2) {
    console.log(record1, record2);
    if (record1.recordTime.hours < record2.recordTime.hours) {
        return -1;
    } else if (record1.recordTime.hours > record2.recordTime.hours) {
        return 1;
    } else if (record1.recordTime.minutes < record2.recordTime.minutes) {
        return -1;
    } else if (record1.recordTime.minutes > record2.recordTime.minutes) {
        return 1;
    } else if (record1.recordTime.seconds < record2.recordTime.seconds) {
        return -1;
    } else if (record1.recordTime.seconds > record2.recordTime.seconds) {
        return 1;
    }
    return 0;
}

export function getArrayLength(arr) {
    return (arr?.length) ?? 0;
}

export function userIndexInTopRecords(newPlayerRecord, topRecords) {
    const arrayLength = getArrayLength(topRecords)
    for (let i = 0; i < arrayLength; i++) {
        if (newPlayerRecord.name === topRecords[i].name) {
            return i;
        }
    }
    return -1;
}

