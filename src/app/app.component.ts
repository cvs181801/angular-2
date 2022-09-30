import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: '<h1>HAHHAHAHA</h1>',//called an inline template to render html
  styleUrls: ['./app.component.css'],
  // styles: [`
  // h1
  //   {color: red}
  // `] can also take the inline approach if you prefer!
})
export class AppComponent {
  title = 'angular-2';
  serverElements = [{type: 'spongebobserver', name: 'spongebob', content: "I'm ready!"}];
  //servers = ['spongebobServer', 'patrickStarServer'];

  // onCreateServer(serverCreated: boolean, serverCreationStatus: string, serverName: string ){
  //   serverCreated = true;
  //   serverCreationStatus = `server was created! Name: ${serverName}`;
  //   this.servers.push(serverName);
  // }

  tryThisClick(boomData: {boomName: string, boomContent: string}){
    this.serverElements.push({
      type: 'boom',
      name: boomData.boomName,
      content: boomData.boomContent
    })
  }

}
//databinding is communication between typescript and HTML.
//string interpolation: {{some string}} 
//property binding.: [property] = data
//from tthe other direction, html to typescript, we can react to user events / mouse events etc using event binding
//(event) = 'expression'
//combo of both; two way binding: [(ngModel)] = 'data'