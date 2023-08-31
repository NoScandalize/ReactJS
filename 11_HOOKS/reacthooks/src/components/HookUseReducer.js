import { useReducer, useState } from "react"

const HookUseReducer = () => {
    // 1 - começando com o useReducer
    const [number, dispath] = useReducer((state, action) => {
        return Math.floor(Math.random(state) * 10);
    }, 10)

    // 2 - avançando no useReducer
    const initialTasks = [
      {id: 1, text: 'Fazer alguma coisa'},
      {id: 2, text: 'Fazer outra coisa'}
    ]

    const taskReducer = (state, action) => {
      switch (action.type) {
        case "ADD":
          const newTask = {
            id: Math.random(),
            text: taskText
          };

          setTastText("");

          return [...state, newTask]
        case 'DELETE':
          return state.filter((task) => task.id !== action.id)
        default:
          return state;
      }
      
      
    }

    const [taskText, setTastText] = useState('');
    const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);

    const handleSubmit = (e) => {
      e.preventDefault();

      dispatchTasks({type: 'ADD'})
    }

    const removeTask = (id) => {
      dispatchTasks({type: "DELETE", id: id})

    }


  return (
    <div>
        <h2>useReducer</h2>
        <p>Número: {number}</p>
        <button onClick={dispath}>Alterar número</button>
        <h3>Tarefas:</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={(e) => setTastText(e.target.value)} value={taskText} />
          <input type="submit" value="Enviar" />
        </form>
        {tasks && tasks.map((task) => (
          <li key={task.id} >
            {task.text}
            <button onClick={() => removeTask(task.id)}>Delete</button>
          </li>
        ))}
        <hr />
    </div>
  )
}

export default HookUseReducer;