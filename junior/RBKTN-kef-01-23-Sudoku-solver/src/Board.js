class Board extends EventEmitter {
  constructor(board) {
    super();

    this.board = board || [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
  }

  getRow(index) {
    return this.board[index];
  }

  updateBoard(newBoard) {
    this.board = newBoard;
  }


  getCol(index) {
    const result = [];
    for (let i = 0; i < this.board.length; i++) {
      result.push(this.board[i][index]);
    }
    return result;
  }


  generateBoard() {
    const hardPuzzle = [
      ["", "", 2, "", "", "", "", "", ""],
      ["", "", 9, "", "", "", "", "", ""],
      ["", 4, "", "", "", "", "", 6, ""],
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", 5, 9, "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
      [7, "", "", "", "", "", 4, "", 2],
      ["", 8, "", "", "", "", "", "", ""],
    ]

    this.board = hardPuzzle;
    this.emit("boardGenerated", hardPuzzle);
  }

  clearBoard() {
    const emptyPuzzle = [
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
    ];
    this.board = emptyPuzzle;
    this.emit("boardcleared", emptyPuzzle);
  }

  getBox(rowIndex, colIndex) {
    const result = [];
    const boxRowStart = rowIndex - (rowIndex % 3);
    const boxColStart = colIndex - (colIndex % 3);

    for (let r = boxRowStart; r < boxRowStart + 3; r++) {
      for (let d = boxColStart; d < boxColStart + 3; d++) {
        result.push(this.board[r][d]);
      }
    }
    return result;
  }

  getBoxByIndex(index){
    const result=[]
    const startingRow = Math.floor(index / 3) * 3;
    const startingCol = Math.floor(index % 3) * 3;
    for (let r = startingRow; r < startingRow + 3; r++) {
      for (let d = startingCol; d < startingCol + 3; d++) {
        result.push(this.board[r][d]);
      }
    }
    return result;

  }
/*
         _             _     _
     ___| |_ __ _ _ __| |_  | |__   ___ _ __ ___ _
    / __| __/ _` | '__| __| | '_ \ / _ \ '__/ _ (_)
    \__ \ || (_| | |  | |_  | | | |  __/ | |  __/_
    |___/\__\__,_|_|   \__| |_| |_|\___|_|  \___(_)

 */

/*=========================================================================
=                 TODO: fill in these Checker Functions                    =
=========================================================================*/

  rowSafe(row, num) {
    //check if the row contains num
   return !this.getRow(row).includes(num)
  }
  
  colSafe(col, num) {
    //check if the column contains num
    return !this.getCol(col).includes(num)
  }

  boxSafe(row, col, num) {
    return !this.getBox(row,col).includes(num)
  }

  rowValidAt(rowIndex) {
    //check if a row is valid at a given index
    var repeated=false
    var _row=this.getRow(rowIndex).length
    for(var i=0;i<_row.length;i++){//[1,2,3,4,5,6,1]
      if(typeof(_row[i])==="number"&&_row[i]<10&&_row[i]>0){
      for(var j=i+1;j<_row.length;j++){
      if(_row[i]===_row[j]){
        repeated=true
      }
      }
    }MediaQueryListEvent
    return repeated
    }
  }

  colValidAt(colIndex) {
    //check if a column is valid at a given index
  }

  boxValidAt(boxIndex) {
    //check if a box is valid at a given index
  }

  allRowsValid() {
    //check if all the rows in the board are valid
  }
  allColsValid() {
    //check if all the columns in the board are valid
  }
  allBoxesValid() {
    //check if all the boxes in the board are valid
  }

  validBoard() {
    return this.allBoxesValid() && this.allColsValid() && this.allRowsValid();
  }

  isSafe(row, col, num) {
    return  this.rowSafe(row, num) && this.colSafe(col, num) && this.boxSafe(row, col, num);
  }

/*=========================================================================
=                 TODO: fill in these Solver Functions                    =
=========================================================================*/

  solve() {
    return true;
  }
  
  solveBoard() {
    while (this.validBoard()) {
      if (this.solve()) {
        this.emit("validBoard", this.board);
        return true
      } 
    }
    this.emit("invalidBoard");
    // dont forget to add a small change here ;) 
  }
}
