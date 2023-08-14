const Challenge = () => {
    
    const num1 = 10;
    const num2 = 5;

    return (
        <div>
            <h1>Primeiro valor é {num1}, segundo valor é {num2}.</h1>
            <button onClick={() => console.log(num1 + num2)}>Somar!</button>
        </div>
    )
}

export default Challenge;