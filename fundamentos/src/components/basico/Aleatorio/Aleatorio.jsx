import React from "react";


const Aleatorio = (props) => {
    /* -- FUNCIONA, MAS É ERRADO, SÓ PRA CONSTAR, EU QUE FIZ --
    let randomValue = Math.random() * props.max + props.min

    if (randomValue > props.max){
       randomValue = props.max
    }
    */

    //Formula para valores aleatorios inteiros
    const randomValue = parseInt(Math.random() * (props.max - props.min)) + props.min

    //function randomValue(a=max, b=min) { return parseInt(Math.random() * (a - b)) + b}

    //Destructuring - dentro do objeto props, tem o elemento max e min, o desestructuring retira esses elementos
    //e tranformam em variaveis
    const { max, min} = props

    return (
        <>
        
            <p>Valor Aleatorio é {randomValue}</p>
            <p>Valor Minimo: {min}</p>
            <p>Valor Máximo: {max}</p>
        
        </>
    )
}

export default Aleatorio