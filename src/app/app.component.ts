import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practiceangular';
  value = '';
  getValue(event: any): void {
    console.log(event.target.value)
    this.value = event.target.value;
  }
}
