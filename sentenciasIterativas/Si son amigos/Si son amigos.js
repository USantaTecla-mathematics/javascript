let number1 = parseInt(prompt("Dame un numero: "))
let number2 = parseInt(prompt("Dame un numero: "));
let acu = 0;
let acu2 = 0;

for (let i = 1; i < number1; i++) {
    if (number1 % i == 0) {
        acu += i;
    }
}
alert(acu);

for (let j = 1; j < number2; j++) {
    if (number2 % j == 0) {
        acu2 += j;
    }
}
alert(acu2);

let msg = number1 + " y " + number2 + " ";
if (number1 == acu2 && number2 == acu) {
    msg += "SI";
} else {
    msg += "NO";
}
alert(msg + " son mumeros amigos");

