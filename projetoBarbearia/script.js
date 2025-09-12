const mensagemPrincipal = document.getElementById('mensagem-centro');
const imagemTelasMenores = document.getElementById('imagemTelasMenores');

function atualizarMensagem() {
    const larguraTela = window.innerWidth;
    if (larguraTela < 990) {
        imagemTelasMenores.style.backgroundImage = "url('img/fundoResponsivo.png')";
    } else {
        imagemTelasMenores.style.backgroundImage = ""; // Remove or reset for larger screens
    }
}
