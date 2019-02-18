module.exports = function solveSudoku(matrix) {
  function propose(row,col) {
    let res = [];
    let area = {
        row: Math.floor(row/3)*3,
        col: Math.floor(col/3)*3,
    }
    for (let i = 0; i < 9; i++) {
        res.push([matrix[row][i], matrix[i][col], matrix[area.row + i % 3][area.col + Math.floor(i / 3)]])
    }
    return res;
  }

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (matrix[row][col] === 0) {
        let proposals = propose(row, col);
        for (let proposal of proposals) {
          matrix[row][col] = proposal;
          solveSudoku(matrix);
        }  
      }
    }
  }
  return matrix;
}
