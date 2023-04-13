const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // Extract heights different from -1
  const heights = arr.filter(h => h !== -1);

  // Sort heights in ascending order
  heights.sort((a, b) => a - b);

  // Replace each height different from -1 with the next smallest height in the sorted list
  let i = 0;
  return arr.map(h => h !== -1 ? heights[i++] : -1);
}

module.exports = {
  sortByHeight
};
