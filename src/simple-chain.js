const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  _chain: [],

  getLength() {
    return this._chain.length;
  },

  addLink(value) {
    if (value === undefined) {
      value = '';
    }
    this._chain.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (
      position < 1 ||
      position > this._chain.length ||
      !Number.isInteger(position)
    ) {
      this._chain = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this._chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this._chain.reverse();
    return this;
  },

  finishChain() {
    const result = this._chain.join('~~');
    this._chain = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
