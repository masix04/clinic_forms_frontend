import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DatePipe } from "@angular/common";
import { RestService } from "../rest.service";
import { HttpClient } from "@angular/common/http";
import { APIURL } from "../utils/APIURL";

@Component({
    selector: 'app-form-input',
    templateUrl: './form-input.component.html',
    styleUrls: ['./form-input.component.css'],
    providers: [DatePipe],
})
export class FormInputComponent {
    //Objects of FormGroups shows HotDataShowing While Typing
    name = new FormControl('');
    phone_number = new FormControl('');
    address = new FormControl('');
    age = new FormControl('');
    d = new Date();
    date; time;
    // patient_data:Patients[];
    patient_data={
        name: "",
        age: 0,
        gender: "",
        phoneNumber: "",
        address:"",
        firstVisitDate: "",
        firstVisittime: "",
        prescription: ""

    };

    patientAppointment: FormGroup;
    //Variables to save record
    p_name: any;
    p_age: number;
    p_gender: any;
    p_phoneNumber: number;
    p_address: any;
    p_firstVisitDate: any;
    p_firstVisittime: any;
    afterfirstvisitedDate: Date[];
    p_prescription: any;

    status=false;
    constructor(public restHelper: RestService,public httpClient:HttpClient,public apis:APIURL,public datePipe:DatePipe)
    {
        this.date = this.d.getFullYear()+'-'+this.d.getDate()+'-'+this.d.getMonth();
        let hours = (this.d.getHours()) % 12 || 12; /** Formating in 12 hours NOT 24 hours - eg: 5 instead of 17 */
        this.time = hours+':'+this.d.getMinutes()+':'+this.d.getSeconds();
    }
    SavePARecord(data)
    {
        this.patient_data['name'] = data.name;
        this.patient_data['age'] = data.age;
        this.patient_data['gender'] = data.gender;
        this.patient_data['phoneNumber'] = data.phone_number;
        this.patient_data['address'] = data.address;
        this.patient_data['firstVisitDate'] = this.date;
        this.patient_data['firstVisittime'] = this.time;
        this.patient_data['prescription'] = data.prescription;
        // console.log(this.patient_data);

        this.restHelper.addPatient(this.patient_data).subscribe(Form_Data=>{
            console.log(Form_Data);
            this.refreshPatients();
        })
    }
    /** WORKING */ /**rEQUIRES EMPTY OBJECT in data.json file */
    post(){
        this.httpClient.post(this.apis.BaseUrl+'Patients',
    {
        "courseListIcon": "...",
        "description": "TEST",
        "iconUrl": "..",
        "longDescription": "...",
        "url": "new-url"
    })
    .subscribe(
        (val) => {
            console.log("POST call successful value returned in body", 
                        val);
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
        });
    }
    refreshPatients() {
        this.restHelper.getPatients().subscribe(response => {
            console.log(response)
            // this.patient_data = response;
        })      
    }
    showFormSTATS()
    {
        this.status=true;
    }
    ngOnInit()
    {
        this.patientAppointment = new FormGroup({
            
            name : new FormControl('', Validators.required),
            phone_number : new FormControl('', Validators.required),
            address : new FormControl('', Validators.required),
            age : new FormControl('', Validators.required),
            prescription : new FormControl('', Validators.required),
            gender : new FormControl('', Validators.required),
            visiteddate : new FormControl(''),
            visitedtime : new FormControl(''),
        });
    }
}