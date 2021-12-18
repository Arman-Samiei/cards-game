import React, {Component} from "react";
import "./GamePage.css";
import "./Card.css"

class Card extends Component {
    render() {
        const cardInfo = this.props.cardInformation;
        return !cardInfo.isRemoved ? <img src={cardInfo.cardImageUrl} alt={cardInfo.cardName}
                                         className={`${cardInfo.isVisible ? null : 'not-chosen-card'} card-image`}
                                         id={`image${cardInfo.cardNumber + 1}`}
                                         onClick={(e) => this.props.onClickHandler?.(e, cardInfo)}/> :
            <div className='removed-image'></div>

    }
}

export default Card;
