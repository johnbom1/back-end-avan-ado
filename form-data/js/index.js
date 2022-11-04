
function enviar() {
    const formData = new FormData(document.querySelector('form'))
    const x = formData.get("primeiro")
    console.log(x)
    const y = formData.get("segundo")
    console.log(typeof y)

    console.log("Primeiro número: ", parseFloat(x))
    console.log("Segundo número: ", parseFloat(y))

    console.log("Soma: ", parseFloat(x) + parseFloat(y))
    console.log("Subtração: ", parseFloat(x) - parseFloat(y))
    console.log("Multiplicação: ", parseFloat(x) * parseFloat(y))
    console.log("Divisão: ", parseFloat(x) / parseFloat(y))

    }
