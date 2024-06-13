import { Component, Input, forwardRef, input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrl: './file.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileComponent),
      multi: true
    }
  ]
})
export class FileComponent {
  @Input() formControl: FormControl= new FormControl()
  @Input() required :boolean=false
  @Input() readOnly: boolean = false;

  @Input() placeholder:string=''
  @Input() name:string=''
  @Input() value: string = '';

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

  converttoBase64= function(file:any){
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });
  }
  async handleFileInput(event:any) {
    if (event.target.files) {
        let base64= await  this.converttoBase64(event.target.files[0]);
        this.value=base64 as string
        this.formControl.setValue(base64);
        this.onChange(base64)
        console.log('base64'+base64);
    }

};

}
