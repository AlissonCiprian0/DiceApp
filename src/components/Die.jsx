import React from 'react';
import "./Die.css";

const Die = ({ face, isRolling }) => {
    const numbers = ['one', 'two', 'three', 'four', 'five', 'six'];

    return (
        <>
            <i className={`Die fas fa-dice-${numbers[face - 1]} ${isRolling ? 'rolling' : ''}`}></i>
        </>
    );
}
 
export default Die;