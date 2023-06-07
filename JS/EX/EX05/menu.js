let opcao = ""
do {opcao = prompt("Escolha uma das opções:"+
    "\n1-Saldo"+
    "\n2-Falar com atendente"+
    "\n3-Consumo de internet"+
    "\n4-Plano"+
    "\n5-Encerrar")
    switch(opcao){
        case "1":
            alert("A opção escolhida foi a: 1-Saldo")
            break
        case "2":
            alert("A opção escolhida foi a: 2-Falar com atedente")
            break
        case "3":
            alert("A opção escolhida foi a: 3-Consumo de internet")
            break
        case "4":
            alert("A opção escolhida foi a: 4-Plano")
            break
        case "5":
            alert("A opção escolhida foi a: 5-Encerrar")
            break
        default:
            alert("informação invalida")
    }
}while(opcao != "5")
