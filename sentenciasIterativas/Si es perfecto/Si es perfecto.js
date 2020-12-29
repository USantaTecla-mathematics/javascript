let number = parseInt(prompt("Dame un numero: "));
let acu = 0;
for (let i = 1; i < number; i++) {
    if (number % i == 0) {
        acu += i;
    }
}
let msg = "El numero" + " " + number;
if (number == acu) {
    msg += " si ";
} else {
    msg += " no ";
}
alert(msg + "es perfecto");

