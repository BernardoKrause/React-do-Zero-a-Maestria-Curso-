const Container = ({children, myValue}) => {
  return (
    <div>
        <h2>Este é o título do container</h2>
        {children}
        <p>{myValue}</p>
    </div>
  )
}

export default Container