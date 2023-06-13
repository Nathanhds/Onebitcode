const Installment = require("./Installment")

module.exports = class Loan {
    static #fee = 1.05

    constructor(value, installments) {
        this.value = value
        this.createdDate = new Date()
        installments = []
        for (let i = 0; i < installments; i++) {
            installments.push(new Installment((value * Loan.#fee) / installments, i))
        }
    }

    get fee() {
        return Loan.#fee
    }

    set fee(newPercetage) {
        Loan.#fee = 1 + (newPercetage / 100)
    }
}