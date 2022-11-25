const Events = () => {

    const handleMyEvent = (e) => {
        window.alert("Ativou o evento!")
    }

    const renderSomething = (x) => {

        if(x) {
            return <h1>Rendezirando isso!</h1>
        } else {
            return <h1>Também posso renderizar isso!</h1>
        }

    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou!")}>Clique aqui também!</button>
                <button onClick={() => {
                    if(true) {
                        console.log("Isso não deveria existir =)")
                    }
                }}>Clique aqui, por favor</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events