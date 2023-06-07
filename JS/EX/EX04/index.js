const nome = prompt("Qual o nome do turista: ")
let cidades = ""
let contagem = 0
let visita = prompt("Você já visitou alguma cidade? (sim/não)")
while (visita === "sim"){
    let cidade = prompt("Qual a cidade visitada: ")
    cidades += " - " + cidade +"\n"
    contagem ++
    visita = prompt("Você visitou mais cidades? (sim/não)")
}
alert(nome +" visitou:" +contagem+" cidades" + " entre elas estão: \n"+cidades)