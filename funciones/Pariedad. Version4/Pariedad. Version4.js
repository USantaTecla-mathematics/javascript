function isEven(value) {
    return value % 2 == 0;
}
let number = parseInt(prompt("Dame un numero: "));
alert("El número " + number + " " + (isEven(number) ? "SI" : "NO") + " es par.");