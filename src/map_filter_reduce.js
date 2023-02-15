const lista = ['Matheus', 'jose', 'Maria'];

lista.map((item, index) => {
    console.log(item);
    console.log(index);
})

const numeros = [5, 3, 2];

const total = numeros.reduce((acumulador, atual, index, original) => {
    console.log(`acumulador: ${acumulador}`);
    console.log(`atual: ${atual}`);
    console.log(`index: ${index}`);
    console.log(`original: ${original}`);

    return acumulador + atual;
})

console.log(total);

const listagem = [5, 3, 2, 'Helder',1];
const res = listagem.find((item) => {
    return item === 'Helder'
})

console.log(res);

nomes = ["Helder", "Camila", "Luísa"];

nomesPequenos = nomes.filter((item) => {
    return item.length <= 5;
});

console.log(nomesPequenos);