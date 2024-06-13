// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimiumCalculationComponent } from '../lib/primium-calculation/primium-calculation.component';
import { MedicalHistoryComponent } from '../lib/medical-history/medical-history.component';
import { ConsentDetailsComponent } from '../lib/consent-details/consent-details.component';

const routes: Routes = [
  { path: '', component: PrimiumCalculationComponent },
  { path: 'primiumCalculation', component: PrimiumCalculationComponent },
  { path: 'medicalHistory', component: MedicalHistoryComponent },
  { path: 'consentDetails', component: ConsentDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
