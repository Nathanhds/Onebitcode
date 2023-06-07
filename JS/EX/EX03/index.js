let medidaInserida = prompt("Insira a medida em metros a ser convertida: ")
medidaConvertida = parseFloat(medidaInserida)
let unidadeDeConversao = prompt("Para qual unidade deseja converter:\n1-milímetro(mm)\n2-centímetro(cm)\n3-decímetro(dm)\n4-decâmetro(dam)\n5-hectômetro(hm)\n6-quilòmetro(km)")



switch (unidadeDeConversao){
    case "1":
        alert("A medida convertida é "+ medidaConvertida*1000+"mm")
        break
    case "2":
        alert("A medida convertida é: "+ medidaConvertida *100+"cm")
        break
    case "3":
        alert("A medida convertida é: "+ medidaConvertida * 10+"dm")
        break
    case "4":
        alert("A medida convertida é: "+ medidaConvertida / 10+"dam")
        break
    case "5":
        alert("A medida convertida é: "+ medidaConvertida / 100+"hm")
        break
    case "6":
        alert("A medida convertida é: "+ medidaConvertida /1000+"km")
        break
    default:
        alert("A conversão desejada não é válida")
}
