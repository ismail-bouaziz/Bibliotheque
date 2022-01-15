import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in-screen',
  templateUrl: './sign-in-screen.component.html',
  styleUrls: ['./sign-in-screen.component.css']
})
export class SignInScreenComponent implements OnInit {
  registerScreenOn: boolean = false;
  constructor() {

  }
  toggleRegistration(): void {
    this.registerScreenOn = !this.registerScreenOn;
  }
  ngOnInit(): void {
  }

}
