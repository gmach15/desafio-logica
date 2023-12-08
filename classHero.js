class hero{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        let ataque
        if (this.tipo === "Guerreiro"){
            ataque = "Blood Sword"
        } else if (this.tipo === "Mago"){
            ataque = "Elemental Magic"
        } else if (this.tipo === "Monge"){
            ataque = "One Inch Punch"
        } else if (this.tipo === "Ninja"){
            ataque = "Ghost Shurikens"
        }

        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}!`)
    }
}

let newskin = new hero("NewSkiN", 28, "Mago")
let fyodor = new hero("Fyodor", 30, "Guerreiro")
let ujin = new hero("Ujin", 23, "Monge")
let akatsuki = new hero("Akatsuki", 19, "Ninja")

newskin.atacar()
fyodor.atacar()
ujin.atacar()
akatsuki.atacar()