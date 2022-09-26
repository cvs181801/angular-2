import { Component } from "@angular/core";

@Component({ //this is a decorator, imported above. It allows you to enhance your class components. we pass a javascript object which
    //tells angular what to do with this class.
    selector:'app-server', //convention calls to start this name with app-. this is an html tag which allows you to use 
    //this component later across your project.
    templateUrl: './server.component.html', //points to the html file using the relative path. template or templateUrl mus be present at all times
    styles: [`.online { background: aqua;}`] //points to the directive in the html which controls the styling
})

export class ServerComponent {
    title: string = "server"; //let's render this string in the html using string interpolation. check the html file to see it in action.
    serverId: number = 10;
    serverStatus = 'offline';
    sayHi() {return `'Hi!!!' ${this.title}`} //this is the syntax for defining a method in TS.
    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
    }
    getServerStatus(){
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus === 'online' ? 'blue' : 'orange'
    }
}