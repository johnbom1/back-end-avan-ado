// Overview de JavaScript

// console
console.log('Texto dentro de um log.')
console.warn('Isso é um alerta.')
console.error('Essa é uma mensagem de erro.')
// console é um objeto e log(), warn() e error() são métodos ou funções

// variáveis

// escopo global
let x = 10
if(true){
    // escopo local
    let x = 20
    console.log(x)
}
// é incorreto utilizar var depois do EC6

// tipos de dados

// string
const name = 'Victor'
console.log(name)
console.log(typeof name)

// number
let n = 10
console.log(n)
console.log(typeof n)
n = 15.99
console.log(n)
console.log(typeof n)

// bool
const isOpen = 0
console.log(isOpen)
console.log(typeof isOpen)

// null
const a = null
console.log(a)
console.log(typeof a)

// undefined 
let nada
console.log(nada)
console.log(typeof nada)
// deve-se evitar ter dados nessa configuração

// array
const linguagens = ['C++', 50, 'Python', 'JS']
console.log(linguagens[1])
console.log(typeof linguagens[1])

// object literals
// são usados quando a necessidade é de representar alguma entidade, como usuário, pessoa, produto
// possuem notação específica, similar à do JSON
const user = { 
    username:'vrc', 
    password:'123', 
    name:'Victor',
    age:31
}
console.log(user)
console.log(typeof user)

// métodos de string
const text = 'qualquer um'
// length para retornar o tamanho de uma string; obs.: length é um atributo, e não um método
console.log(text.length)
// split() para quebrar texto em um determinado conjunto de caracteres
const textToArray = text.split('quer')
console.log(textToArray[1])
// toUpperCase() para transformar todos os caracteres em maiúsculo
console.log(text.toUpperCase())
// indexOf() para procurar algo dentro de uma string
console.log(text.indexOf('abc'))
// charAt() para encontrar um char em uma posição específica dentro do vetor de caracteres que uma string é
console.log(text.charAt(0))
// slice() para encontrar um conjunto de caracteres num determinado intervalo do vetor da string
console.log(text.slice(2,10))

// mais sobre arrays
// podem ser heterogêneos, ou seja, ter dados de tipos diferentes
const chars = ['A', 'B', 'C', 'D', 88]
// length em um array retorna quantos dados estão lá dentro
console.log(chars.length)
// para chegar na última posição, tamanho-1 como índice
console.log(chars[chars.length-1])
// mesmo que seja declarado como const, dá pra manipular um array
chars[5] = 'F'
console.log(chars)
// pop para excluir do fim do array; shift para excluir do início do array
chars.pop()
chars.pop()
chars.pop()
// push para inserir no fim do array; unshift para inserir no início do array 
chars.push('B')
console.log(chars)