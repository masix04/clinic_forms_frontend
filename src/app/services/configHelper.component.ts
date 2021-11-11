import { Component, Injectable } from "@angular/core";
import { Config } from "protractor";
import { ConfigHelperService } from "./configHelper.service";

@Component({
    selector: 'config-helper-component',

})

@Injectable()
export class ConfigHelperComponent{
    config: Config | undefined;
    headers: any;
    constructor(private configHelperService: ConfigHelperService,)
    {

    }
    // Get JSON data
    showConfig()
    {
        this.configHelperService.getConfig().subscribe((data: Config)=> this.config = {
            clinicUrl: (data as any).clinicUrl,
            textfile: (data as any).textfile,
            date: (data as any).date, 
        });
    }
    // Get Complete HttpResponse
    showConfigResponse()
    {
        this.configHelperService.getConfigResponse().subscribe(response=>{
            const keys = response.headers.keys();
            this.headers = keys.map(key => 
                `${key}: ${response.headers.get(key)}`);
                this.config = { ...response.body};
            });
    }
}