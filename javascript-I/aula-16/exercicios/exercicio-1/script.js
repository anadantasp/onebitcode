let veiculo1 = prompt("Digite o nome do primeiro veículo: ")
let velocidade1 = parseFloat(prompt("Digite a velocidade do primeiro veículo: "))

let veiculo2 = prompt("Digite o nome do segundo veículo: ")
let velocidade2 = parseFloat(prompt("Digite a velocidade do segundo veículo: "))

if(velocidade1 > velocidade2){
    alert(veiculo1 + " é mais rápido do que " + veiculo2)
}else if(velocidade1 < velocidade2){
    alert(veiculo2 + " é mais rápido do que " + veiculo1)
}else{
    alert("As velocidades são iguais")
}