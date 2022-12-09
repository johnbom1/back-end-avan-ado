const ul = document.querySelector('ul')
const input = document.querySelector('input')
const form = document.querySelector('form')

async function load(){
    const res = await fetch('http://localhost:3000').then(data => data.json())
    res.urls.map(({name,url}) => addElement({name,url}))
}

load()

const url2 = 'http://localhost:3000'

let _data = {
    name: "foo",
    url: "bar"
  }

    fetch(url2, {
        method: "POST",
        body: JSON.stringify(_data)
    })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.log('Erro de solicitação', err));

function addElement({ name, url }) {
    const li = document.createElement('li')
    const a = document.createElement("a")
    const trash = document.createElement("span")

    a.href = url
    a.innerHTML = name
    a.target = "_blank"

    trash.innerHTML = "x"
    trash.onclick = () => removeElement(trash)

    li.append(a)
    li.append(trash)
    ul.append(li)
}

function removeElement(el) {
    if (confirm('Tem certeza que deseja deletar?'))
        el.parentNode.remove()
        fetch("http://localhost:3000?"+el.parentNode.querySelector('a').innerHTML+'&url='+el.parentNode.querySelector('a').href.slice(0,-1)+'&del=1')
}
form.addEventListener('submit', (event) => {
    event.preventDefault();

    let { value } = input

    if (!value)
        return alert('Preencha o campo!')

    const [name, url] = value.split(',')

    if (!url)
        return alert('O texto não está formatado da maneira correta.')

    if (!/^http/.test(url))
        return alert('Digite a url da maneira correta.')

    addElement({ name, url })
    fetch("http://localhost:3000?"+"name="+name+"&url="+url)
    input.value = ''
})