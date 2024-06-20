import { Component, Input, OnInit, OnChanges, input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, AbstractControl ,Validators} from '@angular/forms';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit, OnChanges {
  @Input() name: string = '';
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() type: string = '';
  @Input() value: any;
  @Input() options: any[] = [];
  @Input() schema: any[] = [];
  @Input() required: boolean = false;
  @Input() readOnly: boolean = false;
  @Input()formControl!: FormControl;
  @Input() formGroup :any ;
  @Input() dependsOn: string[] = [];
  @Input() showAsToggle: boolean = false;

  context: any = {};
  constructor(private fb: FormBuilder) {
    if(!this.formGroup)
     this.formGroup = this.fb.group({});
  }

  ngOnInit(): void {
    console.log('formControl'+ this.formControl);
    if (this.formGroup) {
      let control= this.formGroup.get(this.name)
      if(!control && this.name)
        this.addFormControl(this.name,this.value)
    }
      this.createFormControls(this.schema);
  }

  ngOnChanges(): void {
      if(this.name)
      this.addFormControl(this.name,this.value)
  }
  createFormControls(schema: any[]): void {
    schema.forEach((field: any) => {
      const validators = [];
      if (field.required) {
        validators.push(Validators.required);
      }
      if (field.type === 'email') {
        validators.push(Validators.email);
      }
      if(this.formGroup && this.formGroup.get(field.name))
       this.formControl=this.formGroup.get(field.name);
      if(this.formControl && !this.formControl.value){
        this.formControl.setErrors({ invalid: true})
        this.formControl.setValidators(validators)
      }
      this.formGroup.addControl(field.name, this.fb.control(field.value, validators));
    });
  }

  getErrorMessage(controlName: string): string {
    const control = this.formGroup.get(controlName);
    if (control?.hasError('required')) {
      return 'Required';
    }
    if (control?.hasError('email')) {
      return 'Invalid formate';
    }
    if (control?.hasError('minlength')) {
      return `Minimum length is ${control.errors?.['minlength'].requiredLength}`;
    }
    if (control?.hasError('maxlength')) {
      return `Maximum length is ${control.errors?.['maxlength'].requiredLength}`;
    }
    // Add more error checks as needed
    return '';
  }

  createFormGroup(schema: any[]): void {
    schema.forEach(field => {
      this.addFormControl(field.name, field.value);
    });
  }

  addFormControl(name: string, value: any): void {
    if (!this.formGroup.controls[name]) {
      this.formGroup.addControl(name, new FormControl(value));
      this.formControl=this.formGroup.controls[name];
    }
  }

  getContext(name: string) {
    let control :FormControl;
    if( this.formGroup.controls[name] as FormControl){
      control= this.formGroup.controls[name]
    }else if(this.formControl){
      control=this.formControl
    }else{
      this.addFormControl(name,null);
      control=this.formGroup.controls[name]
    }
    //  this.formGroup.controls[name] as FormControl? this.formGroup.controls[name]: (this.formControl? this.formControl: this.addFormControl(name,null));
    return {
      formControl: control,
      value: control&& control.value,
      placeholder: this.getPlaceholder(name),
      required: this.required,
      options: this.getOptions(name),
      dependsOn:this.dependsOn

    };
  }

  getPlaceholder(name: string): string {
    const field = this.schema.find(field => field.name === name);
    return field?.placeholder || this.placeholder;
  }

  getOptions(name: string): any[] {
    if(this.schema && this.schema.length){
      const field = this.schema?.length?this.schema.find(field => field.name === name):this;
      this.options= field?.options || [];
      this.dependsOn=field && field.dependsOn ? field.dependsOn: [];
      this.name=field && field.name ?field.name:'';
      this.required=field?.required;
      this.value=field?.value;
      this.readOnly=field?.readOnly;
      this.showAsToggle=field?.showAsToggle;
      return field?.options || [];
    }
    else{
      return this.options
    }
  }

}
