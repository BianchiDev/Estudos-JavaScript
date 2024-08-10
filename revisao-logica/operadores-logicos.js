let n1 = 10;
let n2 = 3;

console.log ("Operadores Aritiméticos")
console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);
console.log(n1 % n2 + "\n");


console.log ("Operadores de atribuição")
let n3 = 20
// n3 = n3 +15;
n3 += 2; // 20 + 2 == 22
console.log(n3);
n3 -= 2; // 22 - 2 == 20
console.log(n3);
n3 *= 3; // 20 * 3 == 60
console.log(n3);
n3 /= 2; //60 / 2 == 30
console.log(n3);
n3 **= 2; //60 ** 2 == 900
console.log(n3);
n3 %= 3; //60 % 3 == 0
console.log(n3 + "\n");


console.log("Incremento e Decremento" +"\n")

let i = 0;
console.log(i--); // Operador de decremento
i++;// -1   // operadore de incremento
i++;//  0   // operadore de incremento
i++;//  2   // operadore de incremento
console.log(i)

let idade = 21
let paisPresentes = false
let comproBilhete = false
const podeViajar =( idade >= 18 || paisPresentes) && comproBilhete; // precedendência de operadores.
console.log(`Pode viajar: ${podeViajar}  \n`)


n4 = 6
n5 = 8
n6 = 9
console.log(`Qual a média entre: ${n4}, ${n5}, ${n6}`);

let media = (n1 + n2 + n3)/ 3

console.log(`média: ${media}`)
// Comando para rodar no terminal Ctrl + Alt + N