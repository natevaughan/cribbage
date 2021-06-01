import React from "react";
import PegHole from "./PegHole";
import range from "../util/range"

export default class Board extends React.Component {

    render() {
        let redPostion = this.props.redScore || 1;
        let bluePosition = this.props.blueScore || 1;

        let row1 = range(1, 30).map((i) => { return (<PegHole i={i} filled={i === redPostion} team="red" />) });
        let row2 = range(1, 30).map((i) => { return (<PegHole i={i} filled={i === bluePosition} team="blue" />) });
        let row3 = range(31, 60).map((i) => { return (<PegHole i={i} filled={i === redPostion} team="red" />) });
        let row4 = range(31, 60).map((i) => { return (<PegHole i={i} filled={i === bluePosition} team="blue" />) });

        return (
            <div className="cribbage-board inline-block">
                <div>
                    {row1}
                </div>
                <div className="pb-4">
                    {row2}
                </div>
                <div>
                    {row3}
                </div>
                <div>
                    {row4}
                </div>
            </div>
        );
    }
}