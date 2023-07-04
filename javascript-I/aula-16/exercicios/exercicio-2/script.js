let atacante = prompt("Digite o nome do personagem atacante: ")
let poderDeAtaque = parseFloat(prompt("Qual é o seu poder de ataque? "))


let defensor = prompt("Digite o nome do personagem defensor: ")
let pontosDeVida = parseFloat(prompt("Quantos pontos de vida ele possui?"))
let poderDeDefesa = parseFloat(prompt("Qual é o seu poder de defesa? "))
let possuiEscudo = prompt("Ele possui um escudo? (SIM/NÃO")

let danoCausado = 0

if(poderDeAtaque > poderDeDefesa && possuiEscudo === "NÃO"){
    danoCausado = poderDeAtaque - poderDeDefesa
}else if(poderDeAtaque > poderDeDefesa && possuiEscudo === "SIM"){
    danoCausado = (poderDeAtaque - poderDeDefesa)/2
}

pontosDeVida -= danoCausado

alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor)
alert(atacante + "\nPoder de ataquue: " + poderDeAtaque + "\n\n" +
      defensor + "\n Pontos de vida: " + pontosDeVida + 
      "\nPode de defesa: " + poderDeDefesa + "\nPossui escudo: " + possuiEscudo)



