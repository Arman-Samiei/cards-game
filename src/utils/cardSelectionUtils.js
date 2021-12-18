export function checkIfCardIsNew(cardNumber, displayedCards) {
    for (let i = 0; i < displayedCards.length; i++) {
        if (displayedCards[i].cardNumber === cardNumber) {
            return false;
        }
    }
    return true;
}

function areSelectedCardsTheSame(card1Info, card2Info) {
    return card1Info.cardId === card2Info.cardId;
}

export function getTimeOut(card1Info, card2Info) {
    if (!areSelectedCardsTheSame(card1Info, card2Info)) {
        return 1000;
    }
    return 3000;
}

export function changeTwoCardsProperty(card1Info, card2Info) {
    if (!areSelectedCardsTheSame(card1Info, card2Info)) {
        card1Info.isVisible = card2Info.isVisible = false;
        return;
    }
    card1Info.isRemoved = card2Info.isRemoved = true;
}

export function getNumOfCardsRemoved(card1Info, card2Info){
    if (!areSelectedCardsTheSame(card1Info, card2Info)) {
        return 0;
    }
    return 2;
}
