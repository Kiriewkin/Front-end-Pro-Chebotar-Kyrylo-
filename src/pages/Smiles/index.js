import React, { Component } from "react";

import EmojiList from "./EmojiList";
import "./Emoji.css"

class SmilesShow extends Component {
    render() {
        return (
            <div className="main-emoji-container">
                <h1>Голосование за смайлики</h1>
                <EmojiList />
            </div>
        )
    }
}

export default SmilesShow;
