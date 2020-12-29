let number = parseInt(prompt("Dame un numero: "));
let msg = "El numero " + number + " y ";
let digits = number;
let inverse = 0;
do {
    inverse = inverse * 10 + digits % 10;
    digits = parseInt(digits / 10);
} while (digits > 0);
msg += inverse + " ";
if (number == inverse) {
    msg += "SI";
} else {
    msg += "NO";
}
alert(msg + " son palidromos");

