//string, number(inter, floats), boolean
let minha_var = "minha string"
let _var = 10;
let minhavar2 = 'minha "string" com aspas duplas';
console.log(minhavar2);
var minhavar3 = `minha tamplate literal`;

let idade = 40;
let msg = `eu possuo ${idade} anos!`;
console.log(typeof msg, typeof idade, typeof minha_var," -- ", 20);

const n1 = 10;
const n2 = 1.1;
console.log(`O tipo de n1 é ${typeof n1} e seu valor é ${n1}`);
console.log(`O tipo de n1 é ${typeof n2} e seu valor é ${n2}`);


const isValid = false;
console.log(`isValid: ${isValid}`)

//let varTeste = undefined
let varTeste = null; // O null retorna um object o que é errado, mas não foi mudado para não quebrar código antigo.
console.log(varTeste); //Valor da minha variável é undefined
console.log(typeof varTeste); // Tipo da minha variável é undefined
varTeste = 20;
console.log(typeof varTeste); // Tipo da minha variável é number, pois o valor agora é 20


// Comando para rodar no terminal Ctrl + Alt + N