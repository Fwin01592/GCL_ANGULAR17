import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrl: './text-area.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextAreaComponent),
      multi: true
    }
  ]
})
export class TextAreaComponent implements ControlValueAccessor{
  @Input() name :string =''
  @Input() label :string =''
  @Input() errorMessage :string =''
  @Input() placeholder :string =''
  @Input() required: boolean = false;
  @Input() readOnly: boolean = false;

  @Input() data: any;
  @Input() formControl: FormControl= new FormControl();

  value: string = '';

  onChange = (value: any) => {
    console.log('onchange' +this.value);

  };
  onTouched = () => {};

  writeValue(value: any): void {
    this.value = value;
    console.log('writeValue' +this.value);

  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

}
