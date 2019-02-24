
var boardGuide = [0,1,2,3,4,5,6,7,8]
var playingSquare = [' ',' ',' ',' ',' ',' ',' ',' ',' ']
var turnCount = 0
var inPlay = true

boardGuide.slice(0,2)

var exampleRow1 = boardGuide.slice(0,3).join(" | ") 
var exampleRow2 = boardGuide.slice(3,6).join(" | ")
var exampleRow3 = boardGuide.slice(6,9).join(" | ")
var boardLine = "\n--|---|--\n"

var exampleBoard = exampleRow1 + boardLine+ exampleRow2 + boardLine + exampleRow3

var winMessage = function(){
  return console.log("~ * ~ WINNER!! ~ * ~" + '\n' + 'To play again, type resetBoard()')
}

var play = function(){
  console.log('             ~ ~ Tic-Tac-Toe Console Game ~ ~' + '\n' + '\n' + 'To play, type in playerTurn(position), eg playerTurn(4).' + '\n' + 'Make sure position is a number between 0-8. First player is assigned as "X".' + '\n' + '\n' + 'Here are the playing square positions...' + '\n' + '\n' + exampleBoard)
}

play()

var playerTurn = function(position){
  console.log(inPlay)
  console.log(playingSquare)
  console.log(playingSquare[position] === ' ') 
  console.log(playingSquare[position] >=0) 
  console.log(playingSquare[position] <=8)
  if (inPlay && playingSquare[position] === ' ' && playingSquare[position] >=0 && playingSquare[position] <=8){
    if (turnCount % 2 === 0){
      turnCount ++
      playingSquare[position] = "X"
      checkWin()
    } else {
      turnCount ++
      playingSquare[position] = "O"
      checkWin()
    }
  } else {
    console.log("Position not valid")  
  }
  
  var row1 = playingSquare.slice(0,3).join(" | ") 
  var row2 = playingSquare.slice(3,6).join(" | ")
  var row3 = playingSquare.slice(6,9).join(" | ")

  var board = row1 + boardLine + row2 + boardLine + row3

  if (turnCount === 9){
    console.log(board)
    console.log(" XX ~ ~ DRAW ~ ~ OO" )
    resetBoard()
  } else {
    console.log(board)
  }
}


var checkHorizitally = function(){
  var callPlayingSquare = function(string){
    return playingSquare[0] === string && playingSquare[1] === string && playingSquare[2] === string
  }
  if (callPlayingSquare("X") ||callPlayingSquare("O") ){
    winMessage()
    inPlay = false
    
  } else if (playingSquare[3] === "X" && playingSquare[4] === "X" && playingSquare[5] === "X" || playingSquare[3] === "O" && playingSquare[4] === "O" && playingSquare[5] === "O"){
    winMessage()
    inPlay = false
    
  } else if (playingSquare[6] === "X" && playingSquare[7] === "X" && playingSquare[8] === "X" || playingSquare[6] === "O" && playingSquare[7] === "O" && playingSquare[8] === "O"){
    winMessage()
    inPlay = false
    
  }
}

var checkVertically = function(){
  if (playingSquare[0] === "X" && playingSquare[3] === "X" && playingSquare[6] === "X" || playingSquare[0] === "O" && playingSquare[3] === "O" && playingSquare[6] === "O"){
    winMessage()
    inPlay = false
    
  } else if (playingSquare[1] === "X" && playingSquare[4] === "X" && playingSquare[7] === "X" || playingSquare[1] === "O" && playingSquare[4] === "O" && playingSquare[7] === "O"){
    winMessage()
    inPlay = false
    
  } else if (playingSquare[2] === "X" && playingSquare[5] === "X" && playingSquare[8] === "X" || playingSquare[2] === "O" && playingSquare[5] === "O" && playingSquare[8] === "O"){
    winMessage()
    inPlay = false
    
  }  
}

var checkDiagonallyBottomLeftTopRight = function(){
  if (playingSquare[6] === "X" && playingSquare[4] === "X" && playingSquare[2] === "X" || playingSquare[6] === "O" && playingSquare[4] === "O" && playingSquare[2] === "O"){
    winMessage()
    inPlay = false
    
  }
}

var checkDiagonallyBottomRightTopLeft = function(){
  if (playingSquare[0] === "X" && playingSquare[4] === "X" && playingSquare[8] === "X" || playingSquare[0] === "O" && playingSquare[4] === "O" && playingSquare[8] === "O"){
    winMessage()
    inPlay = false
  }
}

var checkWin = function(){
  checkHorizitally()
  checkVertically()
  checkDiagonallyBottomLeftTopRight()
  checkDiagonallyBottomRightTopLeft()  
}

var resetBoard = function(){
  playingSquare = [' ',' ',' ',' ',' ',' ',' ',' ',' ']
  turnCount = 0
  inPlay = true
  play()
}
