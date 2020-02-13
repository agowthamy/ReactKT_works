import React from 'react';
import './calculator.css';
import Input from './Components/input';
import Buttons from './Components/buttons';


const Calculator = () =>
{
    return(
        <div className="calculator">
            {/* <Input /> */}
            <Buttons />
        </div>
    );
}

export default Calculator;