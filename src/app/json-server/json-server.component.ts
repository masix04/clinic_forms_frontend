import { Component } from '@angular/core';
import { RestService } from '.././rest.service';
import { APIURL } from '../utils/APIURL';

@Component({
    selector:'json-server-comp',
    templateUrl: './json-server.component.html',
    styleUrls: ['./json-server.component.css'],
})

export class JsonServerComponent {
    //Columns of Table -- to show data in table
  columns = ["Patient Name", "Age", "Address", "Phone number", "Gender", "Prescription", "Date", "Time"];

  // Also index as Mentioned in data.json
  index = ["Name", "Age", "Gender", "PhoneNumber", "Address", "FirstVisitDate", "FirstVisittime", "Prescription"];

  // Custom class holding data array - Patients
  patients: Patients[] = [];

  constructor(private rest: RestService, public apis: APIURL)
  {}
  
  ngOnInit()
  {
    this.rest.getPatients().subscribe((response) => {
        this.patients = response;
        console.log(response);
    })
      // (error) => console.log(error))
  }
  ngOnDestroy()
  {

  }
}