import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true
    }
  ]
})
export class RadioComponent implements ControlValueAccessor{
  @Input() formControl: FormControl= new FormControl();
  @Input() required: boolean=false;
  @Input() options = [{key:undefined, value:undefined}];
  @Input() readOnly: boolean = false;

  value: any ;

  onChange = (value: any) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onSelect(value: any): void {
    this.value = value;
    if (this.onChange) {
      this.onChange(value);
    }
    this.onTouched();
    this.formControl.setValue(value);
  }

  clearSelection(): void {
    this.value = null;
    if (this.onChange) {
      this.onChange(null);
    } 
    this.onTouched();
    this.formControl.setValue(null);
  }
}
