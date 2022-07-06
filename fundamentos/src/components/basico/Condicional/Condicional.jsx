import React from "react";

const Condicional = (props) => {
    return (
        <div>
            {props.num % 2 ===0 ? <p>Par</p>:<p>Impar</p>}
        </div>    
    )
}

export default Condicional