//Desafio 2: Desenvolva uma calculadora que armazene em um objeto JSON o resultado das 4 operações básicas. Em outras palavras: crie um objeto calculadora, inicialize cada uma das operações da calculadora (que serão propriedades do objeto) com o resultado do processamento matemático vindo de duas variáveis e converta para um objeto JSON.


const n1 = 10
const n2 = 5
const calc = {
    soma: n1+n2,
    sub: n1-n2,
    mult: n1*n2,
    div: n1/n2
}

console.log(JSON.stringify(calc))