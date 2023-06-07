let entrada1 = prompt("Insira o primeiro número: ")
let entrada2 = prompt("Insira o segundo número: ")

const x = parseFloat(entrada1)
const y = parseFloat(entrada2)

const soma = x + y
const subtracao = x - y
const divisao = x / y
const multiplicacao = x * y

alert(
    "A soma é: " + soma + "\nA subtração é: " + subtracao + "\nA divisão é: " + divisao + "\nA multiplicação é: " + multiplicacao
)