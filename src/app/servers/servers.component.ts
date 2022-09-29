import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-servers', //this is a way to select via component name,
  //selector: '[app-servers]', //this is a way to essentially make app-servers an attribute, and select by attribute (like html attribute)
  selector: '.app-servers', //this is a way to select by class name
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  styles: [`.moreThan5 { color: white;}`]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreated = false;
  displayButtonText = 'Display Details';
  displaySecretText = false;
  serverName = 'Test server';
  secretText = '';
  serverCreationStatus = 'no server was created!';
  servers = ['spongebobServer', 'patrickStarServer']
  timestamps = [];
  
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer = true
    }, 2000)
  }
  ngOnInit(): void {
  }
  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = `server was created! Name: ${this.serverName}`;
    this.servers.push(this.serverName);
  }
  onUpdateServerName(event: any){ //pass in the event as the parameter
    //console.log(event)
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  onDisplaySecretText() {
    if(this.displaySecretText === false){
      this.displaySecretText = true;
      this.secretText = `top secret engineering text displayed!`;
      this.displayButtonText = 'Hide Details';
      this.timestamps.push(new Date());
    }
    else {
      this.displaySecretText = false;
      this.secretText = ``;
      this.displayButtonText = 'Display Details';
      this.timestamps.push(new Date());
    }
  }
  setColor() {
    return this.timestamps.length >= 5 ? 'blue' : 'none'
  }
  // constructor() {
  //   this.timestamps.length >= 5  ? 'moreThan5' : ''
  // }
}


//add a button which says 'display details'
//add a paragraph w text content of your choice
//when button is clicked, display text. when clicked again, hide text.
//log all button clicks in an array and output that array below the secret paragraph (such as timestamps of when clicked)
//starting at the 5th timestamp, give all future log items a blue background (ngStyle) and white color (ngClass)