let amount = parseInt(prompt("Dame una cantidad: "));
console.log("A devolver :" + " " + amount + " centimos");
let coins = parseInt(amount / 50);
alert(coins + ' monedas de 50 céntimos');
let rest50 = parseInt(amount % 50);
alert(parseInt(rest50 / 20) + ' monedas de 20 céntimos');
let rest20 = parseInt(rest50 % 20);
alert(parseInt(rest20 / 10) + ' monedas de 10 céntimos');
let rest10 = (rest20 % 10);
alert(parseInt(rest20 / 5) + ' monedas de 5 céntimos');
let rest5 = parseInt(rest10 % 5);
alert(parseInt(rest5 / 2) + ' monedas de 2 céntimos');
let rest2 = parseInt(rest5 % 2);
alert(parseInt(rest2 / 1) + " monedas de 1 céntimos")