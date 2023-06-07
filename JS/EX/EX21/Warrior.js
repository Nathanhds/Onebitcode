const Character = require("./Character")

module.exports = class Warrior extends Character {
    constructor(name, lifePoints, attackPoints, defensePoints, shieldPoints) {
        super(name, lifePoints, attackPoints, defensePoints)
        this.shieldPoints = shieldPoints
        this.stance = 'attacking'
    }

    attack(targetCharacter) {
        if(this.stance === 'attacking') {
            super.attack(targetCharacter)
        }
    }

    switchStance() {
        if(this.stance === 'attacking') {
            this.stance = 'defending'
            this.defensePoints += this.shieldPoints
        } else {
            this.stance = 'attacking'
            this.defensePoints -= this.shieldPoints
        }
    }
}