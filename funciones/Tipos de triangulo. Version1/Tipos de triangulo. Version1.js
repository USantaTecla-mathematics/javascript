function getMaximum(x, y, z) {
    let mayor;
    if (x >= y) {
        mayor = x;
    } else {
        mayor = y;
    }
    if (z >= mayor) {
        mayor = z;
    }
    return mayor;
}
function getIsTriangle(x, y, z) {
    let maximum = getMaximum(x, y, z);
    return maximum < (x + y + z) - maximum;
}
function getTriangleType(x, y, z) {
    if (x == y && y == z) {
        return "equilatero";
    } else if (x == y || y == z || z == x) {
        return "isosceles";
    } else {
        return "escaleno";
    }
}
let a = parseInt(prompt("Dame la longitud de un lado del triangulo: "));
let b = parseInt(prompt("Dame la longitud del segundo lado del triangulo: "));
let c = parseInt(prompt("Dame la longitud del tercer lado del triangulo: "));
let msg = "Los lados " + a + ", " + b + " y " + c + " ";
let isTriangle = getIsTriangle(a, b, c);
if (!isTriangle) {
    msg += "NO ";
}
msg += "forman un triangulo ";
if (isTriangle) {
    msg += getTriangleType(a, b, c);
}
alert(msg);