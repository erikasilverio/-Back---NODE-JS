// const modulo = require("./module");

// const suma = modulo.sumar(4, 6);
// console.log(`La suma es: ${suma}`);

// const resta = modulo.restar(4, 6);
// console.log(`La suma es: ${resta}`);


//------------------OTRA MANERA DE HACER !!!! -----------------------------

const {sumar, restar} = require("./module");

const suma = sumar(4, 6);
console.log(`La suma es: ${suma}`);

const resta = restar(4, 6);
console.log(`La suma es: ${resta}`);



