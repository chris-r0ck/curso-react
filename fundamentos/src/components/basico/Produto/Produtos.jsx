import React from 'react';
import produtos from './listaProdutos.js'

const lista = produtos.map(prod => {
    return (
        <tr key={prod.id}>
        <td>{prod.id}</td>
        <td>{prod.descricao}</td>
        <td>{prod.preco}</td>
        </tr>
    )
})

const Produtos = () => {
    return (
    <div>
        <table>
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
