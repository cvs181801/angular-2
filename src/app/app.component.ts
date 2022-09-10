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
}
//small change 