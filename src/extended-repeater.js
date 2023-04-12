const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRSTRINGPLUS00PLUS00PLUS**INGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (options.separator == undefined) {
    options.separator = '+';
  }
  if (options.repeatTimes == undefined) {
    options.repeatTimes = 1;
  }
  if (options.additionSeparator == undefined) {
    options.additionSeparator = '|';
  }
  if (options.additionRepeatTimes == undefined && options.addition != undefined) {
    options.additionRepeatTimes = 1;
  }
  options.separator = String(options.separator);
  options.addition = String(options.addition);
  options.additionSeparator = String(options.additionSeparator);
  let addition = '';
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    addition = addition + options.addition;
    if (i < options.additionRepeatTimes - 1) {
      addition = addition + options.additionSeparator;
    }
  }
  addition = str + addition;
  let returnString = '';
  for (let i = 0; i < options.repeatTimes; i++) {
    returnString = returnString + addition;
    if (i < options.repeatTimes - 1) {
      returnString = returnString + options.separator;
    }
  }

  return returnString;
}

module.exports = {
  repeater
};
