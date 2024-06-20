import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-application',
  templateUrl: './new-application.component.html',
  styleUrl: './new-application.component.css'
})
export class NewApplicationComponent {
  constructor(private router: Router){}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
  onFinalSubmit() {
    console.log('Final submission logic here');
  }

}
