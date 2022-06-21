import './Primeiro.css'
import React from 'react'


export default function Primeiro (){
    return (
        <div>
        <p className='compFirst'>Primeirosdsd Componente
        </p>
        </div>
)}

//Para mais de uma tag, precisa de parentese no return

/*
//Pode ser usado uma função anonima para tal e o nome pode ser passado no index, mas amostra um warning.
export default function (){
    return <p className='compFirst'>Primeiro Componente</p>
}
*/

