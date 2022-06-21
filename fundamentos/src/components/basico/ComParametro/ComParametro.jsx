import React from "react";

export default function Notas (props){
    
    //Ternário para nota, vindo do parametro como numero
    const status = props.nota >= 7 ? "Aprovado":"Reprovado"

    return (
        <div>
            <hr/>
            <h2>Componente: ComParametro.jsx - Teste de Notas</h2>
            <p>
                O Aluno {props.aluno} tem nota {props.nota} e está {status}</p>
            <hr/>
        </div>
    )
}