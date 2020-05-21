import React from 'react';
import './mastercontainer.css';


const StartButton = (props) => {
    return (<div className="Welcome-start">
        {props.buttonTitle}
    </div>)
}

export default StartButton;