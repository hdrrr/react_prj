// qdo eu não sei a qtdade de parametros
function convidados(...nomes) {
  console.log('Sejam bem-vindos todos convidados');
  console.log(nomes);
}

convidados('Helder', 'Edson', 'Gleive');

const sorteador = (...numeros) => {
  console.log(numeros);
  const sorteado = Math.floor(Math.random() * numeros.length);

  return numeros[sorteado];
};

console.log(sorteador(1, 4, 6, 99));
