import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rockpaperscissors';


  checkResult(event): void {
    let target = event.target || event.srcElement || event.currentTarget;
    let idAttr = target.attributes.value;
    let value = idAttr.nodeValue;
    console.log(value)
  }
}
