import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, NgModel, Validators } from '@angular/forms';
@Component({
  selector: 'app-integer',
  templateUrl: './integer.component.html',
  styleUrl: './integer.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => IntegerComponent),
      multi: true
    }
  ]
})
export class IntegerComponent implements ControlValueAccessor{
  @Input() formControl: FormControl= new FormControl();
  @Input() required: boolean=false;
  @Input() readOnly: boolean = false;
  @Input() min:number|undefined
  @Input() max:number|undefined

  value: string = '';

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
  getErrorMessage() {
    if (this.formControl.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.formControl.hasError('min')) {
      return 'Minimum value is 0';
    }
    if (this.formControl.hasError('max')) {
      return 'Maximum value is 100';
    }
    return '';
  }
}
