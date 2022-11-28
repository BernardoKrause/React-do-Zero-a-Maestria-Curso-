import { useState } from "react"

const ListRender = () => {

    const [list] = useState(["Matheus", "Pedro", "Josias", "Maria"])

  return (
    <ul>
        {list.map((item) => (
            <li>{item}</li>
        ))}
    </ul>
  )
}

export default ListRender