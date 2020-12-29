var price = parseInt(prompt("Dame una cantidad: "));
var pricePlusIva = price * 1.21;
var discount = pricePlusIva * 0.25;
price = pricePlusIva - discount;
alert('El precio con IVA es de ' + pricePlusIva);
alert('El descuento es de ' + discount + ' sobre el precio con IVA');
alert('El precio con el descuento es ' + price);