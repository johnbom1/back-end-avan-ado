const http = require('http')
const path = require('path')
const fs = require('fs')


http.createServer((req, res)=>{

    //definindo rotas para a aplicação
    if(req.url === '/')
        fs.readFile(
            path.join(__dirname, 'public', 'index.html'),
            (err, content) => {
                if (err) throw err
                res.end(content)
            }
        )
}).listen(5000,()=>(console.log('Servidor rodando...')))