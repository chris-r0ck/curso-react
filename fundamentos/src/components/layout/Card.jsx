import React from "react";
import './Card.css'

//Esse elemento só serve para definir o layout para outros elementos que possam vir a utilizar 
//este estilo, passando via {props.children}

export default function Card(props) {
  
  //Recebe via props o valor da propriedade backgroundColor
    const estilo = {
    backgroundColor: props.bgColor || "#F00"

  }

    return (
        <>
        <div className="divCard" style={estilo}>
    
        <h1 className="cardTitle">{props.titulo}</h1>
        
            <span className="cardContent">
                {props.children}
            </span>
        </div>
        </>
    )
}

