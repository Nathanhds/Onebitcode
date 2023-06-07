const speed1 = prompt("Insira a primeira velocidade em km/h: ")
const speed2 = prompt("Insira a segunda velocidade em km/h: ")

if(speed1 > speed2) {
    alert("A velocidade de "+speed1+"km/h é maior que "+speed2+"km/h")
} else if(speed1 < speed2){
    alert("A velocidade de "+speed2+"km/h é maior que "+speed1+"km/h")
} else{
    alert("As velocidades são iguais")
}