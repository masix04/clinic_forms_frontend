import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap';
import { ServerService } from '../services/server.service';
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  form: FormGroup;
  modalRef: BsModalRef;

  events: any[] = [];
  currentEvent: any = {
    name:'', age:0, address:'', phoneNumber:'', appointed_date:'', gender:'', prescription:''
  };

  modalCallback: () => void;

  constructor(private fb: FormBuilder, private modalService: BsModalRef, private server: ServerService) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: [this.currentEvent.name, Validators.required],
      age: [this.currentEvent.age, Validators.required],
      address: [this.currentEvent.address, Validators.required],
      phoneNumber: [this.currentEvent.phoneNumber, Validators.required],
      appointed_date: [this.currentEvent.appointed_date, Validators.required],
      gender: [this.currentEvent.gender, Validators.required],
      prescription: [this.currentEvent.prescription, Validators.required]
    });
    this.getEvents();
  }

  private getEvents() {
    this.server.getEvents().then((response: any) => {
      console.log('Response', response);
      this.events = response.map((ev) => {
        ev.body = ev.appointed_date;
        ev.header = ev.name;
        ev.icon = 'fa-clock-o';
        return ev;
      });
    });
  }

  private updateForm() {
    this.form.setValue({
      name: this.currentEvent.name,
      age: this.currentEvent.age,
      address: this.currentEvent.address,
      phoneNumber: this.currentEvent.phoneNumber,
      appointed_date: this.currentEvent.appointed_date,
      gender: this.currentEvent.gender,
      prescription: this.currentEvent.prescription,
    });
  }

  addEvent(template) {
    this.currentEvent = {
      name:'', age:0, address:'', phoneNumber:'', appointed_date:'', gender:'', prescription:''
    };
    this.updateForm();
    this.modalCallback = this.createEvent.bind(this);
    this.modalRef = this.modalService.content(template);// 'show()' changed to 'content()'
  }

  createEvent() {
    const newEvent = {
      name: this.form.get('name').value,
      age: this.form.get('age').value,
      address: this.form.get('address').value,
      phoneNumber: this.form.get('phoneNumber').value,
      appointed_date: this.form.get('appointed_date').value,
      gender: this.form.get('gender').value,
      prescription: this.form.get('prescription').value,
    };
    this.modalRef.hide();
    this.server.createEvent(newEvent).then(() => {
      this.getEvents();
    });
  }

  editEvent(index, template) {
    this.currentEvent = this.events[index];
    this.updateForm();
    this.modalCallback = this.updateEvent.bind(this);
    this.modalRef = this.modalService.content(template);// 'show()' changed to 'content()'
  }

  private updateEvent() {
    const eventData = {
      // id: this.currentEvent.id,
      name: this.form.get('name').value,
      age: this.form.get('age').value,
      address: this.form.get('address').value,
      phoneNumber: this.form.get('phoneNumber').value,
      appointed_date: this.form.get('appointed_date').value,
      gender: this.form.get('gender').value,
      prescription: this.form.get('prescription').value,
    };
    this.modalRef.hide();
    this.server.updateEvent(eventData).then(() => { // Using servers Function
      this.getEvents();
    });
  }

  deleteEvent(index) {
    this.server.deleteEvent(this.events[index]).then(() => {
      this.getEvents();
    });
  }

  onCancel() {
    this.modalRef.hide();
  }
}
