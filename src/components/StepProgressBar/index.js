import React, { useState } from "react";
import classNames from 'classnames';

import './style.scss';

export const StepProgressBar = () => {
    const [step, setStep] = useState(0);

    const stepArr = ['Login', 'choose interest', 'add friends', 'View map']
    const maxStep = stepArr.length - 1;

    const prevStep = () => {
        if (step > 0) {
            setStep(step => step - 1)
        }
    }

    const nextStep = () => {
        if (step < maxStep) {
            setStep(step => step + 1)
        }
    }

    return (
        <div className="container">
            <ul className="progressbar">
                {stepArr.map((item, i) => (
                    <li key={item} className={classNames({'active': i <= step})}>{item}</li>
                ))}                    
            </ul>

            <div className="navigation">
                <button type="button" onClick={() => prevStep()}>Prev</button>
                <button type="button" onClick={() => nextStep()}>Next</button>
            </div>
        </div>
    )
}