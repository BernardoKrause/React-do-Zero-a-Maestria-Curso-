import './StartScreen.css'

const StartScreen = ({startGame}) => {
  return (
    <div className="start">
        <h1>Secret World</h1>
        <hr />
        <p>Clique no botão abaixo para começar a jogar</p>
        <button onClick={startGame} >Começar o jogo</button>
    </div>
  )
}

export default StartScreen