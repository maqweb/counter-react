import React from 'react';
import '../App.css';

const Display = (props) => {
    let endClass = props.value === +(props.maxValue) ? 'end': '';
    return (
        <div className="display">
            <span className={endClass}>{props.value}</span>
        </div>
    );
};

export default Display;
