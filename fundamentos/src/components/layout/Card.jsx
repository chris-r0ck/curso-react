import React from "react";
import './Card.css'

export default function Card(props) {
  const bgColor = String(props.bgColor)

    return (
        <>
        <div className="divCard" style={{backgroundColor: bgColor}}>
        <h1 className="cardTitle">{props.titulo}</h1>
        
            <p className="cardContent">
                {props.children}
            </p>
        </div>
        </>
    )
}

