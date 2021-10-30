import React, { useState } from 'react';
import Die from './Die';

import "./RollDice.css";

const RollDice = () => {
    const [face, setFace] = useState(1);
    const [isRolling, setIsRolling] = useState(false);
    const [buttonText, setButtonText] = useState('Roll dice!');

    const roll = (e) => {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        setFace(randomNumber);
        setIsRolling(true);
        e.target.disabled = true;
        setButtonText('Rolling...');

        setTimeout(() => {
            setIsRolling(false);
            e.target.disabled = false;
            setButtonText('Roll dice!');
        }, 500);
    }

    return (
        <div className="RollDice">
            <Die face={face} isRolling={isRolling} />

            <button className="RollDice-button" onClick={roll}>{ buttonText }</button>
        </div>
    );
}
 
export default RollDice;