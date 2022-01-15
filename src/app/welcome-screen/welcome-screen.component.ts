import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.css']
})
export class WelcomeScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var descriptionElement = document.getElementById("description-title-Library");
    var titleElement = document.getElementById("title-Library");

    $(document).ready(function () {
      if (descriptionElement != undefined) {
        descriptionElement.classList.remove("opacity0");
      }
      if (titleElement != undefined) {
        titleElement.classList.remove("opacity0");
      }
    });
  }

}
