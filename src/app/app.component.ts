import { Component } from '@angular/core';
import { LogInService } from './log-in.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userDashboardOn: boolean = false;
  adminDashboardOn: boolean = false;
  signInScreenOn: boolean = false;
  welcomeScreenOn: boolean = true;
  ngOnInit(): void {
    // assert if an old session exists
    const state = localStorage.getItem("state");
    if (state != null) {
      this.logIn(true);
    }
  }
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
  logOut(): void {
    localStorage.clear();
    this.userDashboardOn = false;
    this.adminDashboardOn = false;
    this.signInScreenOn = false;
    this.welcomeScreenOn = true;
  }
  logIn(loggedIn: boolean): void {
    if (loggedIn) {
      const state = localStorage.getItem("state");
      this.signInScreenOn = false;
      this.welcomeScreenOn = false;
      console.log(state)
      if (state == "user") {
        this.userDashboardOn = true;
        this.adminDashboardOn = false;
      } else {
        this.userDashboardOn = false;
        this.adminDashboardOn = true;
      }
    }
  }
}
