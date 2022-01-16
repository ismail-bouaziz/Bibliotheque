import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogInService {
  constructor() {

  }
  logIn(email: string, password: string) {
    //after verifying that the cords are valid
    localStorage.setItem("email", email)
    //depends on the respond json attribute a state to the user
    localStorage.setItem("state", "user")
  }
}
