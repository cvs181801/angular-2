import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-servers', this is a way to select via component name,
  //selector: '[app-servers]', //this is a way to essentially make app-servers an attribute, and select by attribute (like html attribute)
  selector: '.app-servers', //this is a way to select by class name
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverName = 'Test server';
  serverCreationStatus = 'no server was created!';
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer = true
    }, 2000)
  }
  ngOnInit(): void {
  }
  onCreateServer(){
    this.serverCreationStatus = `server was created! Name: ${this.serverName}`
  }
  onUpdateServerName(event: any){ //pass in the event as the parameter
    //console.log(event)
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
