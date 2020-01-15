import React from 'react'
import Control from "./Control";

function SetControls(props) {
    return (
            <div className="set-controls">

                <Control onSetMaxValue={props.onSetMaxValue} controlTitle="max value:"/>
                <Control onSetStartValue={props.onSetStartValue} startValue={props.startValue} controlTitle="start value:"/>

            </div>
    )
}

export default SetControls;