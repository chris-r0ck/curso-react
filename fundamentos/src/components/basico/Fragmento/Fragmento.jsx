import React from "react";


const a =  (props) => {
   return (
   <>
        <p>Fragmento JSX, precisa sempre estar envolvido numa tag pai</p>
        <p>Nesse caso, é uma tag especial vazia, para o caso de não necessitar de uma tag div</p>

    </>
)}

export default a

//Para passar atributos no fragment, é necessário invocar a tag <React.Fragment>
//Ex: <React.Fragment key='123' value={ true }>