function isEven(value) {
    return value % 2 == 0;
}
let number = parseInt(prompt("Dame un numero: "));
let answer;
if (isEven(number)) {
    answer = "SI";
} else {
    answer = "NO";
}
alert(number + " " + answer + " es par.");

