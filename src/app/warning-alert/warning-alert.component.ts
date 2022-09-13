import { Component } from '@angular/core'
@Component({
    selector: 'app-warning-alert',
    template: `<h1>Hey!  You're a software developer!</h1>`,
    styles: [`
        h1 {
            background: mistyrose;
            padding: 1em;
            border: 1px solid red;
        }
    `]
})
export class WarningAlertComponent{

}