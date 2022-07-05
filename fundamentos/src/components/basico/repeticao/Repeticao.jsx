import React from "react";
import './Repeticao.css'
import lista from './lista.js'

//Pega a lista e transforma em fragmentos de jsx com o metodo map
//tem que passar o id do elemento para listas <li key={obj.id}>
const lis = lista.map(aluno => {
    return <li key={aluno.id}>{aluno.nome} - {aluno.nota}</li>
})


const Repeticao = (props) => {
    return (
        <div className="lista">
            <ul>
                {lis}
            </ul>
        </div>
    )
}

export default Repeticao;