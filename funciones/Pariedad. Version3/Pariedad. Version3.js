function isEven(value) {
    return value % 2 == 0;
}
let number = parseInt(prompt("Dame un numero: "));
if (isEven(number)) {
    alert("El número " + number + " SI es par.");
} else {
    alert("El número " + number + " NO es par.");
}


