import React from 'react';

function Control(props) {
    return (
            <div className="set-item">
                <label htmlFor="control">{props.controlTitle}</label>
                <input onClick={props.setStartValue || props.setMaxValue} id="control" type="number"/>
            </div>
    )
}

export default Control;