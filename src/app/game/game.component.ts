import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  isItXTurn: boolean = false;
  winner: string = "";
  isGameStarted: boolean = false;
  whosTurn: string = "X";
  board: any[] = [];
  counter: number = 0;
    
  newGame() {
    this.isGameStarted = true;
    this.isItXTurn = true;
    this.whosTurn = "X";
    this.counter = 0;
    this.winner = "";
    for (let i: number = 0; i < 9; i++) {
      this.board = this.board.fill(null, 0);
    }
  }

  move(row: number) {
    

    if (this.isGameStarted) {
    this.counter++;
    if (!this.board[row]) {
      this.board[row] = this.whosTurn;

      if (this.isItXTurn) {
        this.whosTurn = "O";
        this.isItXTurn = false;
      }
      else {
        this.whosTurn = "X";
        this.isItXTurn = true;
      }
    }
    
  }

  this.gameStatus();
  }

  gameStatus() {
    
    //horizontal
    if (this.board[0] && this.board[0] == this.board[1] && this.board[1] == this.board[2]) {
      this.winner = this.isItXTurn ? "O" : "X";
      this.isGameStarted = false;
    }
    if (this.board[3] && this.board[3] == this.board[4] && this.board[4] == this.board[5]) {
      this.winner = this.isItXTurn ? "O" : "X";
      this.isGameStarted = false;
    }
    if (this.board[6] && this.board[6] == this.board[7] && this.board[7] == this.board[8]) {
      this.winner = this.isItXTurn ? "O" : "X";
      this.isGameStarted = false;
    }
    //vertical
    if (this.board[0] && this.board[0] == this.board[3] && this.board[3] == this.board[6]) {
      this.winner = this.isItXTurn ? "O" : "X";
      this.isGameStarted = false;
    }
    if (this.board[1] && this.board[1] == this.board[4] && this.board[4] == this.board[7]) {
      this.winner = this.isItXTurn ? "O" : "X";
      this.isGameStarted = false;
    }
    if (this.board[2] && this.board[2] == this.board[5] && this.board[5] == this.board[8]) {
      this.winner = this.isItXTurn ? "O" : "X";
      this.isGameStarted = false;
    }



    //diagonal
    if (this.board[0] && this.board[0] == this.board[4] && this.board[4] == this.board[8]) {
      this.winner = this.isItXTurn ? "O" : "X";
      this.isGameStarted = false;
    }
    if (this.board[2] && this.board[2] == this.board[4] && this.board[4] == this.board[6]) {
      this.winner = this.isItXTurn ? "O" : "X";
      this.isGameStarted = false;
    }


    if (this.counter === 9) {
      
      this.isGameStarted = false;
    } 

  }



}
