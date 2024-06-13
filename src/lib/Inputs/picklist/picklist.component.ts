import { KeyValue } from '@angular/common';
import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PicklistService } from '../../../services/picklistService';
@Component({
  selector: 'app-picklist',
  templateUrl: './picklist.component.html',
  styleUrl: './picklist.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PicklistComponent),
      multi: true
    }
  ]
})


export class PicklistComponent implements ControlValueAccessor {
   @Input() options: { value: string | undefined; key: string | undefined }[] = [{ value: undefined, key: undefined }];
   @Input() name:string = '';
   @Input() required:boolean=false;
   @Input() dependsOn: string[] = [];
   @Input() formControl: FormControl= new FormControl();
   @Input() readOnly: boolean = false;
    @Input() value:string='';
   @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();

   private subscriptions: Subscription[] = [];
   constructor(private picklistService: PicklistService) {}

  onChange = (value: any) => {};
  onTouched = () => {};

  ngOnInit() {
    this.formControl.setValue(this.value);
    if (this.dependsOn && this.dependsOn.length) {
      this.subscriptions = this.dependsOn.map(dependent => 
        this.picklistService.picklistChange$
          .subscribe(({ name, value }) => {
            if (name && value) {
              this.updateOptionsBasedOnDependency(name,value);
            }
          })
      );
    }
  }
  updateOptionsBasedOnDependency(name :string,value: any) {
    console.log(value);
    console.log('updateOptionsBasedOnDependency'+this);
    if(name && this.dependsOn[0]==name && value=='10581'){
      this.formControl.setValue('10581')
    }
  }
  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onSelect(event:any){
    const value = (event.target as HTMLSelectElement).value;
    this.value = value;
    if (this.onChange) {
      this.onChange(value);
    }
    this.onTouched();
    this.formControl.setValue(value);
    this.picklistService.emitPicklistChange(this.name, this.value,);
  }


}
