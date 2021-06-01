import React from "react";
import Board from "./Board";
import ScoreIncrementGrid from "./ScoreIncrementGrid";
import Scoreboard from "./Scoreboard";

export default class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
                history: []
        };
    }

    increment(team, points) {
        let history = this.state.history.slice();
        let newItem = {}
        newItem[team] = points;
        history.push(newItem)
        this.setState({history: history})
    }

    render() {
        let redScore = this.state.history.reduce((total, history) => { return total + (history.red ? history.red : 0) }, 0);
        let blueScore = this.state.history.reduce((total, history) => { return total + (history.blue ? history.blue : 0) }, 0);
        return (
            <div className="container">
                <div className="flex flex-col items-center justify-center">
                    <div className="text-2xl text-center mb-4">Cribbage</div>
                    <Scoreboard redScore={redScore} blueScore={blueScore} />
                    <Board redScore={redScore} blueScore={blueScore} />
                    <ScoreIncrementGrid
                        incrementRed={(i) => {this.increment("red", i)}}
                        incrementBlue={(i) => {this.increment("blue", i)}}
                    />
                </div>
            </div>
        );
    }
}