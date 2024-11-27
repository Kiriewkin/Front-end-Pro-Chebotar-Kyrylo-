import React, { Component } from "react";
import './MyCounter.css';

class ClickCounter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            multiplier: 1
        };
    }

    changeCounter = (delta) => {
        this.setState((prevState) => ({
            count: prevState.count + delta
        }));
    };

    resetCounter = () => {
        this.setState({
            count: 0
        });
    };

    setMultiplier = (value) => {
        this.setState({
            multiplier: value
        })
    }

    render() {
        const { count, multiplier } = this.state;

        return (
            <div className="counter-container">
                <h1>Лічильник: {count}</h1>
                <h2>Доданок: {multiplier}</h2>

                <div style={{display: 'flex', gap: '15px'}}>
                    <button onClick={() => this.changeCounter(multiplier)} className="main-button" style={{backgroundColor: 'green'}}>Збільшити</button>
                    <button onClick={() => this.changeCounter(-multiplier)} className="main-button" style={{backgroundColor: 'red'}}>Зменшити</button>
                    <button onClick={this.resetCounter} className="main-button" style={{backgroundColor: 'grey'}}>Скинути</button>
                </div>

                <div>
                    <h3>Виберіть доданок:</h3>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <button onClick={() => this.setMultiplier(1)} className="term-button">1</button>
                        <button onClick={() => this.setMultiplier(5)} className="term-button">5</button>
                        <button onClick={() => this.setMultiplier(10)} className="term-button">10</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ClickCounter;
