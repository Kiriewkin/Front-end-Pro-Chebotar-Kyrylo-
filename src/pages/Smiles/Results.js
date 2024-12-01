import React from "react";

const Results = ({ emojis }) => {
    const winner = emojis.reduce(
        (max, emoji) => (emoji.votes > max.votes ? emoji : max),
        { votes: 0 }
    );

    return (
        <div>
            {winner.votes > 0 ? (
                <h2>
                    Победитель: {winner.symbol} ({winner.name}) с {winner.votes} голосами!
                </h2>
            ) : (
                <h2>Пока нет голосов</h2>
            )}
        </div>
    );
};

export default Results;
