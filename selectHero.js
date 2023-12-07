
//Lista de heróis e respectivos pontos de XP!
let heroi = [
    ["Earendil, o Marinheiro das Estrelas", 6500],
    ["Lüthien, a Canção da Noite", 7500],
    ["Beren, o Ladrão da Joia", 3020],
    ["Turgon, o Senhor da Cidade Oculta", 1750],
    ["Tuor, o Herói dos Dois Corações", 8025],
    ["Idril, a Dama da Fonte de Prata", 4010],
    ["Húrin, o Mais Forte dos Homens", 950],
    ["Morwen, a Senhora da Casa de Hador", 9300]
]
// Selecione o herói que você deseja jogar (de 0 a 7):
let heroiSelecionado = 1

let nome = heroi[heroiSelecionado][0]
let xp = heroi[heroiSelecionado][1]
let nivel

if (xp < 1000) {
    nivel = "Ferro"
} else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze"
} else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata"
} else if (xp >= 6001 && xp <= 7000) {
    nivel = "Ouro"
} else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina"
} else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente"
} else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal"
} else {
    nivel = "Radiante"
}

console.log(`O Herói de nome ${nome} está no nível ${nivel}!`)