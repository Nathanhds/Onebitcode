function register() {
    const name = document.getElementById('name').value
    const position = document.getElementById('position').value
    const number = document.getElementById('number').value

    const confirmation = confirm(
        "Deseja escalar o jogador? \n" + 
        "Nome: " + name + "\nPosição: " + position + "\nNúmero: " + number
    )

    if(confirmation) {
        const teamList = document.getElementById('members-Of-Team')
        const player =  "Nome: " + name + "\nPosição: " + position + "\nNúmero: " + number
        const li = document.createElement('li')
        li.id = number
        li.innerText = player
        teamList.appendChild(li)

        document.getElementById('name').value = ''
        document.getElementById('position').value = ''
        document.getElementById('number').value = ''
    }
}

function remove() {
    const numberToRemove = document.getElementById('numberToRemove').value
    const playerToRemove = document.getElementById(numberToRemove)
    const confirmation = confirm(
        "Deseja remover o jogador?\n" + playerToRemove.innerText  
    )

    if(confirmation) {
        document.getElementById('members-Of-Team').removeChild(playerToRemove)
        document.getElementById('numberToRemove').value = ''
    }

}