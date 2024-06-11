import PropTypes from 'prop-types'

export const FirstApp = ({title,subTitle, name}) => { 
    
    
    return (
        <>
            <h1>{title}</h1>
            {/* <code>{ JSON.stringify(persona) }</code> */}
            <p>{subTitle}</p>
            <p>{name}</p>
        </>
  )
}

FirstApp.prototype ={
    title : PropTypes.string.isRequired,
    subTitle : PropTypes.string,
}

FirstApp.defaultProps ={
    title : "Departamento de TI",
    subTitle : 'Programador',
    name : 'Juan Huiza',
}




