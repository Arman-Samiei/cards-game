import "./App.css";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import React, {Component} from "react";
import Home from "./Home";
import GamePage from "./GamePage"
import {GAME_END_PAGE_URL, GAME_PAGE_URL} from "../utils/constants"
import GameEndPage from "./GameEndPage";

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>

                    <Route exact path='/'
                           render={(props) => <Home {...props} />}/>
                    <Route exact path={`/${GAME_PAGE_URL}/:username`}
                           render={(props) => <GamePage {...props} />}/>
                    <Route exact path={`/${GAME_END_PAGE_URL}/:username`}
                           render={(props) => <GameEndPage {...props} />}/>
                </Switch>
            </BrowserRouter>
        )

    }

}
export default App;