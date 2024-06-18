import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formGroup: FormGroup;

  constructor(private fb: FormBuilder,private router: Router) {
    this.formGroup = this.fb.group({});
  }

  onSubmit() {
    if (this.formGroup.valid) {
      console.log('Form Submitted', this.formGroup.value);
      this.router.navigate(['/dashboard']);
     // this.formSubmit.emit();
      } else {
      this.formGroup.markAllAsTouched();
    }
  }
  createFormGroup(schema: any[]): void {
    schema.forEach(field => {
      this.addFormControl(field.name, field.value);
    });
  }

  addFormControl(name: string, value?: any): void {
    if (!this.formGroup.controls[name]) {
      this.formGroup.addControl(name, new FormControl(value));
    }
  }

  getControl(name: string): FormControl {
    this.addFormControl(name);
    return this.formGroup.controls[name] as FormControl;
  }
}
