import React from 'react';

function Control(props) {
    let errorClass = props.startValue < 0 ? 'error' : '';
    return (
            <div className="set-item">
                <label className="label" htmlFor="control"><span>{props.controlTitle}</span>
                    <input className={errorClass} onClick={props.setStartValue || props.setMaxValue} type="number"/>
                </label>
            </div>
    )
}

export default Control;