let area = ""

function triangulo(){
    const base = prompt("Insira o valor da base do trinângulo: ")
    const altura = prompt("Insira o valor da altura do triângulo: ")
    area = (base * altura)/2
    return 
}
function retangulo(){
    const base = prompt("Insira o valor da base do retângulo: ")
    const altura = prompt("Insira o valor da altura do retângulo: ")
    area = base * altura
    return
}
function quadrado(){
    const lado = prompt("Insira o valor do lado do quadrado: ")
    area = lado * lado
    return 
}
function trapezio(){
    const baseMaior = prompt("Insira o valor da base maior do trapézio: ")
    const baseMenor = prompt("Insira o valor da base menor do trapézio: ")
    const altura = prompt("Insira o valor da altura do trapézio")
    area = (parseFloat(baseMaior) + parseFloat(baseMenor)) * altura / 2
    return 
}
function circulo(){
    const raio = prompt("Insira o valor do raio do círculo: ") 
    area = 3.14 * raio * raio
    return
}
function executar(){
    do {
    let resultado = ""
    opcao = prompt("Escolha uma opção: "+
    "\n1-Área do triângulo"+
    "\n2-Área do retângulo"+
    "\n3-Área do quadrado"+
    "\n4-Área do trapézioo"+
    "\n5-Área do círculo"+
    "\n6-Sair")

    switch(opcao){
        case "1":
            resultado = triangulo()
            alert("A área do triângulo é: " + area)
            break
        case "2":
            resultado = retangulo()
            alert("A área do retângulo é: " + area)
            break
        case "3":
            resultado = quadrado()
            alert("A área do quadrado é: " + area)
            break
        case "4":
            resultado = trapezio()
            alert("A área do trapézio é: " + area)
            break
        case "5":
            resultado = circulo()
            alert("A área do circulo é: " + area)
            break
        case "6":
            alert("Encerrando...")
            break
        default:
            alert("Inválido")
    }
}while(opcao !== "6")
}
executar()
