const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    // If the array is not nested, return 1
    if (!Array.isArray(arr)) {
      return 0;
    }
    // Recursively calculate the depth of each nested array
    let maxDepth = 0;
    for (let i = 0; i < arr.length; i++) {
      maxDepth = Math.max(maxDepth, this.calculateDepth(arr[i]));
    }
    // Return the maximum depth of the nested arrays, plus 1 for the current array
    return maxDepth + 1;
  }
}

module.exports = {
  DepthCalculator
};
