import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ServersComponent } from "./servers/servers.component";
import { DataPasserComponent } from "./data-passer/data-passer.component";
import { FormSubmitterComponent } from './form-submitter/form-submitter.component';

@NgModule({
  declarations: [AppComponent, ServersComponent, DataPasserComponent, FormSubmitterComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
