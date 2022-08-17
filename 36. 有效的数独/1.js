/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const row = new Array(9).fill(0).map(() => new Array(9).fill(0));
  const col = new Array(9).fill(0).map(() => new Array(9).fill(0));
  const box = new Array(9).fill(0).map(() => new Array(9).fill(0));
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === ".") continue;
      const number = parseInt(board[i][j]);
      if (
        row[i][number] ||
        col[j][number] ||
        box[Math.floor(i / 3) + Math.floor(j / 3) * 3][number]
      )
        return false;
      row[i][number] =
        col[j][number] =
        box[Math.floor(i / 3) + Math.floor(j / 3) * 3][number] =
          1;
    }
  }
  return true;
};

console.log(
  isValidSudoku([
    [".", ".", "4", ".", ".", ".", "6", "3", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    ["5", ".", ".", ".", ".", ".", ".", "9", "."],
    [".", ".", ".", "5", "6", ".", ".", ".", "."],
    ["4", ".", "3", ".", ".", ".", ".", ".", "1"],
    [".", ".", ".", "7", ".", ".", ".", ".", "."],
    [".", ".", ".", "5", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
  ])
);
