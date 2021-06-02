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
        let last = history[history.length - 1] || {};
        let otherTeam = this.otherTeam(team);
        let newItem = {}
        newItem[team] = last[team] + points;
        newItem[otherTeam] = last[otherTeam] || 0;
        history.push(newItem)
        this.setState({history: history})
    }

    otherTeam(team) {
        if (team === "red") {
            return "blue"
        } else {
            return "red"
        }
    }

    render() {
        let totals = this.state.history[this.state.history.length - 1] || { red: 0, blue: 0 };
        let previousTotals = { red: 0, blue: 0 };
        if (this.state.history.length >= 3) {
            previousTotals = this.state.history[this.state.history.length - 3]
        }
        return (
            <div className="container">
                <div className="flex flex-col items-center justify-center">
                    <div className="text-2xl text-center mb-4">Cribbage</div>
                    <Scoreboard redScore={totals.red} blueScore={totals.blue} />
                    <Board redScore={totals.red} blueScore={totals.blue} previousRedScore={previousTotals.red} previousBlueScore={previousTotals.blue} />
                    <ScoreIncrementGrid
                        incrementRed={(i) => {this.increment("red", i)}}
                        incrementBlue={(i) => {this.increment("blue", i)}}
                    />
                </div>
            </div>
        );
    }
}