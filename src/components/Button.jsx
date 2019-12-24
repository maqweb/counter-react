import React from 'react';
import '../App.css';

const Button = (props) => {
    return (
        <div>
            <button className="btn" disabled={props.disabled} onClick={props.changeState || props.resetState}>{props.title}</button>
        </div>
    );
};

export default Button;
