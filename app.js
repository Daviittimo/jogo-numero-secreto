let ListadeNumerosSorteados = [];
let numeroLimite = 10; 
let numeroSecreto = gerarNumeroAletorio();
let tentativas = 1;  

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; 
}

function exibirMensagemInicial() {
    exibirTextoNaTela("h1","Jogo do numero secreto");
    exibirTextoNaTela("p", "Escolha um numero de 1 a 10");
}

exibirTextoNaTela("h1","Jogo do numero secreto");
exibirTextoNaTela("p", "Escolha um numero de 1 a 10");

function verificarChute(){
    let chute = document.querySelector("input").value;
    
    if(chute == numeroSecreto){
        exibirTextoNaTela("h1","Acertou !");
        let palavraTentativas = tentativas > 1 ? "tentaivas":"tentativa";
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} com ${palavraTentativas}! `;
        exibirTextoNaTela("P",mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else{
        if(chute > numeroSecreto) {
            exibirTextoNaTela("p","O número secreto é menor");
        } else{
            exibirTextoNaTela("p","o número secreto é maior");
        }
        tentativas ++;
        limparCampo();
    }
}

function gerarNumeroAletorio() {
  let numeroEscolhido = parseInt (Math.random()*numeroLimite+1);
  let quantidadeDeElementosNaLista = ListadeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        ListadeNumerosSorteados = [];
    }

  if(ListadeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAletorio(); 
  } else {
     ListadeNumerosSorteados.push(numeroEscolhido);
     console.log(ListadeNumerosSorteados);
     return numeroEscolhido; 
     
  }
}

function limparCampo() {
    chute = document.querySelector("input"); 
    chute.value = ""
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAletorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled",true);
}
