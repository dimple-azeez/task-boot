import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import {FormsModule} from '@angular/forms';
import { TemplateComponent } from './template/template.component';
import { LicenseComponent } from './license/license.component';
import { ContactComponent } from './contact/contact.component';
import { MembersComponent } from './members/members.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    TemplateComponent,
    LicenseComponent,
    ContactComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
