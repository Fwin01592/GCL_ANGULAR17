import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FieldComponent } from '../lib/field/field.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TextComponent } from '../lib/Inputs/text/text.component';
import { TextAreaComponent } from '../lib/Inputs/text-area/text-area.component';
import { CheckboxComponent } from '../lib/Inputs/checkbox/checkbox.component';
import { EmailComponent } from '../lib/Inputs/email/email.component';
import { PrimiumCalculationComponent } from '../lib/primium-calculation/primium-calculation.component';
import { IntegerComponent } from '../lib/Inputs/integer/integer.component';
import { PhoneComponent } from '../lib/Inputs/phone/phone.component';
import { PicklistComponent } from '../lib/Inputs/picklist/picklist.component';
import { RadioComponent } from '../lib/Inputs/radio/radio.component';
import { PasswordComponent } from '../lib/Inputs/password/password.component';
// import { MatSelectModule } from '@angular/material/select';
// import { MatOptionModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DateComponent } from '../lib/Inputs/date/date.component';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatNativeDateModule } from '@angular/material/core';
// import { MatRadioModule } from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

import { MatExpansionModule } from '@angular/material/expansion';
import { MedicalHistoryComponent } from '../lib/medical-history/medical-history.component';
import { ConsentDetailsComponent } from '../lib/consent-details/consent-details.component';
import { FileComponent } from '../lib/Inputs/file/file.component';
import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
  declarations: [
    AppComponent,
    FieldComponent,
    TextComponent,
    TextAreaComponent,
    CheckboxComponent,
    EmailComponent,
    IntegerComponent,
    PhoneComponent,
    PicklistComponent,
    RadioComponent,
    PasswordComponent,
    DateComponent,
    PrimiumCalculationComponent,
    MedicalHistoryComponent,
    ConsentDetailsComponent,
    FileComponent
  ],
  imports: [
    FormsModule,
    MatExpansionModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    // MatSelectModule,
    // MatOptionModule,
    BrowserAnimationsModule,
    // MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    // MatDatepickerModule,
    // MatNativeDateModule,
    ReactiveFormsModule,
    // MatRadioModule,
    MatStepperModule ,
    MatCardModule,
    MatGridListModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
