import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ]
})
export class CheckboxComponent implements ControlValueAccessor{
  @Input() formControl: FormControl= new FormControl();
  @Input() placeholder:string='';
  @Input() showAsToggle: boolean = false;

  @Input() readOnly: boolean = false;

 @Input() value: boolean=false;

  onChange = (value: any) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    if(this.value!=value)
    this.formControl.setValue(this.value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  onToggle(){
    this.value=!this.value;
    this.formControl.setValue(this.value);
    this.onChange(this.value)
  }
  
  
}
