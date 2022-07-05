import React from "react";

//Passando os parametros do pai e passando para o filho com o metodo Children.map
//o metodo map sempre informa uma key como segundo parametro

const Familia = (props) => { 
    return (
        <>{
            React.Children.map(props.children, (el, i) => {
                return React.cloneElement(el, props)
            })
        }
        </>
    )
}

export default Familia