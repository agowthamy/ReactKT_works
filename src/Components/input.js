import React from 'react';
import './input.css';

const Input = ({inputText,valueText}) =>
{
    return(
<div>
    {/* <input type="text" disabled /> */}
    {inputText}
    {valueText}
</div>
    );

}

export default Input;