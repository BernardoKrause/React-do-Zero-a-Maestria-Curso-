const Events = () => {

    const handleMyEvent = (e) => {
        window.alert("Ativou o evento!")
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
        </div>
    )
}

export default Events