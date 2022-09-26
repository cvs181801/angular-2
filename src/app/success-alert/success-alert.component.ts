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

//directives are instructions in the DOM. Components instruct angular to add the content in that spot on the DOM.
//angualr has some built in directives 
//components are directives, with a template.
//directives without a template : we can create custom directives in angular
//ngif directive
//attribute directives: they don't add an html element to the DOM, but do influence HTML attributes for the element they're placed on.