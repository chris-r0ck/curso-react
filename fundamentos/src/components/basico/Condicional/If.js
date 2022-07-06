//Componente Personalizdo em JS para testar se o componente está recebendo um valor valido e retornar
//a renderização válida

const If = (props) => {
        if (props.test){
            return props.children
        } else {
            return false
        }
}


export default If