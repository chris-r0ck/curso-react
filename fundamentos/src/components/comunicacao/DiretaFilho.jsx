import React from "react";


const DiretaFilho = (props) => {

    /*
    Tratamento do Array de objetos vindo do DiretaPai, para ser convertido em fragmento JSX pra ser
    renderizado
    */

    const filho = props.obj.map((filho, index) => {
        return (
        <li key={index}>
            {filho.nome} - {filho.idade} - {filho.bool?"Verdadeiro":"Falso"}
        </li>
        )
    })
   
   //Renderização do  
    return (
        <div>
            <ul>
                {filho}
            </ul>
        </div>
    )
}

export default DiretaFilho