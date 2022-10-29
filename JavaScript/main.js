var x = 10
var y = 15
var z = x + y

console.log(z); // -- permite outra atribuicao a variavel
// ---
let a = 5
console.log(a);
// ---
const r = 45;
console.log(r);
const r = 54 // --- nao permite outra atribuicao, assim como o let

f = 47;
console.log(f);
// ---- declaracao igual a var

// ----------- operadores
7 === 7 //-- compatador de igualdade de valor e tipo de dados


// swich case

// for loop

for (let i = 0, i < 10; i++)
    {
        console.log(i);
    }

// loop for of/in - similar in py
for (let x of letras)
    {
        console.log(x); // printa a array em letras 1 apos outra
    }

    // while

while (i < 10)
    {
        console.log("NUmber is: " + i);
        i++;
    }
    
// do-while
j = 0;
do {
    console.log("Number is:" + j)
} while (j < 10)

/* Crie uma página com HTML com as seguintes especificações:

·      Crie um arquivo .js e link na página;

·      Crie uma condição para verificar se o número é par ou inpar;

·      Crie uma condição com switch para verificar o mês do ano;

·      Crie um loop for para contar de um até 50;

·      Crie um loop While para contar de um até 50. */

// strings

nome = "jose";
var n = "jose";
let texto = "jose";
const t = "jose";

// methods
console.log(alfabeto.lenght);
console.log(alfabeto.slice(3, 7));
.substring(3, 7)

//search

let str1 = "Soul Code Academy";
console.log(str1.indexOf("Code"));
console.log(str1.lastIndexOf("Code"));
console.log(str1.search("Code"));
let str2 = "cidade, equidade, oportunidade";
console.log(str2.match(/ade/g));
console.log(str1.includes("Academy"));
console.log(str1.startsWith("Code"));

// templates

let text2 = `Este é meu 'amigo' "José"`. console.log(text2); // usando crase
let text3 = // crase permite quebra
`Esta é
uma string
com quebra
de linha
`; 
console.log(text3);
let nome = "José";
let sobrenome = "Magalhães";
let text4 = `Bem vindo ${nome} ${sobrenome}!`;
console.log(text4);

// arrays
const cars = ["uno", 'fiat', 'gol']
console.log(cars);
const cars2 = [];
cars2[0] = 'gol';

// metodos
.pop() // remove ultimo elemento
.push(elemento) //remove elemento
.shift() //remove ultimo elemento

//sort
const frutas = ["Uva", "Manga", "Abacate", "Cereja"];
frutas.sort();
console.log(frutas.reverse());
const num = [40, 20, 10, 50, 100, 1];
console.log(num.sort(function(a, b){return a - b})); // sort only by first number, add function to order it

//iteration
let nomes = ['maria', 'josé', 'joão'];
nomes.forEach(function(nome){
    console.log(nome);
});
//--------
let numeros = [1, 2, 3];
let dobro = numeros.map(function(numero){
    return numero * 2;
});
console.log(numeros);
console.log(dobro);
// -------
let numbers = [1, 2, 3, 4, 5, 6];
let total = numbers.reduce(function(total, numero){ return total + numero;
}, 0); console.log(total);

// const
const cars = ["Fiat", "Mercedes", "Audi"];
//cars ["Toyota", "Volvo", "Camaro"]; - cannot assgin using variable again
cars[0] = "Toyota"; // adds to the 0 position of array
cars.push("Fusca"); // adds to the end of array
console.log(cars);