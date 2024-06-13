import { Component, Input, forwardRef, input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrl: './email.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmailComponent),
      multi: true
    }
  ]
})
export class EmailComponent  implements ControlValueAccessor{
  @Input() formControl: FormControl= new FormControl()
  @Input() required :boolean=false
  @Input() readOnly: boolean = false;

  @Input() placeholder:string=''
  @Input() name:string=''
  value: string = '';

  onChange = (value: any) => {};
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
