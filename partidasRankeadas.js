
//Calcular saldoRankeadas de vitórias
function calcularsaldoRankeadas(vitorias, derrotas){
    let saldoRankeadas = vitorias - derrotas
    return saldoRankeadas
}

//Chamar função, armazenada na variável saldoRankeadas
let saldoRankeadas = calcularsaldoRankeadas(80, 35)

//Atribuit nível ao herói
function atribuirNivel(saldoRankeadas){
    let nivel
    switch (true){

        case saldoRankeadas <=10:
            nivel = "Ferro"
            break

        case saldoRankeadas >= 11 && saldoRankeadas <=20:
            nivel = "Bronze"
            break
  
        case saldoRankeadas >= 21 && saldoRankeadas <=50:
            nivel = "Prata"
            break
    
        case saldoRankeadas >= 51 && saldoRankeadas <=80:
            nivel = "Ouro"
            break
   
        case saldoRankeadas >= 81 && saldoRankeadas <=91:
            nivel = "Diamante"
            break
    
        case saldoRankeadas >= 91 && saldoRankeadas <=100:
            nivel = "Ouro"
            break
    
        default:
            nivel = "Imortal"
        }
    
    return nivel
 }

 //Chamar função, armazenada na variável nivel
 let nivel = atribuirNivel(saldoRankeadas)

 //Printa a informação na tela com base na interpolação de strings.
 console.log(`O Herói tem saldo de ${saldoRankeadas} vitórias e está no nível ${nivel}!`)