import React, { Component } from "react";

import Results from "./Results";
import { saveToLocalStorage, loadFromLocalStorage } from "../../utils/localStorage";

import "./Emoji.css"


class EmojiList extends Component {
    constructor(props) {
        super(props);

        const savedEmojis = loadFromLocalStorage("emojis");

        const emojis = Array.isArray(savedEmojis) ? savedEmojis : [
            { name: "Smile", symbol: "😊", votes: 0 },
            { name: "Heart", symbol: "❤️", votes: 0 },
            { name: "Thumbs Up", symbol: "👍", votes: 0 },
        ];

        this.state = {
            emojis: emojis,
            showResults: false,
        };
    }

    addVotes = (name) => {
        this.setState((prevState) => {
            const updatedEmojis = prevState.emojis.map((emoji) =>
                emoji.name === name
                    ? { ...emoji, votes: emoji.votes + 1 }
                    : emoji
            );

            saveToLocalStorage("emojis", updatedEmojis);

            return { emojis: updatedEmojis };
        });
    };

    clearVotes = () => {
        const clearedEmojis = this.state.emojis.map((emoji) => ({
            ...emoji,
            votes: 0,
        }));

        this.setState({
            emojis: clearedEmojis,
            showResults: false,
        });

        saveToLocalStorage("emojis", clearedEmojis);
    };

    showResults = () => {
        this.setState({ showResults: true });
    };

    render() {
        const { emojis, showResults } = this.state;

        if (!Array.isArray(emojis)) {
            return <div>Ошибка загрузки данных</div>;
        }

        return (
            <div>
                {emojis.map((emoji) => (
                    <div key={emoji.name} className="emoji-container">
                        <button onClick={() => this.addVotes(emoji.name)}>
                            {emoji.symbol}
                        </button>
                        <p>Голоса: {emoji.votes}</p>
                    </div>
                ))}

                <div className="emoji-btn">
                <button onClick={this.showResults}>Показать результаты</button>
                <button onClick={this.clearVotes}>Очистить результаты</button>
                </div>

                {showResults && <Results emojis={emojis} />}
            </div>
        );
    }
}

export default EmojiList;
