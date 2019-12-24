import React from 'react';
import '../App.css';
import Button from "./Button";

const Buttons = (props) => {
    return (
        <div className="buttons">
            <Button title={props.buttons[0].title} changeState={props.changeState} disabled={props.buttons[0].disabled}/>
            <Button title={props.buttons[1].title} resetState={props.resetState} disabled={props.buttons[1].disabled}/>
        </div>
    );
};

export default Buttons;
