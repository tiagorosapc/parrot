let qtdeCartas;

const cartas = [
    "bobrossparrot",
    "explodyparrot",
    "fiestaparrot",
    "metalparrot",
    "revertitparrot",
    "tripletsparrot",
    "unicornparrot"
];

const baralho = [];

let primeiraCarta, segundaCarta;

let jogadas = 0;
let acertos = 0;

function resetCartas(){
    primeiraCarta = undefined;
    segundaCarta = undefined;
}

function desvirarCartas(){
    primeiraCarta.classList.remove('virada');
    segundaCarta.classList.remove('virada');

     // resetar as cartas
     resetCartas();
}

function finalizarJogo(){
    if (acertos === baralho.length){
        alert(`Jogo Finalizado com ${jogadas} jogas`);
    }
}

function virarCarta(carta){
    
    if ( carta.classList.contains('virada')){
        return;
    }

    if ( primeiraCarta !== undefined && segundaCarta !== undefined ){
        return;
    }

    if ( primeiraCarta === undefined || segundaCarta === undefined){

        carta.classList.add('virada');
        jogadas++;

        if ( primeiraCarta === undefined ){
            primeiraCarta = carta;
        }else{
            if ( segundaCarta === undefined){
                segundaCarta = carta;

                // comparar as duas cartas
                if ( primeiraCarta.innerHTML === segundaCarta.innerHTML){
                    console.log('CARTAS SAO IGUAIS');
                    resetCartas();
                    acertos += 2;

                    finalizarJogo();
                }else{
                    // desvirarCartas
                    console.log('CARTAS SAO DIFERENTES');

                    setTimeout(desvirarCartas, 1000);                  

                }
            }
        }
        console.log(primeiraCarta);
        console.log(segundaCarta);

    }

}

function renderizarBaralho(){

    const tabuleiro = document.querySelector('.tabuleiro');

    for(let i = 0; i < baralho.length; i++){
        let cartaTemplate = `
            <li class="carta" onclick="virarCarta(this)">
                <div class='front-face face'>
                    <img src='imagens/front.png'>
                </div>
                <div class='back-face face'>
                    <img src='imagens/${baralho[i]}.gif'>
                </div>
            </li>  
        `;

        tabuleiro.innerHTML += cartaTemplate;
    }
}

function comparador() { 
	return Math.random() - 0.5; 
}

function iniciarJogo(){

    // criar o baralho
    for(let i = 0; i < (qtdeCartas/2) ; i++ ){
        let carta = cartas[i];
        baralho.push(carta);
        baralho.push(carta);
    }

    // embaralhar esse baralho
    baralho.sort(comparador);

    // distribuir as cartas no tabuleiro ( mostrar as cartas )
    renderizarBaralho()
}

function qtdeCartasInvalido(){
    if ( (qtdeCartas % 2 !== 0) || qtdeCartas < 4 || qtdeCartas > 14 || isNaN(qtdeCartas)) {
        return true;
    }else{
        return false;
    }
}

function perguntarQtdeCartas(){

    //qtdeCartas = Number( prompt('Com quantas cartas você quer jogar?') );
    qtdeCartas = 4;

    while( qtdeCartasInvalido() ){
        qtdeCartas = Number( prompt('Com quantas cartas você quer jogar?') );
    }

    iniciarJogo();

}
perguntarQtdeCartas();