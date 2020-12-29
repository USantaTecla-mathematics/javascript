let table = parseInt(prompt("Dame un numero [1-10]: "));
let times = 0;
do {
    times++;
    alert(table + " * " + times + " = " + (table * times));
} while (times < 10);
