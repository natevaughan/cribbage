import React from "react";

export default class PegHole extends React.Component {
    render() {
        let color = "bg-gray";
        if (this.props.filled) {
            color = `bg-${this.props.team}`
        }
        let padding = this.props.i % 5 === 0 ? ' mr-4' : '';
        let clazz = `inline-block hole ${color}${padding}`;

        return (
          <div className={clazz}>
          </div>
        );
    }
}