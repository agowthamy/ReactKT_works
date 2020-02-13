import React, { useState } from 'react';
import './buttons.css';
import Input from './input';
let operandList = [];
let sum = 0;
const Buttons = () => {
    const elements = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '+'];
    const [value, setValue] = useState("");
    const [items, setItems] = useState([]);
    let operandValue = '';
    
    const hCollectValue = (v) => {
        if (v === "+"){
             if(value !== ""){
                 operandList.push(parseInt(value, 10));
                 console.log("op List", operandList)
                 setValue("");
             }
        }else{
            let _v = value + v; // int string collect
            console.log("v", _v)
            setValue(_v);
        }
    };

    const hGetSum = () => {
        
        console.log(operandList);
        for(let i = 0; i < operandList.length; ++i){
            sum += operandList[i]+parseInt(value, 10);
        }
        alert(sum);
        operandList = [];
        setValue("");
        
    };

    return (
        <div>
            {
                <>
                    <div><Input inputText={sum} valueText={value}/></div>
                    <div>
                        {elements.map((value, index) => {
                            // return <button onClick={EnterValue} value={value}>{value}</button>
                            return <button key={index} onClick={() => hCollectValue(value)}>{value}</button>
                        })}
                        {/* <button onClick={Calculate}>=</button> */}
                        <button onClick={() => hGetSum()}>=</button>
                    </div>

                </>
            }

        </div>
    );
}

export default Buttons;