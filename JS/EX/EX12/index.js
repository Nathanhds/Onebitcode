function createLabel(text, htmlFor) {
    const label = document.createElement('label')
    label.htmlFor = htmlFor
    label.innerText = text
    return label
}

function createInput (id, value, name, type = 'text', placeholder = '') {
    const input = document.createElement('input')
    input.name = name
    input.id = id
    input.value = value
    input.placeholder = placeholder
    input.type = type
    return input
}

const addTechBtn = document.getElementById('addTechBtn')
const form = document.getElementById('devForm')
const developers = []
let inputRows = 0

addTechBtn.addEventListener('click' , function(ev){
    ev.preventDefault
    const stackInputs = document.getElementById('stackInputs')

    const newRow = document.createElement('li')
    const rowIndex = inputRows
    inputRows++
    newRow.id = 'inputRow-' + rowIndex
    newRow.className = 'inputRows'

    const label = createLabel("Nome da tecnologia: ", 'techName-' + rowIndex)
    const input = createInput('techName-' + rowIndex, null, 'techName')

    const expLabel = createLabel('Experiêncai: ')

    const expInput = createInput('expRadio-' + rowIndex + '.1', '0-2 anos', 'techExp-' + rowIndex, 'radio')
    const expLabel1 = createLabel('0-2 anos', 'expRadio-' + rowIndex + '.1')

    const expInput1 = createInput('expRadio-' + rowIndex + '.2', '3-4 anos', 'techExp-' + rowIndex, 'radio')
    const expLabel2 = createLabel('3-4 anos', 'expRadio-' + rowIndex + '.2')

    const expInput2 = createInput('expRadio-' + rowIndex + '.3', '5+ anos', 'techExp-' + rowIndex, 'radio')
    const expLabel3 = createLabel('5+ anos', 'expRadio-' + rowIndex + '.3')

    const removeTechBtn = document.createElement('button')
    removeTechBtn.type = 'button'
    removeTechBtn.innerText = 'remover'

    removeTechBtn.addEventListener('click', function(ev) {
        stackInputs.removeChild(newRow)
    })
    newRow.append(label, input, expLabel, expInput, expLabel1, expInput1, expLabel2, expInput2, expLabel3, removeTechBtn)

    stackInputs.appendChild(newRow)
    
})

form.addEventListener('submit', function (ev) {
    ev.preventDefault()
    
    const devs = document.getElementById('devs')
    const liDevs = document.createElement('li')
    let technologies = []
    const fullnameInput = document.getElementById('fullname').value
    const inputRows = document.querySelectorAll('.inputRows')
    
  
    for(let i = 0; i < inputRows.length; i++) {
        const techName = document.querySelector('#inputRow-' + i + ' input[name="techName"]').value
        const techExp = document.querySelector('#inputRow-' + i + ' input[type="radio"]:checked').value
        const tech = "Nome da tecnologia: " + techName + "| Experiência: " + techExp + "\n"
        technologies.push(tech)
    }

    const dev = "Nome: " + fullnameInput + "\nTecnologias: \n" + technologies

    liDevs.innerText = dev
    devs.appendChild(liDevs)

    document.getElementById('fullname').value = ""
})


