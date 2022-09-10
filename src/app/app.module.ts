import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent //this tells angular this component becomes part of this module - but typescript still can't find it, unless it's imported above.
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent] //'bootstrap' tells angular to put this component at the root
})
export class AppModule { }


//modules are used to bundle components into packages.
//