import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(true)

    const [name, setName] = useState("Matheus")

  return <div>
    <h1>Isso será exibido?</h1>
    {x && <p>Se x for true, sim!</p>}
    <h1>If ternário</h1>
    {name === "João" ? (
        <div>O nome é João</div>
    ) : (
        <div>
            <p>Nome não encontrado</p>
        </div>
    )}
    <button onClick={() => setName("João")}>Clica aqui!</button>
  </div>
}

export default ConditionalRender