import { useState } from 'react';

function AppState() {
  const [tarefas, setTarefas] = useState([
    'Pagar a conta de luz',
    'Estudar React JS',
  ]);
  const [input, setInput] = useState('');

  function handleRegister(e) {
    e.preventDefault();

    setTarefas([...tarefas, input]);
    setInput('');
  }

  return (
    <div>
      <h1>Cadastro de Tarefas</h1>
      <form onSubmit={handleRegister}>
        <label>Nome da tarefa:</label>
        <br />
        <input
          placeholder="Digite uma tarefa"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <br />

        <button type="submit">Registrar</button>
      </form>
      <br />
      <br />
      <div>
        <ul>
          {tarefas.map((tarefa) => (
            <li>{tarefa}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
