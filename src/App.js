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
        startText: 'enter values and press \'set\' ',
        errorText: 'Incorrect value!',
        maxValue: '',
        buttons: [
            {title: 'inc', disabled: true},
            {title: 'reset', disabled: true},
            {title: 'set', disabled: false}
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
        this.setState({value: this.state.startValue, buttons: buttonsCopy});
    };

    disableButtons = (value) => {

        if (value < 0) {
            let buttonsCopy = [...this.state.buttons];
            buttonsCopy[2].disabled = true;
            this.setState({buttons: buttonsCopy})
        }

        if (value >= 1) {
            let buttonsCopy = [...this.state.buttons];
            buttonsCopy[0].disabled = false;
            buttonsCopy[1].disabled = false;
            buttonsCopy[2].disabled = false;
            this.setState({buttons: buttonsCopy});
            if (value === Number(this.state.maxValue)) {
                buttonsCopy[0].disabled = true;
            }
        }
    };

    setStartValue = (e) => {
        this.setState({startValue: e.currentTarget.value});
        this.disableButtons(e.currentTarget.value)
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

                        <SetControls setStartValue={this.setStartValue}
                                     setMaxValue={this.setMaxValue}
                                     startValue={this.state.startValue}/>

                        <div className="set-buttons">
                            <Button setValue={this.setValue}
                                    title={this.state.buttons[2].title} disabled={this.state.buttons[2].disabled}/>
                        </div>
                    </div>

                    <div className="main-counter">

                        <Display value={this.state.value}
                                 startValue={this.state.startValue}
                                 maxValue={this.state.maxValue}
                                 startText={this.state.startText}
                                 errorText={this.state.errorText}/>

                        <Buttons buttons={this.state.buttons}
                                 changeState={this.changeState}
                                 resetState={this.resetState}/>

                    </div>


                </div>
        );
    }

}

export default App;
