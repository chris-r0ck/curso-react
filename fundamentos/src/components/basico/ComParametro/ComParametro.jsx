import React from "react";

export default function Notas (props){
    
    //Ternário para nota, vindo do parametro como numero
    const status = props.nota >= 7 ? "Aprovado":"Reprovado"

    //Parametros são somente leitura
    // # props.nota = Math.ceil(props.nota) -> Não vai funcionar
    //Jogue o tratamento dentro de uma variavel.


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