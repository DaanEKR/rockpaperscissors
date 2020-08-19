import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'rockpaperscissors';
  points = JSON.parse(localStorage.getItem('points'));
  options = [0, 1, 2]

  ngOnInit(){
    this.points = JSON.parse(localStorage.getItem('points'));
  }
  checkResult(event): void {
    let cpuChoice = this.options[Math.floor(Math.random()*this.options.length)];
    let target = event.target;
    let idAttr = target.attributes.value;
    let value = idAttr.nodeValue;
    console.log(value)
    console.log(cpuChoice)

    if( value == 0 && cpuChoice == 2 || value == 1  && cpuChoice == 0 || value == 2  && cpuChoice == 1){
      let addPoint = this.points+1;
      localStorage.setItem("points", JSON.stringify(addPoint));
      alert('yes')
      this.ngOnInit();
    } else {
      console.log("rip")
    }


  }
}
