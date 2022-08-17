import './calculator.css';
import React, { useState }  from 'react';

const Calculator = () => {
    let [a, setA] = useState(0);
    let [b, setB] = useState(0);
    let [ivestaa, setIvestaa]=useState(false)
    let [ivestab, setIvestab]=useState(false)
    let [ivestasSkaicius, setIvestasSkaicius] = useState('')
    let [ivestasBSkaicius, setIvestasBSkaicius] = useState('')
    let [paspaustaLygu, setPaspaustalygu]=useState(false)
    let [rezultatas, setRezultatas] = useState(0);
    let [operator, setOperator] = useState('')

    let aIvedimas = (event, value) => {setA(a = parseFloat(event.target.value)); setIvestaa(ivestaa = true)}
    let bIvedimas = (event, value) => { setB(b = parseFloat(event.target.value)); setIvestab(ivestab = true)}
    let sudetis = () => {setOperator('+')};
    let atimtis = () => {setOperator('-')};
    let daugyba = () => {setOperator('*')};
    let dalyba = () => {setOperator('/')};
    let operatoriausIvedimas = (event) => {
        if (event.key === '+') {setOperator(operator = '+')} 
        if (event.key === '-') {setOperator(operator = '-')} 
        if (event.key === '*') {setOperator(operator = '*')} 
        if (event.key === '/'){setOperator(operator = '/')}
        if (event.key === 'Enter'){if (operator==='+'){setRezultatas(a + b); setIvestaa(ivestaa = true)}; 
                                    if (operator==='-'){setRezultatas(a - b); setIvestaa(ivestaa = true)};
                                    if (operator==='*'){setRezultatas(a * b); setIvestaa(ivestaa = true)};
                                    if (operator==='/'){setRezultatas(a / b); setIvestaa(ivestaa = true)};
                                    setPaspaustalygu(paspaustaLygu = true)}}
    let skaiciausIvedimas = (event) => { if (operator==='') {setIvestasSkaicius(ivestasSkaicius = ivestasSkaicius + event.target.id); setA(a = parseFloat(ivestasSkaicius)); setIvestaa(ivestaa = true)} 
        else {setIvestasBSkaicius(ivestasBSkaicius = ivestasBSkaicius + event.target.id); setB(b = parseFloat(ivestasBSkaicius)); setIvestab(ivestab = true)}}
    let lygu = () => {if (operator==='+'){setRezultatas(a + b); setIvestaa(ivestaa = true)}; 
                    if (operator==='-'){setRezultatas(a - b); setIvestaa(ivestaa = true)};
                    if (operator==='*'){setRezultatas(a * b); setIvestaa(ivestaa = true)};
                    if (operator==='/'){setRezultatas(a / b); setIvestaa(ivestaa = true)}
                    setPaspaustalygu(paspaustaLygu = true)};
    let valyti = () => {setA(0); setB(0); setRezultatas(0); window.location.reload()}

    return (
        <div className="bodybox">
        <div className="skaiciofke">
            <div className = "ivedimasIrAtvaizdavimas">
                <input className = "laukelis1" placeholder="Įveskite pirmą skaičių" onInput = { aIvedimas } onKeyUp={ operatoriausIvedimas } style = {{display: operator!=='' ? "none" : "block"}}></input>
                <input className = "laukelis2" placeholder="Įveskite antrą skaičių" onInput = { bIvedimas } onKeyUp={ operatoriausIvedimas } style = {{display: operator!=='' ? "block" : "none"}}></input>
                <div className="rezultatoStilius"> <span style = {{display:ivestaa ? "inline" : "none"}}>{a}</span> {operator} <span style = {{display:ivestab ? "inline" : "none"}}>{b}</span> <span style = {{display:paspaustaLygu ? "inline" : "none"}}> = {rezultatas}</span></div>
            </div>
            <div>
                <button className = "mygtukas" onClick = { sudetis }>+</button>
                <button className = "mygtukas" onClick = { atimtis }>-</button>
                <button className = "mygtukas" onClick = { daugyba }>x</button>
                <button className = "mygtukas" onClick = { dalyba }>/</button><br/>
                <button className = "mygtukas" onClick = { lygu }>=</button>
                <button className = "mygtukassk" id = "1" onClick = { skaiciausIvedimas }>1</button>
                <button className = "mygtukassk" id = "2" onClick = { skaiciausIvedimas }>2</button>
                <button className = "mygtukassk" id = "3" onClick = { skaiciausIvedimas }>3</button> <br/>
                <button className = "mygtukassk" id = "4" onClick = { skaiciausIvedimas }>4</button>
                <button className = "mygtukassk" id = "5" onClick = { skaiciausIvedimas }>5</button>
                <button className = "mygtukassk" id = "6" onClick = { skaiciausIvedimas }>6</button> 
                <button className = "mygtukassk" id = "7" onClick = { skaiciausIvedimas }>7</button><br/>
                <button className = "mygtukassk" id = "8" onClick = { skaiciausIvedimas }>8</button>
                <button className = "mygtukassk" id = "9" onClick = { skaiciausIvedimas }>9</button>               
                <button className = "mygtukassk" id = "0" onClick = { skaiciausIvedimas }>0</button> 
                <button className = "mygtukassk" id = "." onClick = { skaiciausIvedimas }>.</button><br/>
                <button className = "mygtukasvalyti" onClick = { valyti }>Valyti</button>
            </div>
        </div>
        </div>
    );
};

export default Calculator;