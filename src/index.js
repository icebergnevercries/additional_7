module.exports = function solveSudoku(matrix) {
  const arrayForSolves = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let len = arrayForSolves.length;
  let condition = true;

  function SearchElement(matrixSudoku){
    for(let i = 0; i < len; i++){
      for(let j = 0; j < len; j++){
        if(matrixSudoku[i][j] == 0){
          for(let k = 0; k < len; k++){
            condition = true;
            for(let n = 0; n < len; n++){
              if(matrixSudoku[i][n] == arrayForSolves[k] || matrixSudoku[n][j] == arrayForSolves[k] || matrixSudoku[Math.floor(i / 3) * 3 + n % 3][Math.floor(j / 3) * 3 + Math.floor(n / 3)] == arrayForSolves[k]){
                condition = false;
              }
            }
            if(condition){
              matrixSudoku[i][j] = arrayForSolves[k];
              if(SearchElement(matrixSudoku)){
                return true;
              }
              else{
                matrixSudoku[i][j] = 0;
              }
            }
          }
          return false;
        }
      }
    }
    return true;
  }

  SearchElement(matrix);
  return matrix;
}
