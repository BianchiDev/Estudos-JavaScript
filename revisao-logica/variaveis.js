//var, let, const

// var -> ES5 - CROSS-BROWSER
let teste =  "minha string"; // JavaScript é uma linguagem fracamente tipada.
teste = 30;
console.log(teste);

let teste1 =  "minha string"; // O Let não permite que a mesma variável seja novamente atribuido.
//let teste1 = 10; // comentando para não aparecer o erro. 
console.log(teste1);

var teste2 = "Minha string";
var teste2 = 40  // O var permite por ser de escopo global e isso é um perigo
console.log(teste2);

// "Let" é mais seguro que "Var",  pois não é possível reatribuir o valor a variável.
const teste4 = "Eu sou imutável";
console.log(teste4);


// Comando para rodar no terminal Ctrl + Alt + N