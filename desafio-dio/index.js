let heroi='heroi';

const lerentrada = require('node:readline');
const entrada = lerentrada.createInterface({
  input: process.stdin,
  output: process.stdout,
});

entrada.question(`Digite o nome do herói: `, (name) => {
  entrada.question(`Quantos pontos: `, (pontos) => {
    switch (true) {
        case pontos > 10000:
            console.log(`O Herói ${name} tem ${pontos} pontos. Nível Radiante.`);
            break;
        case pontos > 9000:
            console.log(`O Herói ${name} tem ${pontos} pontos. Nível Imortal.`);
            break;
        case pontos > 8000:
            console.log(`O Herói ${name} tem ${pontos} pontos. Nível Ascendente.`);
            break;
        case pontos > 7000:
            console.log(`O Herói ${name} tem ${pontos} pontos. Nível Platina.`);
            break;
        case pontos > 6000:
            console.log(`O Herói ${name} tem ${pontos} pontos. Nível Ouro.`);
            break;
        case pontos > 2000:
            console.log(`O Herói ${name} tem ${pontos} pontos. Nível Prata.`);
            break;
        case pontos > 1000:
            console.log(`O Herói ${name} tem ${pontos} pontos. Nível Bronze.`);
            break;
        case pontos > 1:
            console.log(`O Herói ${name} tem ${pontos} pontos. Nível Ferro.`);
            break;
        default:
            console.log("O herói morreu")
    }
    entrada.close();
  });
});