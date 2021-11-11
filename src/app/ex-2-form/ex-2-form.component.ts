import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
    selector: 'app-ex2form-comp',
    templateUrl: './ex-2-form.component.html',
    styleUrls: ['./ex-2-form.component.css']
})
export class Ex2FormComponent implements OnInit, OnDestroy{
    
    title="Ex-2-Form";
    emailId="";
    username="";
    Password="";
    formData: FormGroup;
    constructor()
    {

    }
    ngOnInit()
    {
        this.formData = new FormGroup({
            ex2form_Name: new FormControl(''),
            ex2form_Email: new FormControl(''),
            ex2form_Password: new FormControl(''),
        })
    }
    onClickSubmit(data: any)
    {
        this.emailId = data.ex2form_Email;
    }
    ngOnDestroy()
    {

    }
}