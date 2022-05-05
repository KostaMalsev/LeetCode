/** * @param {number[][]} matrix * @return {void} Do not return anything, modify matrix in-place instead. */
var rotate = function(matrix) {
  /* Get the next coordinate*/
  function next(row, col, N, ind, D, offset) {
    switch (ind) {
      case 0:
        return [row + ((col + D - offset) - N), Math.min(col + D, N + offset)];
      case 1:
        return [Math.min(row + D, N + offset), col - (row + D - (N + offset))];
      case 2:
        return [row + (col - offset - D), Math.max(col - D, offset)];
      case 3:
        return [Math.max(row - D, offset), col - (row - offset - D)];
    }
  }
  let N = matrix[0].length;
  console.log(matrix);
  let tmp = -1,
    valToMove = 0;
  let row = 0,
    col = 0;
  let nextRow = 0,
    nextCol = 0;
  let dim = N;
  let ddim = N;
  while (dim > 0) {
    row = N - ddim;
    D = dim - 1;
    for (let ii = 0; ii < dim - 1; ii++) {
      col = N - ddim + ii;
      tmp = -1;
      for (let ind = 0; ind < 4; ind++) {
        /*Generate next positon*/
        [nextRow, nextCol] = next(row, col, dim - 1, ind, D, N - ddim);
        if (tmp == -1) {
          tmp = matrix[nextRow][nextCol];
          valToMove = matrix[row][col];
        } else {
          valToMove = tmp;
          tmp = matrix[nextRow][nextCol];
        } /*Move the value to next position*/ /*console.log('curr:',row,col,'next:',nextRow,nextCol,'||',ind,ddim-1,D,N - ddim,dim,matrix[nextRow][nextCol]);*/
        matrix[nextRow][nextCol] = valToMove;
        row = nextRow;
        col = nextCol;
      }
    } /*If got to the center, stop:*/
    let needToStop = N % 2 == 0 ? dim == 2 : dim == 1;
    if (needToStop) {
      /*console.log('got to the middle',row, col, dim, N)*/
      return matrix;
    }
    dim = dim - 2;
    ddim--;
  }
};