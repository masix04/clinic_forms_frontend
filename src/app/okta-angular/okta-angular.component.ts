import { Component, OnInit } from "@angular/core";
import { OktaAuthService } from "@okta/okta-angular";

@Component({
    selector:'okta-angular-express-MEAN',
    templateUrl: './okta-angular.component.html',
})
export class OktaAngularComponent implements OnInit{
    title: 'Timeline-Client';
    isAuthenticated: boolean;

    constructor(public oktaAuth: OktaAuthService)
    {
        // subscribe to authentication state changes
        this.oktaAuth.$authenticationState.subscribe(
            (is_Authenticated: boolean) =>this.isAuthenticated = is_Authenticated
        );
    }
    // get authentication state for immediate use
    async ngOnInit()
    {
        this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    }
    async login()
    {
        // will trigger a browser redirect to the Okta login page
        await this.oktaAuth.signInWithRedirect();
    }
    async logout()
    {
        // logout the user
        await this.oktaAuth.signOut();
    }
}