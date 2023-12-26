function mostrarMensagem() {
    var mensagem = "Feliz aniversário Vic, agradeço sinceramente por se tornar minha amiga (apesar de eu ter te perseguido na internet pra tentar ser seu amigo, funcionou) você é a melhor amiga que conheci este ano, não, em muitos anos, Eu gostaria muito de conversar com você pessoalmente, interagir mais porque você é muito legal, atualmente você e o Allan são as duas únicas pessoas em que confio para falar qualquer coisa e temos o mesmo tipo de humor, é muito mais fácil conversar e ter vários assuntos aleatórios. Mal posso esperar para irmos ao shopping assistir um filme de terror e, se der tudo certo, a gente ir ao Canadá juntos, eu adoraria, não quero ir sozinho.";
    
    document.getElementById("mensagem").innerHTML = mensagem;
    document.getElementById("mensagem").classList.remove("hidden");
}
function mostrarMensagem() {
    var mensagem = "Feliz aniversário Vic, agradeço sinceramente por se tornar minha amiga (apesar de eu ter te perseguido na internet pra tentar ser seu amigo, funcionou) você é a melhor amiga que conheci este ano, não, em muitos anos, Eu gostaria muito de conversar com você pessoalmente, interagir mais porque você é muito legal, atualmente você e o Allan são as duas únicas pessoas em que confio para falar qualquer coisa e temos o mesmo tipo de humor, é muito mais fácil conversar e ter vários assuntos aleatórios. Mal posso esperar para irmos ao shopping assistir um filme de terror e, se der tudo certo, a gente ir ao Canadá juntos, eu adoraria, não quero ir sozinho. Espero que aconteca tudo de bom na sua vida e você continue sendo essa pessoa maravilhosa e engraçada que é, Muito Obrigado.";

    document.getElementById("mensagem").innerHTML = mensagem;
    document.getElementById("mensagem").classList.remove("hidden");

    document.getElementById("cliqueAquiBtn").classList.add("hidden"); // Oculta o botão

    // Substitua "caminho/para/seu/arquivo.gif" pelo caminho real do seu GIF
    document.getElementById("gif").src = "kiss-emoji-29.gif";
    document.getElementById("gif").classList.remove("hidden"); // Exibe o GIF

    document.getElementById("infoDePara").classList.remove("hidden"); // Exibe a informação "De: Cris Para: Vic"

    // Inicia a reprodução da música
    document.getElementById("musica").play();
}
