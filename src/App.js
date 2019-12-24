import React from 'react';
import './App.css';
import Display from "./components/Display";
import Buttons from "./components/Buttons";
import Button from "./components/Button";

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
        // let buttonsCopy = [...this.state.buttons];
        // buttonsCopy[1].disabled = true;
        if (value >= 1) {
            this.disableButtons(value);
            if (value <= 3) {
                this.setState({value: value});
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
        if (value >= 1) {
            let buttonsCopy = [...this.state.buttons];
            buttonsCopy[1].disabled = false;
            this.setState({buttons: buttonsCopy});
            if (value === 3) {
                buttonsCopy[0].disabled = true;
            }
        }
    };

    render() {
        return (
                <div className="App">

                    <div className="set-counter">
                        <div className="set-controls">
                            <div className="set-item">
                                <label htmlFor="maxValue"> max value:</label>
                                <input id="maxValue" type="number"/>
                            </div>
                            <div className="set-item">
                                <label htmlFor="startValue"> start value:</label>
                                <input id="startValue" type="number"/>
                            </div>
                        </div>
                        <div className="set-buttons">
                            <Button title="set"/>
                        </div>
                    </div>

                    <div className="main-counter">
                        <Display value={this.state.value}/>
                        <Buttons buttons={this.state.buttons} changeState={this.changeState}
                                 resetState={this.resetState}/>
                    </div>


                </div>
        );
    }

}

export default App;
