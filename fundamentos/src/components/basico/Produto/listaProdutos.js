function randomValue() {
    return Number((Math.random() * (10 - 1) + 1).toFixed(2))
} 

const produtos = [
    {id:0, descricao: 'Banana', preco: randomValue()},
    {id:1, descricao: 'Laranja', preco: randomValue()},
    {id:2, descricao: 'Maçã', preco: randomValue()},
    {id:3, descricao: 'Pera', preco: randomValue()},
    {id:4, descricao: 'Uva', preco: randomValue()},
    {id:5, descricao: 'Tagerina', preco: randomValue()},
    {id:6, descricao: 'Limão', preco: randomValue()},
    {id:7, descricao: 'Abacaxi', preco: randomValue()},
    {id:8, descricao: 'Acerola', preco: randomValue()},
    {id:9, descricao: 'Melão', preco: randomValue()}
]

export default produtos