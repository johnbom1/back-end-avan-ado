
function enviar() {
    const formData = new FormData(document.querySelector('form'))
    const x = formData.get("primeiro")
    console.log(x)
    const y = formData.get("segundo")
    console.log(typeof y)

    const soma = parseFloat(x) + parseFloat(y);

    const sub = parseFloat(x) - parseFloat(y);

    const div = parseFloat(x) / parseFloat(y);

    const multi = parseFloat(x) * parseFloat(y);

    console.log("Soma: ", soma)
    console.log("Subtração: ", sub)
    console.log("Divisão: ", div)
    console.log("Multiplicação: ", multi)

    }
