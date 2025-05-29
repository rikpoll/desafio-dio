let jogadorNome='Heroi';
let jogadorPartidasGanhas=32;
let jogadorPartidasPerdidas=11;
let total;
let nivel;

function calculaTotal(g,p) {
    return g-p;
}

function calculaNivel(p) {
    switch (true){
        case total > 100:
            nivel='Imortal';
            break;
        case total > 90:
            nivel='Lendario';
            break;
        case total > 80:
            nivel='Diamante';
            break;
        case total > 50:
            nivel='Ouro';
            break;
        case total > 20:
            nivel='Prata';
            break;
        case total > 10:
            nivel='Bronze';
            break;
        case total > 1:
            nivel='Ferro';
            break;
        default:
            nivel='Jogador Morto';
    }
}

function main () {
    total=calculaTotal(jogadorPartidasGanhas, jogadorPartidasPerdidas);
    calculaNivel(total);
    console.log(`O Herói "${jogadorNome}" tem ${total} Vitórias. Está no Nível ${nivel}.`);
}

main();