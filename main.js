var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
    var chute = parseInt(document.getElementById("valor").value);
    var resultado = document.getElementById("resultado");
    if (chute == numeroSecreto) {
        resultado.innerHTML = "Parabéns, você acertou!";
    } else if (chute < 0 || chute > 10) {
        console.log("Por favor, insira um valor entre 0 a 10");
        resultado.innerHTML = "Por favor, insira um valor entre 0 a 10";
    }  
    else {
        console.log("Errou");
        resultado.innerHTML = "Errou, tente novamente";
    }

}