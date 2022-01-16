import { Component, OnInit } from '@angular/core';
import { LogInService } from '../log-in.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sign-in-screen',
  templateUrl: './sign-in-screen.component.html',
  styleUrls: ['./sign-in-screen.component.css']
})
export class SignInScreenComponent implements OnInit {
  @Output() loggedIn = new EventEmitter<boolean>(false);
  registerScreenOn: boolean = false;
  constructor(private logInService: LogInService) {

  }
  toggleRegistration(): void {
    this.registerScreenOn = !this.registerScreenOn;
  }
  ngOnInit(): void {
  }
  logIn(): void {
    this.logInService.logIn("", "");
    this.loggedIn.emit(true);
  }
}
