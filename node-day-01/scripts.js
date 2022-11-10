// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

//callback

// //OBS: mesmo chamando a callback antes dos logs, os logs são impressos antes
// //pois, no callback, o node entende que ele é uma função que pode demorar, e por isso,
// //o node permite que o resto do código continue sendo lido e assim que a callback terminar de executar
// //o retorno será exibido.

// const fs = require('fs')
// const { setTimeout } = require('timers/promises')

// console.log('Primeiro comando.')

// fs.readFile('./text.txt', callback)

// function callback(err, content){
//     if(err) return console.error('erro')
//     console.log(String(content))
// }


// console.log('Segundo comando.')
// console.log('Terceiro comando.')


// setTimeout(() => (console.log('Testando o setTimeout')), 3000)


// console.log('comando que está após o setTimeout.')


const date = new Date()

function funcao () {
    let hora = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()

    let aux = (hora + ':' + min + ':' + sec)
    console.log(aux)

}


// setTimeout(funcao, 5000)
// setTimeout(funcao, 5000)
// setTimeout(funcao, 5000)


// setInterval(funcao, 100)
// setInterval(funcao, 100)
setInterval(funcao, 100)









