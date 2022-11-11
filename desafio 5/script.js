// requisição com o Fetch
const lista = document.querySelector('#lista')


fetch('https://jsonplaceholder.typicode.com/users')
.then(T => T.json())

.then((users) => (users.forEach(item => {
    const tuplas = document.createElement('li')
    const conteudo = lista.appendChild(tuplas)
    conteudo.innerHTML = (`Nome: ${item.name}  Email: ${item.email}`)
   

}
)))



