//Desafio 1: Armazene 5 dados numéricos em um vetor. Em seguida, copie para um objeto com as propriedades n1, n2, n3, n4 e n5. Utilize destructuring para copiar os valores para 5 variáveis. Construa um objeto JSON com os valores das variáveis.


const vetor = [1, 2, 3, 4 ,5]
console.log(vetor)

const objeto = {
    n1 : vetor[0],
    n2 : vetor[1],
    n3 : vetor[2],
    n4 : vetor[3],
    n5 : vetor[4]
}




console.log(objeto)

const {n1, n2, n3, n4 ,n5} = objeto


console.log(JSON.stringify({n1,n2,n3,n4,n5}))


