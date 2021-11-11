import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { Config } from "protractor";
// import { catchError, retry } from 'rxjs/Operator';
@Injectable()
export class ConfigHelperService {
    configUrl = 'assets/config.json';

    constructor(private http: HttpClient)
    {

    }
    // Just JSON data
    getConfig()
    {
        return this.http.get<Config>(this.configUrl);
    }
    // With Header and Status - get complete HttpResponse
    getConfigResponse(): Observable<HttpResponse<Config>> 
    {   
        return this.http.get<Config>(
            this.configUrl, {observe : 'response'}
        );
    }
}