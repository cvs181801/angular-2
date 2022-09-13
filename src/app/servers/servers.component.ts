import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-servers', this is a way to select via component name,
  //selector: '[app-servers]', //this is a way to essentially make app-servers an attribute, and select by attribute (like html attribute)
  selector: '.app-servers', //this is a way to select by class name
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
