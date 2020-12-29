function showMultiplyTable(number) {
    for (let i = 1; i <= 10; i++) {
        alert(number + " * " + i + " = " + number * i);
    }
}

for (let i = 0; i < 10; i++) {
    showMultiplyTable(i);
}