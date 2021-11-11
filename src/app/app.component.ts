import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'clinic-form';
  private router: Route;
  constructor(private route: Router)
  {
    // console.log(route.routerState.snapshot.url.includes('json-server-data'));
  }
  ngOnInit()
  {
    // console.log(this.router);
  }
}
