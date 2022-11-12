const os = require('os')

const log = require('./logger')

// const {freemem, totalmem} = os

// const total = parseInt(freemem()/1024/1024)
// const freeMem = parseInt(totalmem()/1024/1024)

// const usage = total -freeMem

// const percents = parseInt((usage/total) * 100)

// const stats = {
//     total : `${total} MB`,
//     freeMem: `${freeMem} MB`,
//     percents: `${percents}% em uso`

// }
// console.log('++++++ MEMORY STASTS ++++++')
// console.table(stats)

setInterval(() => {
    const {freemem, totalmem} = os

const total = parseInt(totalmem()/1024/1024)
const freeMem = parseInt(freemem()/1024/1024)

const usage = total -freeMem

const percents = parseInt((usage/total) * 100)

const stats = {
    total : `${total} MB`,
    freeMem: `${freeMem} MB`,
    percents: `${percents}% em uso`

}
console.clear()
console.log('++++++ MEMORY STASTS ++++++')
console.table(stats)

//chamando a função log do rquivo logger.js
log('Rodando...', JSON.stringify(stats))

}, 1000)