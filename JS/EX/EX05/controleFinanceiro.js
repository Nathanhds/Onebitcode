const dinheiroInicial = prompt("Qual a quantidade inicial de dinheiro")
let dinheiroAtual = parseFloat(dinheiroInicial)
let valor = ""
let operacao = ""
do {
    operacao = prompt("Seu saldo atual é de: R$"+dinheiroAtual+
    "\nInsira alguma opção:"+
    "\n1-Adicionar"+
    "\n2-Remover"+
    "\n3-Sair")
    switch (operacao){
        case "1":
            valor = parseFloat(prompt("Insira o valor a ser adicionado:"))
            dinheiroAtual += valor
            alert("Foi adicionado um valor de R$"+valor+ " a seu saldo")
            break
    
        case "2":
            valor = parseFloat(prompt("Insira o valor a ser removido:"))
            dinheiroAtual -= parseFloat(valor)
            alert("Foi removido um valor de R$"+valor+ " de seu saldo")
            break
    
        case "3":
            alert("O saldo inicial era de:R$"+dinheiroInicial)
            alert("O saldo final foi de: R$"+dinheiroAtual)
    }
}while(operacao != "3")
 
