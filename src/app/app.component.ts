import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  choosenButton = '';
  title = 'rockpaperscissors';
  points = JSON.parse(localStorage.getItem('points'));
  showResult = false;
  winner: string;
  opponentChoice = '';

  ngOnInit(){
    this.getData()
  }

  getData(){
    this.points = JSON.parse(localStorage.getItem('points'));
  }

  resetScore(){
    localStorage.setItem("points", JSON.stringify(0));
    this.ngOnInit();
  }

  goBack(){
    this.choosenButton = '';
    this.winner = '';
  }

  checkResult(choosenButton): void {
    const buttons = ['rock', 'paper', 'scissors'];
    const cpuChoice = buttons[Math.floor(Math.random()*buttons.length)];
    if(choosenButton === 'paper' && cpuChoice === 'rock' || choosenButton === 'scissors'  && cpuChoice === 'paper' || choosenButton === 'rock'  && cpuChoice === 'scissors'){
      const addPoint = this.points+1;
      localStorage.setItem("points", JSON.stringify(addPoint));
      this.winner = 'YOU WON!';
      this.getData();
    } else {
      this.winner = 'YOU LOST!';
    }

    this.opponentChoice = cpuChoice;
  }
}
