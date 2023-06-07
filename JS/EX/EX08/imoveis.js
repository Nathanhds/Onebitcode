let imoveis = []
let opcao = ""

do {
    opcao = prompt(
    "Quantidade de imóveis cadastrados: " + imoveis.length +
    "\n\nSelecione uma opção: "+
    "\n1-Adicionar novo imóvel. " +
    "\n2-Consultar imóveis cadastrados. " +
    "\n3-Sair"
    )

    switch(opcao){
        case "1":
            const imovel = {}
            imovel.proprietario = prompt("Insira o nome do proprietário do imóvel: ")
            imovel.quartos = prompt("Insira a quantidade de quartos do imo1vel: ")
            imovel.banheiros = prompt("Insira a quantidade de banheiros do imóvel: ")
            imovel.garagem = prompt("O imóvel possui garagem: ")

            const confirma = confirm(
                "Salvar esse imóvel?\n" +
                "\nNome do proprietátio: " + imovel.proprietario +
                "\nQuantidade de quartos: " + imovel.quartos +
                "\nQuantidade de banheiros: " + imovel.banheiros +
                "\nPossui garagem: " + imovel.garagem
            )

            if (confirma){
                imoveis.push(imovel)
            }
            else{
                alert("Voltando ao menu")
            }
            break
        
        case "2":
            for (let i = 0; i < imoveis.length; i++){
                alert(
                    "Nome do proprietário: " + imoveis[i].proprietario +
                    "\nQuantidade de quartos: " + imoveis[i].quartos +
                    "\nQUantidade de banheiros: " + imoveis[i].banheiros +
                    "\nPossui garagem: " + imoveis[i].garagem
                )
            }
            break
        
        case "3":
            alert("Encerrando...")
            break

        default:
            alert("Opção inválida.")

    }

} while(opcao !== "3")