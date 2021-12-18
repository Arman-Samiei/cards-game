/**
 * Created by Arman Samiei on 10/2/2021.
 */
import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {GAME_PAGE_URL, MAX_NUMBER_OF_CARDS, MIN_NUMBER_OF_CARDS} from "../utils/constants"
import "./Home.css";

class Home extends Component {
    state = {numOfCards: MIN_NUMBER_OF_CARDS, hasError: false, username: ''}
    handleNumOfCardsChange = (event) => {
        const numOfCardsEntered = event.target.value;
        if (!(numOfCardsEntered >= MIN_NUMBER_OF_CARDS &&
            numOfCardsEntered <= MAX_NUMBER_OF_CARDS &&
            numOfCardsEntered % 2 === 0)) {
            this.setState({hasError: true});
            return;
        }
        this.setState({numOfCards: numOfCardsEntered, hasError: false});

    }
    handleUsernameChange = (e) => {
        this.setState({username: e.target.value})
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        if (this.state.hasError) {
            return;
        }

        this.props.history.push({
            pathname: `/${GAME_PAGE_URL}/${this.state.username}`,
            numOfCards: this.state.numOfCards
        })
    }


    render() {
        return <div className="username-getter-container">
            <div>خوش آمدید</div>
            <div>لطفا نام‌کاربری خود و تعداد کارت‌ها را وارد کنید</div>
            {this.state.hasError ? <div className='invalid-card-number'>عدد وارد شده معتبر نیست!</div> : null}
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <div>{`تعداد کارت‌ها باید بین ${MIN_NUMBER_OF_CARDS} و ${MAX_NUMBER_OF_CARDS} و مضربی از ۲ باشد`}</div>
                    <input type="text" onChange={this.handleUsernameChange} placeholder='نام خود را وارد کنید'/>
                    <input type="number" onChange={this.handleNumOfCardsChange} placeholder='تعداد کارت‌ها را وارد کنید'/>
                    <input type="submit" value="تایید"/>
                </form>
            </div>
            {/*<TopRecords />*/}
        </div>
    }

}

export default withRouter(Home);
