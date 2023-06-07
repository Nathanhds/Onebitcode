const nome = prompt("Insira seu nome: ")
const sobrenome = prompt("Insira seu sobrenome: ")
const campoDeEstudo = prompt("Insira seu campo de estudo: ")
const anoDeNascimento = prompt("Insira seu ano de nascimento: ")

alert(
    "Recruta cadastrado com sucesso!\n"+
    "\nNome completo: " + nome + " " + sobrenome + 
    "\nCampo de estudo: " + campoDeEstudo + 
    "\nIdade: " + (2023 - anoDeNascimento)
)
