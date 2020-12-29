function sumDivisors(number) {
    let acu = 0;
    for (let i = 1; i < number; i++) {
        if (number % i == 0) {
            acu += i;
        }
    }
    return acu;
}

function areFriends(number1, number2) {
    return number1 == sumDivisors(number2)
        && number2 == sumDivisors(number1);
}

let number1 = parseInt(prompt("Dame un numero: "));
let number2 = parseInt(prompt("Dame un numero: "));
let answer = "NO";
if (areFriends(number1, number2)) {
    answer = "SI";
}
alert("Los números " + number1 + " y " + number2 + " " + answer + " son mumeros amigos");