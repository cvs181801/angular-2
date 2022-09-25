import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {
  username = '';

  onEnterUsername(){
    this.username = ''
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}


///add an input field which updates a property (username) via two way binding
//output the username property using sttring interpolation
//add a button which may only be cliecked if username is not an empty string
//upon clicking the button, the username should be reset to an empty sttring