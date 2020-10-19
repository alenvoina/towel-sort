
// You should implement your task here.

module.exports = function towelSort(matrix) {


  let result = []
  if (matrix == undefined) {
    return result
  }

  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 != 0) {
      result[i] = matrix[i].reverse()
     
    }
    else if (i % 2 === 0) {
      result[i] = matrix[i]
     
    }

  }
  let c = []
  for (let i = 0; i < result.length; i++) {
    c = c.concat(result[i])
  }

  return c;
}
