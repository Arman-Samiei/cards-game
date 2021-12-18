export class CardInfo {
    constructor(index, cardId, cardName, cardImageUrl) {
        this.cardNumber = index;
        this.cardId = cardId;
        this.cardName = cardName;
        this.cardImageUrl = cardImageUrl;
        this.isVisible = false;
        this.isRemoved = false;
    }
}

export function createCardsInfo(shuffledResponse) {
    let cardsInfo = {};
    shuffledResponse.map((card, index) => {
        cardsInfo[index] = new CardInfo(index, card.id, card.name, card.imageUrl);
    })
    return cardsInfo;
}