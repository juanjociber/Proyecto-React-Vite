const newMessage = 'Juan Jose';
const persona ={
    nombre: 'Jose',
    edad:46
}

const saludo = (cadena)=>{
    return cadena;
}

export const FirstApp = () => {    
    return (
        <>
            <h1>{ saludo('Buenos días')}</h1>
            <code>{ JSON.stringify(persona) }</code>
            <p>Programador Junior</p>
        </>
  )
}



