import React from 'react';
import '../App.css';

const Display = (props) => {
    let endClass = props.value === +(props.maxValue) ? 'end' : '';
    return (
            <div className="display">
                {props.startValue < 0
                        ? <span className="errorText">{props.errorText}</span> :
                        props.value === 0
                                ? <span className="startText">{props.startText}</span>
                                : <span className={endClass}>{props.value}</span>}

            </div>
    );
};

export default Display;
