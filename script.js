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


function renderizarBaralho(){

    const tabuleiro = document.querySelector('.tabuleiro');

    for(let i = 0; i < baralho.length; i++){
        let cartaTemplate = `
            <li class="carta">
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