function isPerfect(number) {
    let acu = 0;
    for (let i = 1; i < number; i++) {
        if (number % i == 0) {
            acu += i;
        }
    }
    return number == acu;
}

let number = parseInt(prompt("Dame un numero: "));
let answer = "NO";
if (isPerfect(number)) {
    answer = "SI";
}
alert("El numero" + " " + number + " " + answer
    + " es perfecto");

for (let i = 1; i <= 1000; i++) {
    if (isPerfect(i)) {
        alert(i);
    }
}