function isEven(value) {
    return value % 2 == 0;
}
let number = parseInt(prompt("Dame un numero: "));
let answer = "NO";
if (isEven(number)) {
    answer = "SI";
}
alert("El número " + number + " " + answer + " es par.");