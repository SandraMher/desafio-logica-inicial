// Variáveis de entrada
let nomeHeroi = "Artemis"; 
let xpHeroi = 7500; 

// Variável para armazenar o nível
let nivel = "";

// Estrutura de decisão para classificar o herói
if (xpHeroi < 1000) {
  nivel = "Ferro";
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
  nivel = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
  nivel = "Prata";
} else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
  nivel = "Ouro";
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
  nivel = "Platina";
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
  nivel = "Ascendente";
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
  nivel = "Imortal";
} else if (xpHeroi >= 10001) {
  nivel = "Radiante";
}

// Saída
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);

