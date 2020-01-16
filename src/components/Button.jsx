import React from 'react';
import '../App.css';

const Button = (props) => {
    return (
        <div>
            <button className="btn"
                    id={props.id}
                    disabled={props.disabled}
                    onClick={ props.onSetValue || props.changeState || props.resetState}>{props.title}</button>
        </div>
    );
};

export default Button;
