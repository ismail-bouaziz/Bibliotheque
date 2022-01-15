import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userDashboardOn: boolean = false;
  signInScreenOn: boolean = false;
  welcomeScreenOn: boolean = true;
  scrollTo(id: string): void {
    var element = document.getElementById(id)
    window.scroll({
      top: (element != undefined) ? element.offsetTop - element.offsetHeight - 85 : 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  switchToSignIn(): void {
    this.signInScreenOn = true;
    this.welcomeScreenOn = false;
  }
  switchToHomeScreen(): void {
    if (this.signInScreenOn) {
      this.signInScreenOn = false;
      this.welcomeScreenOn = true;
    }
  }
}
