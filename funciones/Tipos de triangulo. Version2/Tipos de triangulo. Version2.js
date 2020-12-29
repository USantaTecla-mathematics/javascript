function getMaximum(x, y, z) {
    if (x >= y && x >= z) {
        return x;
    } else if (y >= x && y >= z) {
        return y;
    } else {
        return z;
    }
}
function getIsTriangle(x, y, z) {
    let maximum = getMaximum(x, y, z);
    return maximum < (x + y + z) - maximum;
}
function getTriangleType(x, y, z) {
    if (x == y) {
        if (x == z) {
            return "equilatero";
        } else {
            return "isosceles";
        }
    } else {
        if (y == z) {
            return "isosceles";
        } else {
            return "escaleno";
        }
    }
    return undefined;
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


