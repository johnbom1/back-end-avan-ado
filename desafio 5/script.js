// requisição com o Fetch
const nome = documhtment.querySelector('#lista')
fetch('https://jsonplaceholder.typicode.com/users')
.then(T => T.json())

.then((users) => (users.forEach(item => {
    console.log(`${item['name']}`)
    const items = nome.createElement('li')
    const conteudo = nome.appendChild(items)
    conteudo.innerHTML = `Nome: ${item.name} Email: ${item.email}`
   

}
)))


fetch('https://jsonplaceholder.typicode.com/users')
.then(T => T.json())

.then((users) => (users.forEach(item => {
    console.log(`${item['email']}`)

})))







