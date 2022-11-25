
const Challenge = () => {

    const n1 = 5, n2= 12;


    return (
        <div>
            <h2>Valor 1: {n1}</h2>
            <h2>Valor 2: {n2}</h2>
            <button onClick={() => console.log(n1 + n2)}>Clique aqui!</button>
        </div>
    )

}

export default Challenge