/** * @param {number[][]} matrix * @return {void} Do not return anything, modify matrix in-place instead. */
var rotate = function(matrix) {
  /* Get the next coordinate*/
  function next(row, col, N, ind, D) {
    switch (ind) {
      case 0:
        return [row + (col + D - N), Math.min(col + D, N)];
      case 1:
        return [Math.min(row + D, N), col - (row + D - N)];
      case 2:
        return [row + (col - D), Math.max(col - D, 0)];
      case 3:
        return [Math.max(row - D, 0), col - (row - D)];
    }
  }
  let N = matrix[0].length;
  let tmp = -1,
    valToMove = 0;
  let row = 0,
    col = 0;
  let nextRow = 0,
    nextCol = 0;
  for (let dim = N; dim > 0; dim--) {
    row = N - dim;
    //col = N - dim;                        
    /*If got to the center, stop:*/
    if ((dim - 1) * 2 + 1 == N) {
      console.log('got to the middle', row, col, dim, N) return matrix;
    }
    D = dim - 1;
    for (let ii = 0; ii < dim - 1; ii++) {
      col = N - dim + ii;
      tmp = -1;
      for (let ind = 0; ind < 4; ind++) {
        /*Generate next positon*/
        [nextRow, nextCol] = next(row, col, dim - 1, ind, D);
        if (tmp == -1) {
          tmp = matrix[nextRow][nextCol];
          valToMove = matrix[row][col];
          console.log('firsttime');
        } else {
          valToMove = tmp;
          tmp = matrix[nextRow][nextCol];
        } /*Move the value to next position*/
        matrix[nextRow][nextCol] = valToMove;
        console.log('curr:', row, col, 'next:', nextRow, nextCol, '||', matrix, valToMove, ii);
        row = nextRow;
        col = nextCol;
      }
    }
  }
};