import { useState } from 'react';
import Nome from './components/Nome';

function App() {
  const [aluno, setAluno] = useState('Nome');
  const [counter, setCounter] = useState(0);

  function handleChangeName(nome) {
    setAluno(nome);
  }

  return (
    <>
      <h2>Componente App</h2>
      <h3>Olá {aluno}</h3>
      <button onClick={() => handleChangeName('Camila')}>Mudar Nome</button>
      <Nome aluno="Helder Flausino" idade={38} />

      <button onClick={() => setCounter((prev) => prev - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
    </>
  );
}

export default App;
