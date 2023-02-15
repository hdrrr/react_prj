import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([
    'Estudar React JS',
    'Estudar JavaScript'
  ]);

  useEffect(()=>{
    const tarefasStorage = localStorage.getItem('@tarefas');
    
    if(tarefasStorage)
      setTarefas(JSON.parse(tarefasStorage));
  }, []);

  useEffect(()=>{
    localStorage.setItem('@tarefas', JSON.stringify(tarefas));
  }, [tarefas]);

  function handleTasks(e){
    e.preventDefault();
    if(input.trim() !== "")
      setTarefas([...tarefas, input]);
    setInput('');
  }

  return (
    <div id="container">
    <form onSubmit={handleTasks}>
      <label>Tarefas</label>
      <input type='text' placeholder='Digite uma tarefa' onChange={(e) => setInput(e.target.value)} value={input} /><br />
      <input type="submit" value="Cadastrar Tarefa" />
    </form>
    <h3>Tarefas</h3>
    <ul>
      {tarefas.map(tarefa => (
        <li key={tarefa}>{tarefa}</li>
        ))}
    </ul>
    </div>          
  );
}

export default App;
