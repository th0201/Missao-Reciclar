/* =========================================
   INICIAR JOGO
========================================= */

function iniciarJogo() {

    document.getElementById("telaInicial").style.display = "none";

    document.getElementById("telaMapa").style.display = "block";

}


/* =========================================
   VOLTAR PARA A TELA INICIAL
========================================= */

function voltarInicio() {

    document.getElementById("telaMapa").style.display = "none";

    document.getElementById("telaInicial").style.display = "block";

}


/* =========================================
   ABRIR MISSÃO
========================================= */

function abrirMissao(regiao) {

    const painel = document.getElementById("painelMissao");

    const titulo = document.getElementById("tituloMissao");

    const texto = document.getElementById("textoMissao");

    const imagem = document.getElementById("imagemPersonagem");


    if (regiao === "mar") {

        titulo.textContent = "Missão do Tico";

        texto.textContent =
            "Ajude o Tico a proteger o mar e retirar o lixo que está prejudicando os animais.";

        imagem.src = "imagens/tico.png";

    }


    else if (regiao === "cidade") {

        titulo.textContent = "Missão da Lila";

        texto.textContent =
            "Ajude a Lila a deixar a cidade mais limpa, separando corretamente os resíduos.";

        imagem.src = "imagens/lila.png";

    }


    else if (regiao === "floresta") {

        titulo.textContent = "Missão do Beto";

        texto.textContent =
            "Ajude o Beto a proteger a floresta contra o descarte incorreto de lixo.";

        imagem.src = "imagens/beto.png";

    }


    else if (regiao === "rio") {

        titulo.textContent = "Missão da Nina";

        texto.textContent =
            "Ajude a Nina a limpar o rio e impedir que o lixo contamine a água.";

        imagem.src = "imagens/nina.png";

    }


    else if (regiao === "jardim") {

        titulo.textContent = "Missão da Mel";

        texto.textContent =
            "Ajude a Mel a cuidar do jardim e manter o ambiente limpo para as abelhas.";

        imagem.src = "imagens/mel.png";

    }


    painel.style.display = "flex";

}


/* =========================================
   FECHAR MISSÃO
========================================= */

function fecharMissao() {

    document.getElementById("painelMissao").style.display = "none";

}


/* =========================================
   COMEÇAR MISSÃO
========================================= */

function comecarMissao() {

    alert("A missão vai começar! 🎮");

}
