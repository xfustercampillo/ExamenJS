function _id(ident) {
    return document.getElementById(ident);
}

function factorial() {
    var entradaFactorial = _id("entradaFactorial").value;
    var operacion = "";
    var resultado = 1;

    if (entradaFactorial < 0) {
        alert('error');
    } else {
        for (var i = entradaFactorial; i > 0; i--) {
            resultado *= i;
            operacion += i;

            if (i > 1) operacion += "*";
        }
        _id("resultatFactorial").innerHTML = resultado;
        _id("operacionsFactorial").innerHTML = operacion;


    }

}

function calculaIVA() {

}

function canviaFons(tipus) {

    var colorFondo;
    var colorTexto;

    if (tipus == "random") {
        var red = Math.floor(Math.random() * 255);
        var blue = red;
        var green = red;

        colorFondo = "rgb(" + red + "," + green + "," + blue + ")";

            if (red < 95){

                colorTexto = "white";
            } else {
                colorTexto = "black";
            }

    } else if (tipus == "clear") { 
    colorFondo = "white";
    colorTexto = "black";
    }
    _id("cos").style.backgroundColor = colorFondo;
    _id("cos").style.color = colorTexto;
}
