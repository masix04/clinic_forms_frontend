import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIURL } from './utils/APIURL'; /** Getting BASEURL */
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RestService {
/**
 * All Functions in Nature retruns an 'Observable' = So we have to Subscribe it for use
 */
  constructor(private httpClient: HttpClient, public apis:APIURL) { 
  }

  getPatients()
  {
  /** returns the patients[] array of data from the given url & specified class with Model/Patients.ts created*/
  /** console.log(this.http.get<Patients[]>(this.url)); */
    // return this.httpClient.get<Patients[]>(this.url);
    return this.httpClient.get<Patients[]>(this.apis.BaseUrl+'Patients');
  }
  addPatient(patients:Patients) {
    
    // return this.http.post<Article>(this.url, article, options);
    const headers = new HttpHeaders()
    .set("Content-Type", "application/json"); /**json DATA-tYPE */ 
    const body=JSON.stringify(patients); /**CONVERTS OBJECT IN json String */
    console.log(body)
    return this.httpClient.post<Patients>(this.apis.BaseUrl+'Patients', body,{'headers': headers}); /**Sending post request with URL, Body, Headers */
  }
}
