import { useState } from 'react';

function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState(0);
  const [user, setUser] = useState({});

  function handleRegister(e) {
    e.preventDefault();

    setUser({
      nome,
      idade,
      email,
    });
    alert('Usuário registrado');
  }

  return (
    <div>
      <form onSubmit={handleRegister}>
        <label>Nome:</label>
        <br />
        <input
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <br />

        <label>Email:</label>
        <br />
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <label>Idade:</label>
        <br />
        <input
          placeholder="Idade"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />
        <br />

        <button type="submit">Registrar</button>
      </form>
      <br />
      <br />
      <div>
        <p>Bem-vindo: {user.nome}</p>
        <p>Idade: {user.idade}</p>
        <p>Email: {user.email}</p>
      </div>
    </div>
  );
}

export default App;
