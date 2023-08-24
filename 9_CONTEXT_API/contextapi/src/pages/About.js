// import { useContext } from "react";

// import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";
import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const About = () => {
  const { counter } = useCounterContext();

    // 5 - context mais complexo
    const {color, dispatch} = useTitleColorContext();

    // 6 - alterando contexto complexo
    const setTitleColor = (color) => {
      dispatch({ type: color })
    }

  return (
    <div>
      <h1 style={{color: color}}>Sobre</h1>
      <p>Valor do contador: {counter}</p>
      {/* 3 - alterando valor do contexto */}
      <ChangeCounter />
      {/* 6 - alterando contexto completo */}
      <div>
          <button onClick={() => setTitleColor("RED")}>Vermelho</button>
          <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  )
}

export default About;