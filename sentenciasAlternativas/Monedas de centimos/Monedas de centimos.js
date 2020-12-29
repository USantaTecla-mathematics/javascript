let amount = parseInt(prompt("Dame una cantidad de centimos: "));
let msg = "A devolver :" + " " + amount + " centimos: \n";
let coins = parseInt(amount / 50);
if (coins > 0) {
  msg += coins + " monedas de 50 centimos\n";
}
amount -= coins * 50;

coins = parseInt(amount / 20);
if (coins > 0) {
  msg += coins + " monedas de 20 centimos\n";
}
amount -= coins * 20;

coins = parseInt(amount / 10);
if (coins > 0) {
  msg += coins + " monedas de 10 centimos\n";
}
amount -= coins * 10;

coins = parseInt(amount / 5);
if (coins > 0) {
  msg += coins + " monedas de 5 centimos\n";
}
amount -= coins * 5;

coins = parseInt(amount / 2);
if (coins > 0) {
  msg += coins + " monedas de 2 centimos\n";
}
amount -= coins * 2;

coins = parseInt(amount / 1);
if (coins > 0) {
  msg += coins + " monedas de 1 centimos\n";
}
alert(msg);

