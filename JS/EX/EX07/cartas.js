let cartas = []
let opcao = ""

do {
    opcao = prompt(
    "Cartas no baralho: "+cartas.length+
    "\nInsira uma opção: "+
    "\n1-Adicionar uma carta"+
    "\n2-Remover uma carta"+
    "\n3-Sair"
    )

    switch (opcao){
        case "1":
            novaCarta = prompt("Insira a nova carta: ")
            cartas.unshift(novaCarta)
            break
        case "2":
            if (cartas.length>0) {
                let cartaRemovida = cartas.shift()
                alert(cartaRemovida+" foi removida")
                break
            } else {
                alert("O baralho não possui cartas")
                break
            }
        case "3":
            alert("Encerrando...")
            break
        default:
            alert("Opção inválida")
    }

} while(opcao !== "3")