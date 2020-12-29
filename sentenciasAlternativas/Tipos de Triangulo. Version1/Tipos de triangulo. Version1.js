let a = parseInt(prompt("Dame la longitud de un lado del triangulo: "));
let b = parseInt(prompt("Dame la longitud del segundo lado del triangulo: "));
let c = parseInt(prompt("Dame la longitud del tercer lado del triangulo: "));
let mayor;
if (a >= b && a >= c) {
    mayor = a;
} else if (b >= a && b >= c) {
    mayor = b;
} else {
    mayor = c;
}
let esTriangulo = mayor < a + b + c - mayor;
let msg = "Los lados " + a + ", " + b + " y " + c;
if (!esTriangulo) {
    msg += " NO";
}
msg += " forman un triangulo";
if (esTriangulo) {
    if (a == b) {
        if (a == c) {
            msg += " equilatero";
        } else {
            msg += " isosceles";
        }
    } else {
        if (b == c) {
            msg += " isosceles";
        } else {
            msg += " escaleno";
        }
    }
}
alert(msg);