const palavra = prompt("Insira a palavra: ")
let palavraInvertida = ""
for (let i = palavra.length - 1; i>=0; i--){
    palavraInvertida += palavra[i]
}
if (palavraInvertida === palavra){
    alert(palavra+" é um palíndromo")
} else {
    alert(palavra+" não é um palíndromo \n"+
    palavra +" !== "+palavraInvertida)
}