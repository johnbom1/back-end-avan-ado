// Overview de JavaScript

//console
console.log('Texto dentro de um log.')
console.error('Essa é uma mensagem de erro.')
console.warn('Isso é um alerta.')

//Variáveis
const name = 'Jonatan'
console.log(name)



let x = 10

if(true){
    let x = 20
}

console.log(x)


// tipos de dados

//string
const n = 'Jonatan'
console.log(n)
console.log(typeof n)

//number
let num = 10
console.log(num)
console.log(typeof num)
num = 15.99
console.log(num)
console.log(typeof num)

//boolean
const isOpen = true // 1 = true, 0 = false
console.log(isOpen)
console.log(typeof isOpen)

//null
const a = null
console.log(a)
console.log(typeof a)

//undefined
let nada
console.log(nada)
console.log(typeof nada)

//array
const linguagens = ['C++', 50, 'Java', 'Python', 'JS']
console.log(linguagens[0])
console.log(typeof linguagens[0])
console.log(linguagens[1])
console.log(typeof linguagens[1])

//object literals
const user = { 
    username: 'borja',
    password: 'senha',
    age: 30,
    name: 'Jonatan'
}

console.log(user)
console.log(typeof user)

//métodos de string
const text = 'qualquer um'
console.log(text.length)
//quebrar texto em um conjunto de caracteres
const textToArray = text.split(' ')
console.log(textToArray[0], textToArray[1])
console.log(text.toLocaleUpperCase())

//procurando algo dentro de uma string
console.log(text.indexOf('abc'))
console.log(text.indexOf('qualquer'))
console.log(text.charAt(0))
console.log(text.slice(0, 3))

//mais sobre arays

const chars = ['A', 'B', 'C']
console.log(chars.length)
console.log(chars[chars.length-1])
chars[5] = 'F'
console.log(chars)
chars.pop()
chars.pop()
console.log(chars)
chars.pop()
chars.pop()
chars.pop()
console.log(chars)
chars.unshift('B')
console.log(chars)




//pegando dados do form
// const formData = new FormData(document.querySelector('form'))
// const inputValue = formData.get("numero1")
// const inputValue2 = formData.get("numero1")
// console.log(inputValue)
// console.log(inputValue2)
