import './calculator.css';
import React, { useState }  from 'react';

const Calculator = () => {
    let [a, setA] = useState(0);
    let [b, setB] = useState(0);
    let [ivestaa, setIvestaa]=useState(false)
    let [ivestab, setIvestab]=useState(false)
    let [paspaustaLygu, setPaspaustalygu]=useState(false)
    let [rezultatas, setRezultatas] = useState(0);
    let [operator, setOperator] = useState('')
    let aIvedimas = (event, value) => { setA(a = parseInt(event.target.value)); setIvestaa(ivestaa = true); console.log(ivestaa)}
    let bIvedimas = (event, value) => { setB(b = parseInt(event.target.value)); setIvestab(ivestab = true)}
    let sudetis = () => {setOperator('+')};
    let atimtis = () => {setOperator('-')};
    let daugyba = () => {setOperator('*')};
    let dalyba = () => {setOperator('/')};
    let lygu = () => {if (operator==='+'){setRezultatas(a + b)}; 
                    if (operator==='-'){setRezultatas(a - b)};
                    if (operator==='*'){setRezultatas(a * b)};
                    if (operator==='/'){setRezultatas(a / b)}
                    setPaspaustalygu(paspaustaLygu = true)};
    let valyti = () => {setA(0); setB(0); setRezultatas(0); window.location.reload()}
    return (
        <div className="skaiciofke">
            <div className = "ivedimasIrAtvaizdavimas">
                <input className = "laukelis1" placeholder="Įveskite pirmą skaičių" onInput = { aIvedimas } style = {{display: operator!=='' ? "none" : "block"}}></input>
                <input className = "laukelis2" placeholder="Įveskite antrą skaičių" onInput = { bIvedimas } style = {{display: operator!=='' ? "block" : "none"}}></input>
                <div className="rezultatoStilius"> <span style = {{display:ivestaa ? "inline" : "none"}}>{a}</span> {operator} <span style = {{display:ivestab ? "inline" : "none"}}>{b}</span> <span style = {{display:paspaustaLygu ? "inline" : "none"}}> = {rezultatas}</span></div>
            </div>
            <div>
                <button className = "mygtukas" onClick = { sudetis }>+</button>
                <button className = "mygtukas" onClick = { atimtis }>-</button> <br/>
                <button className = "mygtukas" onClick = { daugyba }>x</button>
                <button className = "mygtukas" onClick = { dalyba }>/</button> <br/>
                <button className = "mygtukas" onClick = { lygu }>=</button> <br/>
                <button className = "mygtukasvalyti" onClick = { valyti }>Valyti</button>
            </div>
        </div>
    );
};

export default Calculator;