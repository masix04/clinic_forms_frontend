import { Component, OnInit, OnDestroy, Injectable } from "@angular/core";
import { FormControl } from "@angular/forms";
import { HttpClient} from '@angular/common/http';
import { inputHelperService } from "../services/inputsHelper.service";

@Component({
    selector: 'form-input',
    templateUrl: './inputs.component.html',
    styleUrls: ['./inputs.component.css'],
})
@Injectable()
export class inputComponent implements OnInit, OnDestroy{
    
    patient_name = new FormControl('');
    age = new FormControl('');
    address = new FormControl('');
    phone_number = new FormControl('');
    today = new Date();
    patients = new Array;

    constructor(private inputshelperservice: inputHelperService)
    {
        this.inputshelperservice.addPatientRecord(this.patient_name).subscribe(patient => 
            this.patients.push(this.patient_name));
    }
    ngOnInit()
    {

    }
    ngOnDestroy()
    {

    }
}