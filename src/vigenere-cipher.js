const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    const messageArray = message.toUpperCase().match(/[A-Z]/g);
    const messageOriginalArray = message.toUpperCase().split('');
    let encryptedArray = [];
    if (messageArray != null) {
      const keyArray = key.toUpperCase().repeat(Math.ceil(messageArray.length / key.length)).split('');

      encryptedArray = messageArray.map((letter, index) => {
        const messageCharCode = letter.charCodeAt(0) - 65;
        const keyCharCode = keyArray[index].charCodeAt(0) - 65;
        return String.fromCharCode(((messageCharCode + keyCharCode) % 26) + 65);
      });
    }

    for (let i in messageOriginalArray) {
      if (!/[A-Z]/.test(messageOriginalArray[i])) {
        encryptedArray.splice(i, 0, messageOriginalArray[i]);
      }
    }
    let encryptedMessage = encryptedArray.join('');
    if (!this.isDirect) encryptedMessage = encryptedMessage.split('').reverse().join('');

    return encryptedMessage;
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    const messageArray = message.toUpperCase().match(/[A-Z]/g);
    const messageOriginalArray = message.toUpperCase().split('');
    let decryptedArray = [];
    if (messageArray != null) {
      const keyArray = key.toUpperCase().repeat(Math.ceil(messageArray.length / key.length)).split('');

      decryptedArray = messageArray.map((letter, index) => {
        const messageCharCode = letter.charCodeAt(0) - 65;
        const keyCharCode = keyArray[index].charCodeAt(0) - 65;
        return String.fromCharCode(((messageCharCode - keyCharCode + 26) % 26) + 65);
      });
    }

    for (let i in messageOriginalArray) {
      if (!/[A-Z]/.test(messageOriginalArray[i])) {
        decryptedArray.splice(i, 0, messageOriginalArray[i]);
      }
    }
    let decryptedMessage = decryptedArray.join('');
    if (!this.isDirect) decryptedMessage = decryptedMessage.split('').reverse().join('');

    return decryptedMessage;
  }
}

module.exports = {
  VigenereCipheringMachine
};
