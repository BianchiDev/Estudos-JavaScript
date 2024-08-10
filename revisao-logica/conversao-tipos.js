let n1 = 10;
let n2 = "2";
n2 = Number(2); // Convertendo uma string em Number
let n3 = "12aababaccasddf";// Se o priméiro caracter for em número o parseInt converte, se não terá o erro NaN
n3 = parseInt(n3)
let n4 = 2;

n5 = 11;
n5 = n5.toString();// Converte um número em string.
console.log(n5, typeof n5 + "\n");




console.log(n1 * n2, typeof n1, typeof n2 + "\n");
console.log(n1 / n2, typeof n1, typeof n2 + "\n");
console.log(n1 + n2, typeof n1, typeof n2 + "\n");
console.log(n1 - n2, typeof n1, typeof n2 + "\n");

console.log(n3 + n4, typeof n3, typeof n4 + "\n");


// Comando para rodar no terminal Ctrl + Alt + N