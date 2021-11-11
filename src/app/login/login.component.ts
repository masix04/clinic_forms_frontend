import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
@Component({
    selector: 'login-comp',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit
{
    authorityAccess;
    username;
    password;

    constructor()
    {

    }
    ngOnInit()
    {
        this.authorityAccess = new FormGroup({
           username : new FormControl(''),
            password : new FormControl(''),
        })
    }
    VerifyUser(data:any)
    {
        this.username = data.username;
        this.password = data.password;
    }

}