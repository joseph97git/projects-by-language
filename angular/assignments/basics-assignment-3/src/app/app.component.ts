import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .whiteFive {
      color: white;
    }
  `]
})
export class AppComponent {
  displayPassword = false;
  log = [];
  
  toggleDisplay() {
    this.displayPassword = !this.displayPassword;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}
