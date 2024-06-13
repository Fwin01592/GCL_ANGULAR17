import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PicklistService {
  private picklistChange = new Subject<{ name: string, value: any }>();
  
  picklistChange$ = this.picklistChange.asObservable();

  emitPicklistChange(name: string, value: any) {
    this.picklistChange.next({ name, value });
  }
}
