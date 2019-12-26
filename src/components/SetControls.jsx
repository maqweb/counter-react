import React from 'react'
import Control from "./Control";

function SetControls(props) {
    return (
            <div className="set-controls">

                <Control setMaxValue={props.setMaxValue} controlTitle="max value:"/>
                <Control setStartValue={props.setStartValue} controlTitle="start value:"/>

            </div>
    )
}

export default SetControls;