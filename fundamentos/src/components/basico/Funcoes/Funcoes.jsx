import React from "react";

const testeFunc = <><p>Teste de Funções</p></>

//Tipos de Funções

/* ---COMUM----*/
/*
const func = function nome(props) {
    return(testeFunc)
}
*/

/* ---ARROW FUNCTION COMUM---*/
/*
const func = (props1, props2) => {
    return(testeFunc)
}
*/

/*--- ARROW REDUZIDA [Se houve só 1 parametro, omite o parentese]---*/
/*
const func =  props => {
    return(testeFunc)
}
*/

/* ---ARROW ENXUTA---[Coloca um '_' para ignorar o parametro e o return é 
implicito, também se omite as chaves e parenteses] */
 
const func =  _ => testeFunc

//Atribuindo a função a uma variavel e exportando.

export default func