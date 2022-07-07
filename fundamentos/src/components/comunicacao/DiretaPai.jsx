import React from "react";
import DiretaFilho from './DiretaFilho'

/*
O Componente DiretaPai, transmite diretamente as props para o DiretaFilho sem espera
*/

//Array com um conjunto de objetos
const DiretaPai = (props) => {
    const meusFilhos = [
        {nome: "Melissa", idade: 16, bool: true},
        {nome: "Milena", idade: 13, bool: true},
        {nome: "Matheus", idade: 10, bool: true},
        {nome: "Priscila", idade: 35, bool: true},
    ]

    return (
        <>
        <DiretaFilho obj={meusFilhos}/>
        </>
    )
}

export default DiretaPai