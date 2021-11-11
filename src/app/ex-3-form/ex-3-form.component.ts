import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

@Component({
    selector: 'ex3form-comp',
    templateUrl:'./ex-3-form.component.html',
})
export class Ex3FormComponent implements OnInit, OnDestroy{

    emailId: any; 
    formdata: FormGroup;

    Username: any;
    Email: any;
    Password: any;
    patientData: FormGroup;
    
    constructor() { }  
    ngOnInit() { 
        this.formdata = new FormGroup({ 
            emailid: new FormControl('dask'),
            passwd: new FormControl(''),
        }); 
        this.patientData = new FormGroup({
            ex2form_Name: new FormControl('', Validators.minLength(5)),
            ex2form_Email: new FormControl(''),
            ex2form_Password: new FormControl(''),
        });
    } 
    onClickSubmit(data) 
    {
        this.emailId = data.emailid;
    }
    Submit(data)
    {
        console.log(data);
        this.Username = data.ex2form_Name;
        this.Email = data.ex2form_Email;
        this.Password = data.ex2form_Password;
    }
    ngOnDestroy(){}
}