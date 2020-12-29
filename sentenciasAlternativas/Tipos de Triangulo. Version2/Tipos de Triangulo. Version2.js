let a = parseInt(prompt("Dame la longitud de un lado del triangulo: "));
let b = parseInt(prompt("Dame la longitud del segundo lado del triangulo: "));
let c = parseInt(prompt("Dame la longitud del tercer lado del triangulo: "));
let mayor;
if (a >= b) {
    mayor = a;
} else {
    mayor = b;
}
if (c >= mayor) {
    mayor = c;
}
let esTriangulo = mayor < (a + b + c) - mayor;
let msg = "Los lados " + a + ", " + b + " y " + c;
if (!esTriangulo) {
    msg += " NO";
}
msg += " forman un triangulo";
if (esTriangulo) {
    if (a == b && b == c) {
        msg += "equilatero";
    } else if (a == b || b == c || c == a) {
        msg += "isosceles";
    } else {
        msg += "escaleno";
    }
}
alert(msg);