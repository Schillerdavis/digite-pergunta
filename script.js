function Perguntar(){
    let perg = document.querySelector('input#pergunta')
    if(perg.value == ''){
        alert('Por favor, digite sua pergunta')
    } else {
        let per = perg.value
        const respostas = [
            "Certeza!",
            "Não tenho tanta certeza.",
            "É decididamente assim.",
            "Não conte com isso.",
            "Sem dúvidas!",
            "Pergunte novamente mais tarde.",
            "Sim, definitivamente!",
            "Parece que sim",
            "O Palmeiras não tem mundial!",
            "Parece que você já sabe a resposta.",
            "Minha resposta é não.",
            "Você pode contar com isso.",
            "Melhor não te dizer agora.",
            "Absolutamente afirmativo",
            "A meu ver, sim.",
            "Não vá muito afoito nisso.",
            "Minhas fontes dizem não.",
            "Provavelmente.",
            "Preciso de mais tempo para processar essa pergunta...",
            "Não é possível prever agora.",
            "Perspectiva boa.",
            "As perspectivas não são tão boas.",
            "Sim.",
            "Concentre-se e pergunte novamente.",
            "Sinais apontam que sim.",
        ]
        const totalRespostas = respostas.length
        const numeroAleatorio = Math.floor(Math.random()*totalRespostas)
        resposta.innerHTML = `<p>${per}</p> <p><strong>${respostas[numeroAleatorio]}</strong></p>`
    }
}

