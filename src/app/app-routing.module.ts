import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule,Router } from '@angular/router';
// import { Ex2FormComponent } from './ex-2-form/ex-2-form.component';
import { Ex3FormComponent } from './ex-3-form/ex-3-form.component';
import { FormInputComponent } from './form-input/form-input.component';
import { JsonServerComponent } from './json-server/json-server.component';
import { LoginComponent } from './login/login.component';
// import { APIURL } from './utils/APIURL';
import { TimelineComponent } from './timeline/timeline.component';
import { OktaCallbackComponent, OktaAuthGuard } from '@okta/okta-angular';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
   
  // sample Form Of Copied and Example
  { path : 'sec-form', component: Ex3FormComponent},

  // Working Form , Will use For further Work
  { path : 'On-track-form', component: FormInputComponent},

  // used Json-server with data.json data file & used rest.service.ts to get data from file 
  // And using Web Showing in a Table Form
  /**
   * Steps 
   * 0- In CMD => npm install -g json-server 'MEANING' - If Server is not installed 
   * 1- In CMD => json-server --watch data.json 'MEANING' - Run the REST-SERVER
   */
  { path : 'json-server-data', component: JsonServerComponent},
  
  // In-Progress & Adding features.....
  { path : 'clinic-form', component: FormInputComponent},

  { path : 'login',  component: LoginComponent},

  // Home Component
  { path : 'home', component: HomeComponent},

  //TimeLine Component with an Okta Auth
  { path : 'timeline', component: TimelineComponent, canActivate: [OktaAuthGuard]},

  // callback
  { path : 'callback', component: OktaCallbackComponent},
  // Otherwise redirect to home
  { path : '**', redirectTo: 'home'},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
