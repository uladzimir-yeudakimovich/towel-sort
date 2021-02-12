
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
  if (!matrix) return arr;
  matrix.forEach((el, i) => {
    arr = i % 2 === 0 ? arr.concat(el) : arr.concat(el.reverse());
  });
  return arr;
}
