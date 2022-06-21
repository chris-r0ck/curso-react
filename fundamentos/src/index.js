//Importa o metodo ReactDOM da classe ReactDom
import ReactDOM from 'react-dom'

//Importa o metodo React da classe react para passar código JSX, que possibilita a inclusao de tags HTML
import React from 'react'

//Importa o css para ser usado na pagina
import './index.css'

import Primeiro from "./components/basico/Primeiro/Primeiro"

import Notas from './components/basico/ComParametro/ComParametro'

//Chama o metodo render e passa 2 paramentros, o primeiro é o conteudo, o segundo, o ID da div (ou container)
//que será injetado o código react
/*
ReactDOM.render(
    'Olá Mundo React (denovo)!!!',
    document.getElementById('root')
)
*/

//Codigo acima com tags JSX



ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
        
        {/* Parametros string com aspas, parametros bool ou num, com chaves */}
        <Notas aluno="Cristiano" nota={ 8.5 }></Notas>
        <Notas aluno="Priscila" nota={ 9.5 }></Notas>


    </div>,
    document.getElementById('root')
)




//Assim também funciona:
/*
const element = document.getElementById('root')
ReactDOM.render('Uma String ou um array, qqr coisa', element)
*/