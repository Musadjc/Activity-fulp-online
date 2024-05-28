class Soldier {
    constructor(strength, health) { 
        this.strength = strength 
        this.health = health 
    }

    attack() { 
        return this.strength
    }

    receiveDamage(damage) { 
    this.health = this.health - damage
} 
}
const soldado = new Soldier(25,30) 
console.log(soldado.attack()) 




//Iteration 2 - Viking
class Viking extends Soldier { 
    constructor(name, health, strength) {
        super (strength, health) 
        this.name = name 
    }

    receiveDamage(damage) {
        this.health -= damage
        if(this.health > 0) {
            return console.log(this.name + ' has received ' + damage + ' points of damage')

    }   else {
        return console.log('Viking has died in act of combat')
    }
    }

    battleCry() {
        return ('Odin Owns You All!')
    }
}
const vikingo = new Viking ('Thor',80,40) 
vikingo.receiveDamage(40) 
console.log(vikingo)


//Iteration 3 Saxon
class Saxon extends Soldier {
    constructor(health,strength) {
    super (strength, health)
    } 
    
    receiveDamage(damage) {
        this.health -= damage
        if(this.health > 0) {
            return console.log('A Saxon has received ' + damage + ' points of damage')

    }   else {
        return console.log('A Saxon has died in combat')
    }
    }
    }
    const saxon = new Soldier (70,60)
    saxon.receiveDamage(30)
    console.log(saxon)


    
    