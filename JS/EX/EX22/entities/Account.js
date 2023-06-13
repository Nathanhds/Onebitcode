module.exports = class Account {
    #balance
    constructor(user) {
        this.owner = user
        this.#balance = 0
        this.deposits = []
        this.tranfers = []
        this.loans = []
    }

    get balance() {
        return this.#balance
    }

    addDeposit(deposit) {
        this.#balance += deposit
        this.deposits.push(deposit)
    }

    addLoan(loan) {
        this.#balance += loan
        this.loans.push(loan)
    }

    addTransfer(transfer) {
        if(transfer.toUser.email === this.owner.email) {
            this.#balance += transfer.value
            this.tranfers.push(transfer)
        } else if(transfers.fromUser.email === this.owner.email) {
            this.balance -= transfer.value
            this.tranfers.push(transfer)
        }
    }
}