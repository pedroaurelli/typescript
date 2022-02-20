// sempre que eu quero tipar algo, colocar : tipo
// Inferencia x annotation

// annotation - explicitamente o tipo definido
let x: number = 10

// erro do TS, não posso colocar string em um tipo number
// x = 'test'
console.log(x)

// inferencia - ja esta automatico o tipo
let y = 12
// y = 'ola'


// Tipos básicos
let FirstName: string = 'Pedro'
let age: number = 30
let isAdmin: boolean = true
let myNumbers: number[] = [1, 2, 3]
let myParents: string[] = ['abc', 'bcd']

// o ts ja indetifica o myNumbers como array automaticamente e me
// da seus métodos e propriedades
myNumbers.push(5)
console.log(myNumbers)


//Tupla
// um molde de como a variavel deve ficar/ receber os valores
// se o valor não coincidir com o tipo, ele vai alertar um erro
let myTupla: [number, string, string[]] = [5, 'test', ['abc', 'bcd']]


//Object literals
// tipar a propriedade que um objeto deve receber
// UTILIZAR O ANY É UMA MÁ PRÁTICA!!
// {prop: value}
const user: {name: string, age: number, job: any} = {
  name: 'Pedro',
  age: 19,
  job: 'Developer'
}

console.log(user.name)


// Union Type
// caso o meu valor receba mais de dois tipos posso usar o union type
// evitar ao máximo usar o any

let id: string | number = '10dadw1dd568ds4d11'
id = 1
// id = true - retorna erro


// Type
// definir um padrão para a tipagem, ao invés de ficar colocando
// annotation na frente toda hora

type MyIdType = number | string

let useId: MyIdType = '1f221fg'
let userId = 11231

let shirtId: MyIdType = '4d4wa5das42d'

let productId: MyIdType = 21321


// Enum
/* enumerar uma coleção, e consigo retornar esses dados de uma maneira mais simples
 não preciso ficar escrevendo toda hora uma propriedade, e ja define um padrão
 ex:

 {
  name: 'camiseta'
  size: 'pequeno'
},
{
  name: 'camiseta gola v'
  size: 'pequeniniha'
},
{
  name: 'regata azul',
  size: 'M'
}

// o size poderia ser um padrão ja que é repetido varias vezes,
para não ter futuros problemas.
*/
enum Size {
  P = 'pequeno',
  M = 'médio',
  G = 'grande',
  GG = 'Extra grande'
}

const camisa = {
  name: 'Camiseta branca',
  size: Size.M
}

const regata = {
  name: 'Regata verde',
  size: Size.GG
}

console.log(camisa, regata)


// Literal Types
// determinar um valor como um tipo
// apesar de ser um let, não consigo mudar o valor para outro a não ser
// o definido!!
let teste: 'autenticado' | null
// teste = 'outroValor' - erro

teste = 'autenticado'
teste = null


// Funções
// tipar sempre os argumentos que são aceitos na minha função
function sum (a: number, b:number){
  return a + b
}

console.log(sum(5, 6))
// console.log(sum('60', true)) - não vai

// posso tipar o retorno da função também
// colocando : antes de abrir a função {...

function sayHello(name: string): string{
  return `Hello, ${name}, welcome to TypeScript!`
  // return true - reclama com um erro
}

// quando a função nao retorna nada, coloco o void
function retornaNada(name: string): void{
  console.log(`${name}, Esse é o void, ele não retorna nada`)
}

console.log(sayHello('Pedro'))


// Greeting
// quando o argumento não é obrigatório
// passo o ? para o argumento
function greeting(name: string, sobrenome?: string): void{
  if(sobrenome){
    console.log(`Olá ${name} ${sobrenome}`)
  } else {
    console.log(`Olá ${name}`)
  }
}

greeting('pedro', 'aureliano')


// narrowing
// checagem dos tipos a partir do typeof
function doSomething(info: number | boolean){
  if(typeof info === 'number'){
    console.log(`o numero é ${info}`)
  }
  console.log(`não foi passado um numero`)
}

doSomething(65)


// generics
// o tipo de dado não importa! mas eu quero que esse dado não seja any
// quando tenho algo que não esta definido por um tipo, mas eu preciso que ele aceite
// varios tipos, geralmente se usa o generics
// <T> é tipo genérico
function showArraysItens<T>(arr: T[]){
  return (
    arr.forEach(item => {
      console.log(`item: ${item}`)
    })
  )
}

showArraysItens(['dwada', 'kljklj', 4545])


// classes
// passo a tipagem no meu constructor
// passo as propriedades antes do constructor

class User {
  name
  year
  isAdmin

  constructor(name: string, year: number, isAdmin: boolean){
    this.name = name,
    this.year = year,
    this.isAdmin = isAdmin
  }

  showUserName(){
    console.log(`o nome do usuário é ${this.name}`)
  }
}

const pedro = new User('Pedro', 2022, true)
console.log(pedro)
pedro.showUserName()


// cnstructor decorators
//  é uma função - mais complexo

function BaseParams(){
  return function<T extends {new(...args: any[]): {}}>(constructor: T){
    return class extends constructor {
      id = Math.random()
      createdAt = new Date()
    }
  }
}

@BaseParams()
class Person {
  name

  constructor(name: string){
    this.name = name
  }
}

const Pedrao = new Person('Pedrao')
console.log(Pedrao)
