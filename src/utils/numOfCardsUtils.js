export function getSessionStorageNumOfCards(){
    return parseInt(sessionStorage.getItem('numOfCards'));
}

export function setSessionStorageNumOfCards(numOfCards){
    sessionStorage.setItem('numOfCards', numOfCards);
}