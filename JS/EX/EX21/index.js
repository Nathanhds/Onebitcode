const Mage = require("./Mage");
const Thief = require("./Thief");
const Warrior = require("./Warrior");

const arthur = new Mage('Arthur', 300, 4, 2, 200)
const beatrice = new Thief('Beatrice', 140, 100, 8)
const cain = new Warrior('Cain', 200, 14, 12, 4)

console.table({ arthur, beatrice, cain })

cain.switchStance()
arthur.attack(cain)
beatrice.attack(arthur)

console.table({ arthur, beatrice, cain })

cain.attack(arthur)
beatrice.attack(arthur)
beatrice.attack(arthur)
arthur.heal(arthur)

console.table({ arthur, beatrice, cain })

