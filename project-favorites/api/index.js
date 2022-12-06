const http = require('http')
const URL = require('url')
const fs = require('fs')
const path = require('path')
const data = require('./urls.json')



http.createServer((req, res) => {
   
    const {name, url, del } = URL.parse(req.url, true).query
    
    if(!name || !url)
        return res.end('show')
   
    if(del)
        return res.end('delete')
   
    return res.end('create')

}).listen(3000, () => console.log('API is running.'))
