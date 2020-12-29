function propertyLog(number, meet, property) {
    let answer = "NO";
    if (meet) {
        answer = "SI";
    }
    alert("El número " + number + " " + answer + " es " + property + ".");
}
function isEven(value) {
    return value % 2 == 0;
}
function inverse(number) {
    let inverso = 0;
    do {
        inverso = inverso * 10 + number % 10;
        number = parseInt(number / 10);
    } while (number > 0);
    return inverso;
}

function isPalindrome(number) {
    return number == inverse(number);
}
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
propertyLog(number, isEven(number), "par");
propertyLog(number, isPerfect(number), "perfecto");
propertyLog(number, isPalindrome(number), "palidromo");