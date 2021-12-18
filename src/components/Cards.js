import React, {Component} from "react";
import "./GamePage.css";
import Card from "./Card";
import cardImagesUrl, {GAME_END_PAGE_URL} from "../utils/constants";
import {shuffleArray} from "../utils/arrayUtils";
import {createCardsInfo} from "../utils/cardInfo";
import {changeTwoCardsProperty, checkIfCardIsNew, getNumOfCardsRemoved, getTimeOut} from "../utils/cardSelectionUtils";
import {withRouter} from "react-router";
import {timer} from "../context";
import {getSessionStorageNumOfCards, setSessionStorageNumOfCards} from "../utils/numOfCardsUtils";

class Cards extends Component {
    state = {cardsInfo: {}, canClick: true, displayedCards: [], numOfCardsRemoved: 0, numOfCards: 0};
    addCardToDisplayedCards = (cardInfo) => {
        let newDisplayedCards = this.state.displayedCards;
        newDisplayedCards.push(cardInfo);
        this.setState({displayedCards: newDisplayedCards});
    }

    displayCard = (cardInfo) => {
        cardInfo.isVisible = true;
        this.setState({
            cardsInfo: {
                ...this.state.cardsInfo,
                [cardInfo.cardNumber]: cardInfo
            }
        })
    }

    twoCardsSelectedHandler = () => {
        const card1Info = this.state.displayedCards[0];
        const card2Info = this.state.displayedCards[1];
        setTimeout(() => {
            changeTwoCardsProperty(card1Info, card2Info);
            this.setState({
                canClick: true, displayedCards: [],
                cardsInfo: {
                    ...this.state.cardsInfo,
                    [card1Info.cardNumber]: card1Info,
                    [card2Info.cardNumber]: card2Info
                },
                numOfCardsRemoved: (this.state.numOfCardsRemoved + getNumOfCardsRemoved(card1Info, card2Info))
            });
        }, getTimeOut(card1Info, card2Info));
    }

    cardClickHandler = (event, cardInfo) => {
        if (!(checkIfCardIsNew(cardInfo.cardNumber, this.state.displayedCards))) {
            return;
        }
        this.addCardToDisplayedCards(cardInfo);
        this.displayCard(cardInfo);
        if (this.state.displayedCards.length === 2) {
            this.twoCardsSelectedHandler();
            this.setState({displayedCards: [], canClick: false});
        }
    }

    componentDidUpdate(prevProps, prevState) {
        setSessionStorageNumOfCards(this.state.numOfCards);
        if (this.state.numOfCardsRemoved === this.state.numOfCards) {
            timer.finishTiming();//pathname: '/register',
            const timeElapsedObject = timer.getTimeElapsed();
            this.props.history.push({
                pathname: `/${GAME_END_PAGE_URL}/${this.props.username}`,
                state: {timeElapsedObject: timeElapsedObject}
            });
        }
    }

    componentDidMount() {
        let numOfCards = this.props.numOfCards;
        if (Object.is(numOfCards, NaN)) {
            numOfCards = getSessionStorageNumOfCards();
        }
        cardImagesUrl.get(`?size=${numOfCards / 2}`)
            .then(response => {
                const duplicatedResponse = (response.data).concat(response.data);
                const shuffledResponse = shuffleArray(duplicatedResponse);
                const cardsInfo = createCardsInfo(shuffledResponse);

                timer.startTiming();
                this.setState({cardsInfo: cardsInfo, numOfCards: numOfCards});
            })
    }

    render() {
        return <div className="card-images">
            {Object.entries(this.state.cardsInfo).map(([cardInfoId, cardInfo]) => {
                return <Card cardInformation={cardInfo}
                             onClickHandler={this.state.canClick ? this.cardClickHandler : null}
                             key={cardInfo.cardNumber}/>
            })
            }
        </div>
    }
}

export default withRouter(Cards);