class EncoderServices {

    constructor(bcrypt) {
        this.bcrypt = bcrypt;
    }

    setSaltRounds(rounds) {
        this.rounds = rounds;
        return this;
    }

    compare(source, hashed) {
        return this.bcrypt.compare(source, hashed);
    }

    hash(source) {
        return this.bcrypt.hash(source, this.rounds);
    }

}

module.exports = EncoderServices;
