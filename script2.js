function calcularSoma() {
    
    var n1 = parseFloat(document.getElementById('num1').value);
    var n2 = parseFloat(document.getElementById('num2').value);
    var soma = n1 + n2;
    var resultadoFinal;

    if (soma > 20) {
      resultadoFinal = soma + 8;
    } else {
      resultadoFinal = soma - 5;
    }


    if (isNaN(resultadoFinal)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira números válidos.";
    } else {
        document.getElementById("resultado").innerHTML = "Resultado: " + resultadoFinal;
    }
}