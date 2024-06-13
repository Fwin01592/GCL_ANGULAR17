import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  constructor(private router: Router) { }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
  onFinalSubmit() {
    console.log('Final submission logic here');
  }

}
