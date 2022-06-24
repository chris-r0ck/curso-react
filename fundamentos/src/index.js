//Importa o metodo ReactDOM da classe ReactDom
import ReactDOM from 'react-dom'

//Importa o metodo React da classe react para passar código JSX, que possibilita a inclusao de tags HTML
import React from 'react'

import App from './App'

//Utilizando o componente "pai" App.jsx para agregar outros componentes nele
ReactDOM.render(
    
        <div className='container'>        
            <App />
        </div>

    ,
    document.getElementById('root')
)




//Assim também funciona:
/*
const element = document.getElementById('root')
ReactDOM.render('Uma String ou um array, qqr coisa', element)
*/