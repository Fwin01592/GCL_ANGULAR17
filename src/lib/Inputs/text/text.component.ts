import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrl: './text.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextComponent),
      multi: true
    }
  ]
})
export class TextComponent implements ControlValueAccessor {

  @Input() name :string =''
  @Input() label :string =''
  @Input() pattern :string =''
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
