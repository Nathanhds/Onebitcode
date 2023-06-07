const Character = require("./Character")

module.exports = class Mage extends Character{
    constructor(name, lifePoints, attackPoints, defensePoints, magicPoints) {
        super(name, lifePoints, attackPoints, defensePoints)
        this.magicPoints = magicPoints
    }

    attack(targetCharacter) {
        if(targetCharacter.lifePoints > 0 && targetCharacter.lifePoints >= this.attackPoints + this.magicPoints - targetCharacter.defensePoints) {
            targetCharacter.lifePoints -= this.attackPoints + this.magicPoints - targetCharacter.defensePoints
        } else if (targetCharacter.lifePoints < this.attackPoints - targetCharacter.defensePoints) {
            targetCharacter.lifePoints = 0
        }
    }

    heal(targetCharacter) {
        targetCharacter.lifePoints += this.magicPoints * 2
    }
}
