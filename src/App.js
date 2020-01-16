import React from 'react';
import './App.css';
import Display from "./components/Display";
import Buttons from "./components/Buttons";
import Button from "./components/Button";
import SetControls from "./components/SetControls";
import {connect} from "react-redux";
import {
    disableIncButtonAC, disableResButtonAC,
    disableSetButtonAC,
    incValueAC, resetIncValueAC,
    setMaxValueAC,
    setStartValueAC,
    setValuesAC
} from "./store/reducer";

class App extends React.Component {

    changeState = () => {
        let value = this.props.value;
        value++;
        // if (value >= 1) {
        //     this.disableButtons(value);
        //     if (value <= this.state.maxValue) {
        //         this.setState({value: value});
        //     }
        // }
        if (value >= 1) {
            this.props.disableResButton(value);
        } else if (value === this.props.maxValue) {
            debugger
            this.props.disableResButton(value);
        }
        this.props.incValue(value);
    };

    resetState = () => {
        // let buttonsCopy = [...this.state.buttons];
        // buttonsCopy[0].disabled = false;
        // buttonsCopy[1].disabled = true;
        // this.setState({value: this.state.startValue, buttons: buttonsCopy});
        this.props.resetIncValue(this.props.startValue);
    };

    onSetStartValue = (e) => {
        this.props.setStartValue(e.currentTarget.value);
        this.onDisableSetButton(e.currentTarget.value)
    };

    onDisableSetButton = (value) => {
        this.props.disableSetButton(value);
    };

    onSetMaxValue = (e) => {
        this.props.setMaxValue(e.currentTarget.value)
    };

    onSetValue = () => {
        this.props.setValues(this.props.startValue);
        this.onDisableIncButton(this.props.startValue);
    };

    onDisableIncButton = (value) => {
        this.props.disableIncButton(value);
    };

    render = () => {

        return (
            <div className="App">

                <div className="set-counter">

                    <SetControls onSetStartValue={this.onSetStartValue}
                                 onSetMaxValue={this.onSetMaxValue}
                                 startValue={this.props.startValue}/>

                    <div className="set-buttons">

                        {/*{setButton}*/}

                        <Button onSetValue={this.onSetValue}
                                id={this.props.buttons[2].id}
                                title={this.props.buttons[2].title} disabled={this.props.buttons[2].disabled}/>

                        {/*<Button onSetValue={this.onSetValue} buttons={this.props.buttons}/>*/}

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
        disableSetButton: (value) => {
            const action = disableSetButtonAC(value);
            dispatch(action);
        },
        disableIncButton: (value) => {
            const action = disableIncButtonAC(value);
            dispatch(action)
        },
        disableResButton: (value) => {
            const action = disableResButtonAC(value);
            dispatch(action)
        },
        incValue: (value) => {
            const action = incValueAC(value);
            dispatch(action);
        },
        resetIncValue: (value) => {
            const action = resetIncValueAC(value);
            dispatch(action)
        }
    }
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default ConnectedApp;
