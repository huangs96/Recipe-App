import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project1';

  output = false;

  username = '';

  constructor() {
    setTimeout(() => {
      this.output = true;
        }, 2000);
  };


  onCreateUser() {
    this.username = 'username was created'
  }

  deleteUser() {
    this.username = '';
  }


}
