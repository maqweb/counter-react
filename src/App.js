import React from 'react';
import './App.css';
import Display from "./components/Display";
import Buttons from "./components/Buttons";
import Button from "./components/Button";
import SetControls from "./components/SetControls";

class App extends React.Component {

    state = {
        value: 0,
        startValue: 0,
        maxValue: 0,
        buttons: [
            {title: 'inc', disabled: true},
            {title: 'reset', disabled: true},
        ]
    };

    changeState = () => {
        let value = this.state.value;
        value++;
        if (value >= 1) {
            this.disableButtons(value);
            if (value <= this.state.maxValue) {
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
            buttonsCopy[0].disabled = false;
            buttonsCopy[1].disabled = false;
            this.setState({buttons: buttonsCopy});
            if (value === Number(this.state.maxValue)) {
                buttonsCopy[0].disabled = true;
            }
        }
    };

    setStartValue = (e) => {
        this.setState({startValue: e.currentTarget.value})
    };

    setMaxValue = (e) => {
        this.setState({maxValue: e.currentTarget.value});
    };

    setValue = () => {
        this.disableButtons(this.state.startValue);
        this.setState({value: this.state.startValue});
    };

    render() {
        return (
                <div className="App">

                    <div className="set-counter">

                        <SetControls setStartValue={this.setStartValue} setMaxValue={this.setMaxValue}/>

                        <div className="set-buttons">
                            <Button setValue={this.setValue} title="set"/>
                        </div>
                    </div>

                    <div className="main-counter">
                        <Display value={this.state.value} maxValue={this.state.maxValue}/>
                        <Buttons buttons={this.state.buttons}
                                 changeState={this.changeState}
                                 resetState={this.resetState}/>
                    </div>


                </div>
        );
    }

}

export default App;
