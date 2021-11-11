import { Component, Injectable } from "@angular/core";
import { inputHelperService } from "./inputsHelper.service";
@Component({

})
@Injectable()
export class inputsHelperComponent{
    
    constructor(private inputshelperservice: inputHelperService)
    {
        // this.inputshelperservice.addPatientRecord('Patient_1').subscribe(patient => this.patient.push(hero));
    }
    
}