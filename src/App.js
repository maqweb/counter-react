import React from 'react';
import './App.css';
import Display from "./components/Display";
import Buttons from "./components/Buttons";

class App extends React.Component {

    state = {
        value: 0,
        buttons: [
            {title: 'inc', disabled: false},
            {title: 'reset', disabled: true},
        ]
    };

    changeState = () => {
        let value = this.state.value;
        value++;
        if (value <= 3) {
            this.setState({value: value});
            if (value === 3) {
                this.disableButtons(value);
            }
        }
    };

    resetState = () => {
        let buttonsCopy = [...this.state.buttons];
        buttonsCopy[0].disabled = false;
        buttonsCopy[1].disabled = true;
        this.setState({value: 0, buttons: buttonsCopy});
    };

    disableButtons = (value) => {
        if (value === 3) {
            let buttonsCopy = [...this.state.buttons];
            buttonsCopy[0].disabled = true;
            buttonsCopy[1].disabled = false;
            this.setState({buttons: buttonsCopy})
        }
    };

    render() {
        return (
            <div className="App">
                <header className="App-wrapper">
                    <Display value={this.state.value}/>
                    <Buttons buttons={this.state.buttons} changeState={this.changeState} resetState={this.resetState}/>
                </header>
            </div>
        );
    }

}

export default App;
