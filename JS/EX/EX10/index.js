let vagas = []

function vagasDisponiveis() {
    if(vagas.length > 0) {
        const vagasEmTexto = vagas.reduce((textoFinal, vaga, indice) => {
            textoFinal += indice + ". "
            textoFinal += vaga.nome
            textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
            return textoFinal
          }, "")
        
          alert(vagasEmTexto)
    }else{
        alert("Não há vagas cadastradas.")
    }
}

function criarVaga() {
    const nome = prompt("Insira o nome para a nova vaga: ")
    const descricao = prompt("Insira a descrição da nova vaga: ")
    const dataLimite = prompt("Insira a data limite para a nova vaga (dd/mm/aaaa): ")

    const novaVaga = {nome, descricao, dataLimite, candidatos: []}

    confirmar = confirm(
        "Você realmente deseja criar essa vaga? " +
        "Nome da vaga: " + nome +
        "Descrição da vaga: " + descricao + 
        "Data limite da vaga: " + dataLimite 
    )

    if(confirmar) {
        vagas.push(novaVaga)
        alert("Vaga criada com sucesso.")
    }
}

function visualizarVaga() {
    if(vagas.length > 0) {

        const indice = prompt("Insira o índice da vaga que deseja visualizar: ")
        const vaga = vagas[indice]

        alert(
            "Vaga nº " + indice +
            "\nNome: " + vaga.nome +
            "\nDescrição: " + vaga.descricao +
            "\nData Limite: " + vaga.dataLimite + 
            "\nQuandidade de candidatos: " + vaga.candidatos.length + 
            "\nCandidatos: " + vaga.candidatos
        )
    }else{
        alert("Não há vagas cadastradas.")
    }
}

function inscreverCandidato() {
    if(vagas.length > 0) {

        const candidato = prompt("Insira o nome do(a) candidato(a): ")
        const indice = prompt("Insira o índice da vaga que deseja se inscrever: ")
        const vaga = vagas[indice]

        const confirmar = confirm(
            "Deseja se inscrever? "+
            "Nome: " + candidato +
            "Vaga: " + vaga.nome +
            "Descrição da vaga: " + vaga.descricao 
        )

        if(confirmar) {
            vaga.candidatos.push(candidato)
            alert("Candidato inscrito.")
        }
    }else{
        alert("Não há vagas cadastradas.")
    }
}

function excluirVaga() {
    if(vagas.length > 0) {

        const indice = prompt("Insira o índice da vaga a ser excluída: ")
        const vaga = vagas[indice]
        const confirmar = confirm(
            "Deseja realmente excluir a vaga: " + vaga.nome + "?"
        )
        if(confirmar) {
            vagas.splice(indice, 1)
            alert("Vaga excluída.")
        }
    }else{
        alert("Não há vagas cadastradas.")
    }
}

function menu() {
    opcao = prompt(
        "Cadastro de vagas de emprego: " +
        "\nEscolha uma das opções: " + 
        "\n1-Listar vagas disponíveis" + 
        "\n2-Criar uma nova vaga" +
        "\n3-Visualizar uma vaga" +
        "\n4-Inscrever um(a) candidato(a) em uma vaga" +
        "\n5-Excluir uma vaga" +
        "\n6-Sair"
    )
    return opcao
}

function executar() {
    let opcao = ""
    do {
        opcao = menu()
        
        switch(opcao){
            case "1":
                vagasDisponiveis()
                break
            case "2":
                criarVaga()
                break
            case "3":
                visualizarVaga()
                break
            case "4":
                inscreverCandidato()
                break
            case "5":
                excluirVaga()
                break
            case "6":
                alert("Saindo...")
                break
            default:
                alert("Opção inválida.")
        }
    } while(opcao !== "6")
}

executar()