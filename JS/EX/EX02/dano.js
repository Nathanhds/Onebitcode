const atacante = prompt("Insira o nome do personagem atacante")
const defensor = prompt("Insira o nome do personagem defensor")
const nomeDoPoder = prompt("Insira um nome para o poder do(a) "+ atacante)
const poderDeAtaque = prompt("Insira o valor do dano do poder "+ nomeDoPoder)
const poderDeDefesa= prompt("Insira o poder de defesa do(a) "+ defensor)
const possuiEscudo = prompt("O(a) "+ defensor +" possui escudo?(sim ou não")
let vida = prompt("Insira os pontos de vida do(a)" + defensor)

let dano = 0

if (poderDeAtaque > poderDeDefesa && possuiEscudo === "não") {
    dano = poderDeAtaque - poderDeDefesa
} else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "sim"){
    dano = (poderDeAtaque- poderDeDefesa) / 2
}

vida == vida - dano

alert (atacante+ " causou um dano de " + dano + " pontos de dano em " + defensor)
alert (
    atacante + "\nPoder de ataque: " + poderDeAtaque + "\n\n" + 
    defensor + "\nPoder de defesa: " + poderDeDefesa + "\nPontos de vida: " + vida + "\nPossui escudo " + possuiEscudo
    )
