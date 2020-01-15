import React from 'react';
import './App.css';
import Display from "./components/Display";
import Buttons from "./components/Buttons";
import Button from "./components/Button";
import SetControls from "./components/SetControls";
import {connect} from "react-redux";
import {disableButtonsAC, setMaxValueAC, setStartValueAC, setValuesAC} from "./store/reducer";

class App extends React.Component {

    // state = {
    //     value: 0,
    //     startValue: 0,
    //     startText: 'enter values and press \'set\' ',
    //     errorText: 'Incorrect value!',
    //     maxValue: '',
    //     buttons: [
    //         {title: 'inc', disabled: true},
    //         {title: 'reset', disabled: true},
    //         {title: 'set', disabled: false}
    //     ]
    // };

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

    onSetStartValue = (e) => {
        this.props.setStartValue(e.currentTarget.value);
        // this.disableButtons(e.currentTarget.value)
    };

    onSetMaxValue = (e) => {
        this.props.setMaxValue(e.currentTarget.value)
    };

    onSetValue = () => {
        this.props.setValues(this.props.startValue);
        // this.disableButtons(this.state.startValue);
        // this.setState({value: this.state.startValue});
    };

    render() {
        return (
            <div className="App">

                <div className="set-counter">

                    <SetControls onSetStartValue={this.onSetStartValue}
                                 onSetMaxValue={this.onSetMaxValue}
                                 startValue={this.props.startValue}/>

                    <div className="set-buttons">
                        <Button onSetValue={this.onSetValue}
                                title={this.props.buttons[2].title} disabled={this.props.buttons[2].disabled}/>
                    </div>
                </div>

                <div className="main-counter">

                    <Display value={this.props.value}
                             startValue={this.props.startValue}
                             maxValue={this.props.maxValue}
                             startText={this.props.startText}
                             errorText={this.props.errorText}/>

                    <Buttons buttons={this.props.buttons}
                             changeState={this.changeState}
                             resetState={this.resetState}/>

                </div>


            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        value: state.value,
        startValue: state.startValue,
        startText: state.startText,
        errorText: state.errorText,
        maxValue: state.maxValue,
        buttons: state.buttons
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setStartValue: (startValue) => {
            const action = setStartValueAC(startValue);
            dispatch(action)
        },
        setMaxValue: (maxValue) => {
            const action = setMaxValueAC(maxValue);
            dispatch(action)
        },
        setValues: (value) => {
            const action = setValuesAC(value);
            dispatch(action);
        },
        disableButtons: (buttonId) => {
            const action = disableButtonsAC(buttonId);
            dispatch(action);
        }
    }
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default ConnectedApp;
