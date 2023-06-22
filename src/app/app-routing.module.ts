import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FirstComponent } from './first/first.component';
import { LicenseComponent } from './license/license.component';
import { MembersComponent } from './members/members.component';
import { TemplateComponent } from './template/template.component';

const routes: Routes = [
  {
    path:"home", component:FirstComponent
  },
  {
    path:"license", component:LicenseComponent
  },
  {
    path:"template", component:TemplateComponent
  },
  {
    path:"contact", component:ContactComponent
  },
  {
    path:"members", component:MembersComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
