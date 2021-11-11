class Patients {
    
    name:string;
    age: number;
    gender:string;
    phoneNumber:string;
    address:string;
    firstVisitDate:String;
    firstVisittime:string;
    prescription:string;

    constructor(name,age,gender,phoneNumber,address,firstVisitDate,firstVisittime,prescription)
    {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.firstVisitDate = firstVisitDate;
        this.firstVisittime = firstVisittime;
        this.prescription = prescription;
    }
}