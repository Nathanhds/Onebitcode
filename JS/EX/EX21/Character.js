module.exports = class Character {
    constructor (name, lifePoints, attackPoints, defensePoints) {
        this.name = name
        this.lifePoints = lifePoints
        this.attackPoints = attackPoints
        this.defensePoints = defensePoints
    }

    attack(targetCharacter) {
        if(targetCharacter.lifePoints > 0 && targetCharacter.lifePoints >= this.attackPoints - targetCharacter.defensePoints) {
            targetCharacter.lifePoints -= this.attackPoints - targetCharacter.defensePoints
        } else if (targetCharacter.lifePoints < this.attackPoints - targetCharacter.defensePoints) {
            targetCharacter.lifePoints = 0
        }
        
    }
}