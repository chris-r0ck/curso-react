import React from "react";
import If from './If.js'

//Componente IF foi personalizado, criado por fora do React.

const UsuarioInfo = (props) => {
{/*
    a const test está recebendo os valores da props.nome vindo de app
    e fazendo um teste, se estiver recebendo valores, retorna o nome, senão retorna o valor "Anonimo"

*/}
   const test = props.nome || "Anonimo"

    return (
        <div>
            <If test>
                <p>Seja bem vindo { test }</p>
            </If>
        </div>
        
    )
}

export default UsuarioInfo