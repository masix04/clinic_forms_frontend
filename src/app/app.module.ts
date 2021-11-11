import { BrowserModule } from '@angular/platform-browser'; // ---
import { NgModule } from '@angular/core'; // ---

import { HttpClientModule } from '@angular/common/http'; // ---
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { inputComponent } from './inputs/inputs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormInputComponent } from './form-input/form-input.component';
// import { Ex2FormComponent } from './ex-2-form/ex-2-form.component';
import { FormsModule } from '@angular/forms';
import { Ex3FormComponent } from './ex-3-form/ex-3-form.component';
import { JsonServerComponent } from './json-server/json-server.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MyserviceService } from './myservice.service';
// import { inputHelperService } from './services/inputsHelper.service';
// import { BrowserAnimationModule } from "@angular/platform-browser/animations";
// import { JsonServerComponent } from './json-server/json-server.component';
import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxTimelineModule } from 'ngx-timeline';

import { ModalModule } from 'ngx-bootstrap/modal';
import { HomeComponent } from './home/home.component';
import { TimelineComponent } from './timeline/timeline.component';
import { APIURL } from './utils/APIURL';

const oktaConfig = {
  issuer: 'https://dev-8842083.okta.com/oauth2/default',
  clientId: '0oa251uetdfBb9Ii25d7',
  redirectUri: window.location.origin + '/callback'
};
@NgModule({
  // DeclerationArray =>  For Components, Pipes, Directives.
  declarations: [
    AppComponent,
    FormInputComponent,
    // Ex2FormComponent,
    Ex3FormComponent,
    // inputComponent,
    JsonServerComponent,
    LoginComponent,
    HomeComponent,
    TimelineComponent
  ],
  // imports array =>  For BrowserModules, HttpModules FormsModule
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule, // ----
    FormsModule, BrowserAnimationsModule,
    OktaAuthModule,
    NgxTimelineModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    // inputHelperService
  ],
  providers: [{ provide: OKTA_CONFIG, useValue: oktaConfig},APIURL],
  bootstrap: [AppComponent]
})
export class AppModule { }
