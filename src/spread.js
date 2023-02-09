const primeiros = [1, 2, 3];
const numeros = [...primeiros, 4, 5, 10];

console.log(numeros);

const pessoa = {
  nome: 'Helder',
  idade: 30,
  cargo: 'analista de TI',
};

const novaPessoa = {
  ...pessoa,
  status: 'Ativo',
  cidade: 'São João del Rei',
};

console.log(novaPessoa);

function novoUsuario(info) {
  const dados = {
    ...info,
    status: 'ativo',
    codigo: '123456',
  };
  console.log(dados);
}

novoUsuario({ nome: 'Jose', sobrenome: 'Silva', cargo: 'Dev' });
