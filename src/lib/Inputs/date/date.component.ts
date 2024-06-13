import { Component, Input, ViewChild, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateComponent),
      multi: true
    }
  ]
})
export class DateComponent implements ControlValueAccessor{
  @Input() formControl: FormControl= new FormControl();
  @Input() placeholder: string= '';
  @Input() required: boolean=false;
  @Input() readOnly: boolean = false;

  // @ViewChild('picker') picker: any;
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
  // getErrorMessage() {
  //   if (this.formControl.hasError('required')) {
  //     return 'You must enter a date';
  //   }
  //   return '';
  // }
}
