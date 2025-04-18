function calcular() {

    var basemaior = parseFloat(document.getElementById("basemaior").value);
    var basemenor = parseFloat(document.getElementById("basemenor").value);
    var altura = parseFloat(document.getElementById("altura").value);

    var areaTrapezio = ((basemaior + basemenor)*altura)/2 

    if (isNaN(basemaior) || isNaN(basemenor) || isNaN(altura)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira um numero"
    } else {
        document.getElementById("resultado").innerHTML = "A área do trapézio é de: " + areaTrapezio;
    }
}