
const UserDetails = ({name, age, profession}) => {

  return (
    <div>
        <h2>Dados de {name}</h2>
        <p>Idade: {age}</p>
        <p>Profissão: {profession}</p>
        { age >= 18 && <p>Usuário pode tirar carteira de habilitação!</p>}
    </div>
  )
}

export default UserDetails