"use strict";
let x = 10;
console.log(x);
let y = 12;
let FirstName = 'Pedro';
let age = 30;
let isAdmin = true;
let myNumbers = [1, 2, 3];
let myParents = ['abc', 'bcd'];
myNumbers.push(5);
console.log(myNumbers);
let myTupla = [5, 'test', ['abc', 'bcd']];
const user = {
    name: 'Pedro',
    age: 19,
    job: 'Developer'
};
console.log(user.name);
let id = '10dadw1dd568ds4d11';
id = 1;
let useId = '1f221fg';
let userId = 11231;
let shirtId = '4d4wa5das42d';
let productId = 21321;
var Size;
(function (Size) {
    Size["P"] = "pequeno";
    Size["M"] = "m\u00E9dio";
    Size["G"] = "grande";
    Size["GG"] = "Extra grande";
})(Size || (Size = {}));
const camisa = {
    name: 'Camiseta branca',
    size: Size.M
};
const regata = {
    name: 'Regata verde',
    size: Size.GG
};
console.log(camisa, regata);
let teste;
teste = 'autenticado';
teste = null;
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 6));
function sayHello(name) {
    return `Hello, ${name}, welcome to TypeScript!`;
}
function retornaNada(name) {
    console.log(`${name}, Esse é o void, ele não retorna nada`);
}
console.log(sayHello('Pedro'));
function greeting(name, sobrenome) {
    if (sobrenome) {
        console.log(`Olá ${name} ${sobrenome}`);
    }
    else {
        console.log(`Olá ${name}`);
    }
}
greeting('pedro', 'aureliano');
