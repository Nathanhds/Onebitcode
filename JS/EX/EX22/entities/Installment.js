module.exports = class Installment {
    constructor(value, number) {
        this.value = value
        this.number = number
        this.createddate = new Date()
    }
}