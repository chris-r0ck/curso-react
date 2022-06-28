
//Importa o metodo React da classe react para passar código JSX, que possibilita a inclusao de tags HTML
import React from 'react'

//Importa o css para ser usado na pagina
import './index.css'

import Primeiro from "./components/basico/Primeiro/Primeiro"

import Notas from './components/basico/ComParametro/ComParametro'

import Fragmento from './components/basico/Fragmento/Fragmento'

import Funcoes from './components/basico/Funcoes/Funcoes'

import Aleatorio from "./components/basico/Aleatorio/Aleatorio"

import Familia from "./components/basico/Familia"

import Card from './components/layout/Card'

//Chama o metodo render e passa 2 paramentros, o primeiro é o conteudo, o segundo, o ID da div (ou container)
//que será injetado o código react
/*
ReactDOM.render(
    'Olá Mundo React (denovo)!!!',
    document.getElementById('root')
)
*/

//Codigo acima com tags JSX
//O Componente CARD só serve para dar estilo/layout a outros componentes

const App = (params) => {
    return (
    <>
        <Card titulo="Familia">
            <Familia ></Familia>
        </Card>
        
        <Card titulo="Aleatorio" bgColor="#258">
            <Aleatorio min={10} max={200} />
        </Card>

        <Card titulo="#0 - Primeiro Exercicio" bgColor="#f0a">
        <Primeiro></Primeiro>
        </Card>

        {/* Parametros string com aspas, parametros bool ou num, com chaves */}
        <Card titulo="#01 - Notas Com Parametros" bgColor="gray">
        <Notas aluno="Cristiano" nota={ 8.5 }></Notas>
        <Notas aluno="Priscila" nota={ 9.5 }></Notas>
        </Card>

        <Card titulo="#02 - Fragmentos JSX" bgColor="black">
            <Fragmento></Fragmento>
        </Card>
        
        <Card titulo="#03 - Funções JS e JSX" bgColor="yellow">
            <Funcoes />
        </Card>
    </>
)}

export default App

