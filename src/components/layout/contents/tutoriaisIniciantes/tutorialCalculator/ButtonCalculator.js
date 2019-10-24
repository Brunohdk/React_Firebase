import React from 'react';
import {ButtonCalculator} from './styledCalculator';

const isOperator = val => {
    return !isNaN(val) || val === '.' || val === "=";
};

export const Button = props => (
    <ButtonCalculator className={isOperator(props.children) ? null : "operator"}
    onClick={() => props.handleClick(props.children)}>
        {props.children}
    </ButtonCalculator>
)