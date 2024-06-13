import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-consent-details',
  templateUrl: './consent-details.component.html',
  styleUrl: './consent-details.component.css'
})
export class ConsentDetailsComponent {
  @Output() formSubmit = new EventEmitter<void>();
  formGroup: FormGroup;
  title = 'consentDetails';
  // schema=  [
  //   { name: 'consentConfirmationby', label: 'Consent Confirmation by', type: 'select', options: [
  //     { value: 'uploadMembershipForm', key: 'Upload Membership Form' },
  //     { value: 'smartLinkForOTP', key: 'smart Link For OTP' },
  //   ], required: true,value:'uploadMembershipForm' },
  //   {name:'docUpload', type:'file', require:true}
  // ]

  options= [
        { value: 'uploadMembershipForm', key: 'Upload Membership Form' },
        { value: 'smartLinkForOTP', key: 'smart Link For OTP' },
      ]

  // schema=[
   
  //     { name: 'consentConfirmationby', label: 'Consent Confirmation by', type: 'select', options: [
  //           { value: 'uploadMembershipForm', key: 'Upload Membership Form' },
  //           { value: 'smartLinkForOTP', key: 'smart Link For OTP' }], required: true,value:'uploadMembershipForm' },
  //     // {name:'docUpload', type:'file', require:true}
  // ];

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({});
  }


  onSubmit() {
      let schemakeys= Object.keys(this.formGroup.value)
      schemakeys.forEach((key :any) => {
        this.formGroup.value[key]= this.formGroup.get(key)?.value;
      });
      console.log('Form Submitted', this.formGroup.value);
      this.formSubmit.emit();
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
