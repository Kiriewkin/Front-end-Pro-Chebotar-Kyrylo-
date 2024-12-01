import React, { Component } from "react";

import "./Emoji.css"

class Results extends Component {
    showResults = () => {
        const { emojis } = this.props;

        const winner = emojis.reduce(
            (max, emoji) => (emoji.votes > max.votes ? emoji : max),
            { votes: 0 }
        );

        return winner.votes > 0
            ? `Победитель ${winner.symbol} (${winner.name}) с ${winner.votes} голосами!`
            : "Пока нет голосов";
    };

    render() {
        return (
            <div>
                <h2>{this.showResults()}</h2>
            </div>
        );
    }
}

export default Results;
