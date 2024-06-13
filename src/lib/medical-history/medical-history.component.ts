import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-medical-history',
  templateUrl: './medical-history.component.html',
  styleUrl: './medical-history.component.css'
})
export class MedicalHistoryComponent {

  formGroup: FormGroup;
  title = 'base';
  schema={
    medicalQue: [
      { name: 'heightInFeet', label: 'Height in feet', type: 'text', required: true },
      { name: 'heightInInches', label: 'Height in Inches', type: 'text', required: true },
      { name: 'weightInKg', label: 'Weight(Kgs)', type: 'text', required: true },
     
    ],
  };
  familyQuestionList=[
    'I am to the best of my knowledge and belief, in good health and free from all symptoms of illness and disease?*',
    'None of my family members have been diagnosed with diabetes, heart disease, high blood pressure, elevated blood fats, cancer, mental illness, HIV, stroke or had any hereditary disorder?*',
    'Do not intend to participate or participate in any hazardous sports or activities?*',
    'I do not currently live or intend to live or travel outside India for more than six months in a financial year? If no, I will provide full details of countries to be visited along with purpose of visit and duration.* ',
    'I am not currently taking any medications/drugs, other than minor condition (eg cold and flu), either prescribed or not prescribed by a doctor, or have not suffered from any illness, disorder, disability, injury during past 5 years which has required any form of medical or specialised examination (including chest xrays, gynaecological investigations, pap smear, or blood tests), consultation, hospitalisation, surgery or have any condition for which hospitalization / surgery has been advised or is contemplated?*',
    'I have no congenital / birth defects, pain or problems in back, spine, muscles or joint, arthritis, gout, severe injury or other physical disability and have not been incapable of working/attending the office during the last two years for more than three consecutive days or I am not currently incapable of working/attending office? For females only‐ I have not ever suffered from or suffering or is currently suffering any diseases of breast/uterus/cervix,or not presently pregnant?* ',
    'I do not suffer from or ever had any medical ailments such as diabetes, high blood pressure, cancer, respiratory disease (including asthma), kidney or liver disease, stroke, paralysis, auto immune disorder, any blood disorder, heart problems, Hepatitis B or C, or tuberculosis, psychiatric disorder, depression, colitis, or any other stomach problems, have not undergone any transplants, thyroid disorders, reproductive organs, HIV AIDS or a related infection?*',
    'I have never ever taken drugs, or been advised to reduce alcohol consumption or received or have been counselled to receive treatment for drug addiction or alcoholism?*',
    'I have never been refused life insurance or offered insurance modified in any way?*',
    'I am not suffering from disorder/ disease not mentioned above?* '
  ]

  covidQueList=[
    { que:`Are you, or have you been <b>(If yes to any of below please provide details)</b>
    <li>In close contact with anyone who has been quarantined or who has been diagnosed with novel coronavirus (SARS-CoV-2/COVID-19)?</li>
    <li>Quarantined due to a possible exposure to novel coronavirus (SARSCoV2/COVID-19)?<li>
    <li>Tested positive for the novel coronavirus or await the result of such test?<li>
    <li>Advised to be tested to rule in, or rule out, a diagnosis of novel coronavirus?</li>`,'dValue':false},
    {que:`Have you experienced any of the following symptoms within the last 14 days?
    <li>Any fever //Cough//Shortness of breath //Malaise (flu-like tiredness)</li>
    <li>Rhinorrhea (mucus discharge from the nose) //Sore throat</li>
    <li>Gastro-intestinal symptoms such as nausea, vomiting and/or diarrhea</li>`,dValue:false},
    {que:`Please provide your travel patterns over the past 14 days/ next 30 days <b> (provide details if Yes) </b>`,dValue:false},
    {que:`Are you currently in good Health?`,dValue:true},
    {que:`Does your occupation fall within any of the below mentioned? <b>(If yes please provide details)</b>
    <li>Doctor/ medical professional</li>
    <li>Nursing personnel</li>
    <li>Pharmacist</li>
    <li>Transport work force personnel</li>
    <li>Police/Military staff</li>
    <li>Pilots/ Cabin Crew personnel</li>
    <li>Any other occupation which has higher exposure to a large population.</li>`,dValue:false},
    {que: `Do you have any history of conviction under any criminal proceedings, in India or abroad? `,dValue:false},
    {que:`Is your occupation associated with any specific hazards which would render you susceptible to any injury or illness, (e.g. chemical factory, mines, explosives, corrosive chemicals, etc.?)`,dValue:false},
    {que:`Has your weight altered (Gain/Loss) by more than 5 kg in the last 1 year? If yes details required  `,dValue:false},
    {que:`Have you ever or are you currently suffering from any other illness, impairment or disability or any surgery not mentioned in the application form? `,dValue:false},
    {que:`Have you been vaccinated?`,dValue:false}
  ]
  panelState: boolean[] = [true, false, false];
  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({});
  }
  
  ngOnInit(): void {
  
    let schemakeys= Object.keys(this.schema);
    schemakeys.forEach(key=>{
      let typedKey = key as keyof typeof this.schema; 
      this.createFormGroup(this.schema[typedKey]);// need to check if its needed
      
    })
  }

  createFormGroup(schema: any[]): void {
    schema.forEach(field => {
      this.addFormControl(field.name, field.value);
    });
  }

  addFormControl(name: string, value?: any): void {
    if (!this.formGroup.controls[name]) {
      this.formGroup.addControl(name, new FormControl(value));
    }
  }

  getControl(name: string): FormControl {
    this.addFormControl(name);
    return this.formGroup.controls[name] as FormControl;
  }
  onSubmit(){
    console.log('Form Submitted', this.formGroup.value);
  }
  onPanelChange(panelIndex: number) {
    // this.panelState = [false, false, false];
    if (!this.panelState[panelIndex]) {
      // If the panel is closed, open the next one
      if (panelIndex < this.panelState.length - 1) {
        this.panelState[panelIndex + 1] = true;
      }
    }
  }

}
