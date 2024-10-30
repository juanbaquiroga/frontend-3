export const Card = ({text, children })=>{
    return (
        <div>
            <h1>card</h1>
            <p>{text}</p>
            {children}
        </div>
    )
}