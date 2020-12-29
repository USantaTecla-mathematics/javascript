let partial = parseInt(prompt("Nota parcial [1-10]: "));
let final = parseInt(prompt("Nota final [1-10]: "));
let practice = parseInt(prompt("Nota practica [1-10]: "));
let notaFinal = (final + practice) * 0.4 + partial * 0.2;
alert(notaFinal); 