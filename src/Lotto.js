const { ERROR_MSG } = require('./Constant');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    const { duplicateNumbers, only6Numbers, outOfRange, prefix } = ERROR_MSG;
    if (numbers.length !== 6) throw new Error(prefix + only6Numbers);
    if (new Set(numbers).size < 6) throw new Error(prefix + duplicateNumbers);
    if (numbers.reduce((isOut, no) => isOut || no < 1 || 45 < no, false))
      throw new Error(prefix + outOfRange);
  }
}

module.exports = Lotto;
