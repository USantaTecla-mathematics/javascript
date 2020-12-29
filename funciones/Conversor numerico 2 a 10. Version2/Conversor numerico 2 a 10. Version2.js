function toDecimalValue(binary) {
    let numberRemaining = binary;
    let position = 0;
    let decimalNumber = 0;
    let currentNumber;
    while (numberRemaining > 0) {
        currentNumber = numberRemaining % 10;
        decimalNumber += currentNumber * 2 ** position;
        numberRemaining = parseInt(numberRemaining / 10);
        position++;
    }
    return decimalNumber;
}

let data = parseInt(prompt("Dame un valor: "));
alert(toDecimalValue(data));