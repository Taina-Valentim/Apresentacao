// Identifica as abas do HTML
const abas = document.querySelectorAll(".aba");

// Percorre todas as abas
abas.forEach(aba => {
    // Identifica o clique na aba
	aba.addEventListener("click", function() {

        // Verifica se a aba já está selecionada
        // Se estiver, a função termina
		if(aba.classList.contains("selecionada")){
			return;
		}

        selecionarAbas(aba);

        mostrarInformacoesDaAba(aba);
        
	})
});

function selecionarAbas(aba){
    // Desmarca a aba selecionada quando a otra é clicada
    const abaSelecionada = document.querySelector(".aba.selecionada");
    abaSelecionada.classList.remove("selecionada");

    // Marca a aba clicada como selecionada
    aba.classList.add("selecionada");
}

function mostrarInformacoesDaAba(aba){
    // Esconde o conteúdo não selecionado
    const informacaoSelecionada = document.querySelector(".informacao.selecionada");
    informacaoSelecionada.classList.remove("selecionada");

    // Mostra o conteúdo da aba selecionada
    const idDoElementoInformacaoDaAba = `informacao-${aba.id}`;
    const informacaoASerMostrada = document.getElementById(idDoElementoInformacaoDaAba);
    informacaoASerMostrada.classList.add("selecionada");
}