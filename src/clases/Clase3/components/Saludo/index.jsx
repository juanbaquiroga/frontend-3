
const Saludo = ({nombre, children}) =>{
    return (
        <>
        <p>{children} {nombre}</p>
        </>
    )
}

export default Saludo;