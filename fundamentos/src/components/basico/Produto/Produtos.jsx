import React from 'react';
import produtos from './listaProdutos.js'
import './produtos.css'

//Resultado exercicio
//- Esquci o Props
//- Não coloquei o border='1'
//- Inclusão de folha de estilos
//- Inclusão do par ou impar pra zebrar a tabela
// Colocando condições para o nome da classe da linha

const lista = produtos.map((prod, i) => {
    return (
        <tr key={prod.id} className={(i % 2)===0 ? "par" : "impar"}>
        <td>{prod.id}</td>
        <td>{prod.descricao}</td>
        <td>{prod.preco}</td>
        </tr>
    )
})

const Produtos = (props) => {
    return (
    <div className="TabelaProdutos">
        <table border='1'>
            <thead>
            <tr>
                <th>Código</th>
                <th>Descrição</th>
                <th>Preço</th>
            </tr>
            </thead>
            <tbody>
                {lista}
            </tbody>
        </table>
    </div>
)}

export default Produtos
