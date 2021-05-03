// ## EXO1
// ### Créer une class Personnage avec comme propriétés : 
// ### age , nom , ville
// ### Faire 2 instances de cette class.

class Personnage {
    constructor (age , nom , ville) {
        this.age = age
        this.nom = nom
        this.ville = ville
    }
    sePrésenter(){
        console.log(`Bonjour, je m'apelle ${this.nom}`)
    }
}

let personnage1 = new Personnage (18 , "LeChat", "Bxl")
let personnage2 = new Personnage (26 , "Farhad", "Bxl")

// ## EXO2
// ### Rajouter la methode 'sePresenter' à la class Personnage qui dira "Bonjour, je m'appelle [nom-de-la-personne] !" via un console.log
// ### Lancer cette méthode sur les deux instances de l'exo1

personnage1.sePrésenter()
personnage2.sePrésenter()

