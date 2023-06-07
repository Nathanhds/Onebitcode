const Character = require("./Character")

module.exports = class Thief extends Character {
    attack(targetCharacter) {
        if(targetCharacter.lifePoints > 0 && targetCharacter.lifePoints >= (this.attackPoints - targetCharacter.defensePoints) * 2) {
            targetCharacter.lifePoints -= (this.attackPoints - targetCharacter.defensePoints) * 2
        } else if (targetCharacter.lifePoints < (this.attackPoints - targetCharacter.defensePoints) * 2) {
            targetCharacter.lifePoints = 0
        }
    }
}