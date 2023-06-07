const numero = parseFloat(prompt("Insira o valor desejado para a tabuada: "))
let tabuada = ""
for(let i = 0; i <= 20; i++ ){
    tabuada += numero+" X "+i +" = "+ numero * i +"\n"
}
alert("A tabuada do valor inserido é: \n"+tabuada)