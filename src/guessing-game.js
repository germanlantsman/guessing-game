class GuessingGame {
    constructor() { }

    setRange(min, max) {
        this.minNumber = min;
        this.maxNumber = max;
    }

    guess() {
        this.averageNumber = Math.round((this.minNumber + this.maxNumber)/2);
        return this.averageNumber;
    }

    lower() {
        this.maxNumber = this.averageNumber;
    }

    greater() {
        this.minNumber = this.averageNumber;
    }
}

module.exports = GuessingGame;
