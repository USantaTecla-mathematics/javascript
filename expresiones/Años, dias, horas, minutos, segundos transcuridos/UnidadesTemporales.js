let day1 = parseInt(prompt("Dia de la primera fecha [1-31]: "));
let month1 = parseInt(prompt("Mes de la primera fecha [1-12]: "));
let year1 = parseInt(prompt("Año de la primera fecha: [1-2020]"));
let day2 = parseInt(prompt("Dia de la segunda fecha [1-31]: "));
let month2 = parseInt(prompt("Mes de la segunda fecha [1-12]: "));
let year2 = parseInt(prompt("Año de la segunda fecha: [1-2020]"));

let days1 = (year1 - 1) * 360 + (month1 - 1) * 30 + day1;
let days2 = (year2 - 1) * 360 + (month2 - 1) * 30 + day2;
let allDays = days2 - days1;

alert(parseInt(allDays / 360) + " años transcuridos");
alert(parseInt(allDays / 30) + " meses transcuridos");
alert(allDays + " dias transcuridos");
alert(allDays * 24 + " horas transcuridos");
alert(allDays * 24 * 60 + " minutos transcuridos");
alert(allDays * 24 * 60 * 60 + " segundos transcuridos"); 

