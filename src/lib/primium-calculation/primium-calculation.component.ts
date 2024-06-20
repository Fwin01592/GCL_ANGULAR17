import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-primium-calculation",
  templateUrl: "./primium-calculation.component.html",
  styleUrl: "./primium-calculation.component.css",
})
export class PrimiumCalculationComponent implements OnInit {
  formGroup: FormGroup;
  title = "base";
  panelState: boolean[] = [true, false, false]; // Initial state of the panels
  @Output() formSubmit = new EventEmitter<void>();
  // schema={
  //   channelDetailSchema: [
  //     { name: 'loanRefId', label: 'Loan Ref ID', type: 'text', required: true },
  //     { name: 'loanAccountNo', label: 'Loan Account No', type: 'text', required: true },
  //     { name: 'smsBranchCode', label: 'SMS Branch Code', type: 'text', required: true },
  //     { name: 'smsLeadGeneratorCode', label: 'SMS Lead Generator Code', type: 'text', required: true },
  //     { name: 'branchCode', label: 'Branch Code', type: 'select', options: [{ value: 10580, key: '10580' }, { value: 10581, key: '10581' }, { value: 10582, key: '10582' }], required: true },
  //     { name: 'branchLGCode', label: 'Branch SP/LG/SRM/ERM Code', type: 'select', options: [{ value: 10580, key: '10580' }, { value: 10581, key: '10581' }, { value: 10582, key: '10582' }], required: true, dependsOn: ['branchCode'] },
  //     { name: 'dsaCode', label: 'DSA Code', type: 'text', required: true },
  //     { name: 'primiumPaidFromLoad', label: 'Primium Paid From Load', type: 'select', options: [{ value: 'yes', key: 'yes' }, { value: 'no', key: 'NO' }], required: true },
  //     { name: 'applicationType', label: 'Application Type', value: 'self', type: 'text',readOnly:true },
  //     { name: 'annualIncome', label: 'Annual Income', type: 'number', required: true },
  //     { name: 'clientId', label: 'client ID', type: 'text', }
  //   ],
  //   personalDetail:[
  //     { name: 'salutaion', label: 'Salutation',  required: true,type: 'select', options: [{ value: 'Mr.', key: 'Mr.' }, { value: 'Mrs.', key: 'Mrs' }, { value: 'Miss', key: 'Miss' }] },
  //     { name: 'firstName', label: 'First Name', type: 'text', required: true },
  //     { name: 'middleName', label: 'Middle Name', type: 'text'},
  //     { name: 'lastName', label: 'Last Name', type: 'text', required: true },
  //     { name: 'gender', label: 'Gender', type: 'select', options: [{ value: 'Male', key: 'Male' }, { value: 'Female', key: 'Female' }, { value: 'other', key: 'Other' }], required: true },
  //     { name: 'dob', label: 'DOB', type: 'date', required: true },
  //     { name: 'primarylifeAssuredAge', label: 'Primary Life Assured Age', type: 'text', required: true },
  //     { name: 'jointLife', label: 'Joint Life', type: 'select', options: [{ value: 'yes', key: 'Yes' }, { value: 'no', key: 'No' }], required: true },
  //     { name: 'email', label: 'Email', type: 'email' },
  //     { name: 'mobileNumber', label: 'Mobile Number', type: 'phone', required: true },
  //     { name: 'primaryLifeOccupation', label: 'Primary Life Occupation', type: 'select', options: [{ value: 'agriculture', key: 'Agriculture' }, { value: 'business', key: 'Business' }, { value: 'selfEmployed', key: 'Self Employed' }, { value: 'others', key: 'Others' }, { value: 'professional', key: 'Professional' }, { value: 'service', key: 'Service' }, { value: 'bobStaff', key: 'BOB staff' }] },
  //     { name: 'pan', label: 'PAN Number', type: 'phone'},
  //     { name: 'address1', label: 'Address 1', type: 'text', required: true },
  //     { name: 'address2', label: 'Address 2', type: 'text', required: true },
  //     { name: 'address3', label: 'Address 3', type: 'text'},
  //     { name: 'pinCode', label: 'Pin Code', type: 'text',required:true},
  //     { name: 'city', label: 'City', type: 'text',required:true},
  //     {
  //         name: 'state', label: 'State', type: 'select', options: [
  //           { value: 'maharastra', key: 'Maharastra' },
  //           { value: 'karnataka', key: 'Karnataka' },
  //           { value: 'goa', key: 'Goa' }
  //         ], required: true
  //       },
  //   ],
  //   planDetail:[
  //     { name: 'loanAmount', label: 'Loan Amount', type: 'text', required: true },
  //     { name: 'sumAssured', label: 'Sum Assured', type: 'text', required: true },
  //     {
  //       name: 'loanType', label: 'Loan Type', type: 'select', options: [
  //         { value: 'home loan', key: 'Home Loan' },
  //         { value: 'personal loan', key: 'Personal Loan' },
  //         { value: 'education loan', key: 'Education Loan' }
  //       ], required: true
  //     },
  //     { name: 'loanInterest', label: 'Loan Interest', type: 'text', required: true },
  //     {
  //       name: 'staff', label: 'Staff', type: 'select', options: [
  //         { value: 'non-staff', key: 'Non-Staff' },
  //         { value: 'staff', key: 'staff' },
  //       ], required: true
  //     },
  //     {
  //       name: 'primiumType', label: 'Primium Type', type: 'select', options: [
  //         { value: 'singlePrimium', key: 'Single Primium' },
  //         { value: 'regulerPrimium', key: 'Reguler Primium' },
  //         { value: 'limitedPrimium', key: 'Limited Primium' },
  //       ], required: true
  //     },
  //     {
  //       name: 'sumAssuredType', label: 'Sum Assured Type', type: 'select', options: [
  //         { value: 'reducing', key: 'Reducing' },
  //         { value: 'level', key: 'Level' },
  //       ], required: true
  //     },
  //     {
  //       name: 'insurenceType', label: 'Insurence Type', type: 'select', options: [
  //         { value: 'employer-employee', key: 'Employer-Employee' },
  //         { value: 'employer-employee', key: 'Non Employer-Employee' },
  //         { value: 'micro', key: 'Micro' },
  //       ],dependsOn:['primiumType'], required: true
  //     },
  //     {
  //       name: 'paymentFreq', label: 'Payment Frequency', type: 'select', options: [{value:'single',key:'Single'}],dependsOn:['primiumType'], required: true
  //     },
  //     {
  //       name: 'benefitOption', label: 'Benefit Option', type: 'select', options: [
  //         { value: 'lifeCover', key: 'LifeCover' },
  //         { value: 'lifeCoverFamilyIncome', key: 'Life Cover + Family Income' },
  //         { value: 'lifeCoverCriticalIllness', key: 'Life Cover + Critical Illness' },
  //       ], required: true
  //     },
  //     {
  //       name: 'deathOption', label: 'Death Option', type: 'select', options: [
  //         { value: 'lumpsum', key: 'LumpSum' },
  //         { value: 'income', key: ' Income' },
  //       ],required:true
  //     },
  //     {
  //       name: 'policyTerm', label: 'Policy Term', required: true, type: 'select', options: [
  //         { value: '1', key: '1' },
  //         { value: '2', key: '2' },
  //         { value: '3', key: '3' },
  //         { value: '4', key: '4' },
  //       ],
  //     },
  //     {
  //       name: 'primiumPayingTerm', label: 'Primium Paying Term', type: 'select', options: [
  //         { value: '1', key: '1' },
  //       ],required:true
  //     },
  //     {
  //       name: 'Moratoriumperiod', label: 'Moratorium Period', type: 'select', options: [
  //         { value: '0', key: '0 year' },
  //         { value: '1', key: '1 year' },
  //         { value: '2', key: '2 years' },
  //         { value: '3', key: '3 years' },
  //         { value: '4', key: '4 years' },
  //       ],required:true
  //     },
  //     { name: 'interestServedDuringMoratoriumPeriod', label: 'Interest served during Moratorium Period', type: 'select', options: [{ value: 'yes', key: 'Yes' }, { value: 'no', key: 'No' }], required: true },
  //   ]
  // };

  schema = {
    channelDetailSchema: [
      { name: "loanRefId", label: "Loan Ref ID", type: "text", required: true },
      {
        name: "loanAccountNo",
        label: "Loan Account No",
        type: "text",
        required: true,
      },
      {
        name: "smsBranchCode",
        label: "SMS Branch Code",
        type: "text",
        required: true,
      },
      {
        name: "smsLeadGeneratorCode",
        label: "SMS Lead Generator Code",
        type: "text",
        required: true,
      },
      {
        name: "branchCode",
        label: "Branch Code",
        type: "select",
        options: [
          { value: 10580, key: "10580" },
          { value: 10581, key: "10581" },
          { value: 10582, key: "10582" },
        ],
        required: true,
      },
      {
        name: "branchLGCode",
        label: "Branch SP/LG/SRM/ERM Code",
        type: "select",
        options: [
          { value: 10580, key: "10580" },
          { value: 10581, key: "10581" },
          { value: 10582, key: "10582" },
        ],
        required: true,
        dependsOn: ["branchCode"],
      },
      { name: "dsaCode", label: "DSA Code", type: "text", required: true },
      {
        name: "primiumPaidFromLoad",
        label: "Primium Paid From Load",
        type: "select",
        options: [
          { value: "yes", key: "Yes" },
          { value: "no", key: "No" },
        ],
        required: true,
      },
      {
        name: "applicationType",
        label: "Application Type",
        value: "SELF",
        type: "text",
        readOnly: true,
      },
      {
        name: "annualIncome",
        label: "Annual Income",
        type: "number",
        required: true,
      },
      { name: "clientId", label: "client ID", type: "text", required: true },
    ],
    personalDetail: [
      {
        name: "salutaion",
        label: "Salutation",
        required: true,
        type: "select",
        options: [
          { value: "Mr.", key: "Mr." },
          { value: "Mrs.", key: "Mrs." },
          { value: "Miss", key: "Miss." },
        ],
      },
      { name: "firstName", label: "First Name", type: "text", required: true },
      {
        name: "middleName",
        label: "Middle Name",
        type: "text",
        required: true,
      },
      { name: "lastName", label: "Last Name", type: "text", required: true },
      {
        name: "gender",
        label: "Gender",
        type: "select",
        options: [
          { value: "Male", key: "Male" },
          { value: "Female", key: "Female" },
          { value: "other", key: "Other" },
        ],
        required: true,
      },
      { name: "dob", label: "DOB", type: "date", required: true },
      {
        name: "primarylifeAssuredAge",
        label: "Primary Life Assured Age",
        type: "text",
        required: true,
      },
      {
        name: "jointLife",
        label: "Joint Life",
        type: "select",
        options: [
          { value: "yes", key: "Yes" },
          { value: "no", key: "No" },
        ],
        required: true,
      },
      { name: "email", label: "Email", type: "email", required: true },
      {
        name: "mobileNumber",
        label: "Mobile Number",
        type: "phone",
        required: true,
      },
      {
        name: "primaryLifeOccupation",
        label: "Primary Life Occupation",
        type: "select",
        options: [
          { value: "agriculture", key: "Agriculture" },
          { value: "business", key: "Business" },
          { value: "selfEmployed", key: "Self Employed" },
          { value: "others", key: "Others" },
          { value: "professional", key: "Professional" },
          { value: "service", key: "Service" },
          { value: "bobStaff", key: "BOB staff" },
        ],
        required: true,
      },
      { name: "pan", label: "PAN Number", type: "phone", required: true },
      { name: "address1", label: "Address 1", type: "text", required: true },
      { name: "address2", label: "Address 2", type: "text", required: true },
      { name: "address3", label: "Address 3", type: "text" },
      { name: "pinCode", label: "Pin Code", type: "text", required: true },
      { name: "city", label: "City", type: "text", required: true },
      {
        name: "state",
        label: "State",
        type: "select",
        options: [
          { value: "maharastra", key: "Maharastra" },
          { value: "karnataka", key: "Karnataka" },
          { value: "goa", key: "Goa" },
        ],
        required: true,
      },
    ],
    planDetail: [
      {
        name: "loanAmount",
        label: "Loan Amount",
        type: "text",
        required: true,
      },
      {
        name: "sumAssured",
        label: "Sum Assured",
        type: "text",
        required: true,
      },
      {
        name: "loanType",
        label: "Loan Type",
        type: "select",
        options: [
          { value: "home loan", key: "Home Loan" },
          { value: "personal loan", key: "Personal Loan" },
          { value: "education loan", key: "Education Loan" },
        ],
        required: true,
      },
      {
        name: "loanInterest",
        label: "Loan Interest",
        type: "text",
        required: true,
      },
      {
        name: "staff",
        label: "Staff",
        type: "select",
        options: [
          { value: "non-staff", key: "Non-Staff" },
          { value: "staff", key: "Staff" },
        ],
        required: true,
      },
      {
        name: "primiumType",
        label: "Primium Type",
        type: "select",
        options: [
          { value: "singlePrimium", key: "Single Primium" },
          { value: "regulerPrimium", key: "Reguler Primium" },
          { value: "limitedPrimium", key: "Limited Primium" },
        ],
        required: true,
      },
      {
        name: "sumAssuredType",
        label: "Sum Assured Type",
        type: "select",
        options: [
          { value: "reducing", key: "Reducing" },
          { value: "level", key: "Level" },
        ],
        required: true,
      },
      {
        name: "insurenceType",
        label: "Insurence Type",
        type: "select",
        options: [
          { value: "employer-employee", key: "Employer-Employee" },
          { value: "employer-employee", key: "Non Employer-Employee" },
          { value: "micro", key: "Micro" },
        ],
        dependsOn: ["primiumType"],
        required: true,
      },
      {
        name: "paymentFreq",
        label: "Payment Frequency",
        type: "select",
        options: [
          { value: "single", key: "Single" },
          { value: "halfYearly", key: "Half-Yearly" },
          { value: "quaterly", key: "Quaterly" },
          { value: "monthly", key: "Monthly" },
        ],
        dependsOn: ["primiumType"],
        required: true,
      },
      {
        name: "benefitOption",
        label: "Benefit Option",
        type: "select",
        options: [
          { value: "lifeCover", key: "LifeCover" },
          { value: "lifeCoverFamilyIncome", key: "Life Cover + Family Income" },
          {
            value: "lifeCoverCriticalIllness",
            key: "Life Cover + Critical Illness",
          },
        ],
        required: true,
      },
      {
        name: "deathOption",
        label: "Death Option",
        type: "select",
        options: [
          { value: "lumpsum", key: "LumpSum" },
          { value: "income", key: " Income" },
        ],
        required: true,
      },
      {
        name: "policyTerm",
        label: "Policy Term",
        required: true,
        type: "select",
        options: [
          { value: "1", key: "1" },
          { value: "2", key: "2" },
          { value: "3", key: "3" },
          { value: "4", key: "4" },
        ],
      },
      {
        name: "primiumPayingTerm",
        label: "Primium Paying Term",
        type: "select",
        options: [{ value: "1", key: "1" }],
        required: true,
      },
      {
        name: "Moratoriumperiod",
        label: "Moratorium Period",
        type: "select",
        options: [
          { value: "0", key: "0 year" },
          { value: "1", key: "1 year" },
          { value: "2", key: "2 years" },
          { value: "3", key: "3 years" },
          { value: "4", key: "4 years" },
        ],
        required: true,
      },
      {
        name: "interestServedDuringMoratoriumPeriod",
        label: "Interest served during Moratorium Period",
        type: "select",
        options: [
          { value: "yes", key: "Yes" },
          { value: "no", key: "No" },
        ],
        required: true,
      },
    ],
  };

  constructor(private fb: FormBuilder, private router: Router) {
    this.formGroup = this.fb.group({});
  }

  ngOnInit(): void {
    let schemakeys = Object.keys(this.schema);
    schemakeys.forEach((key) => {
      let typedKey = key as keyof typeof this.schema;
      this.createFormGroup(this.schema[typedKey]); // need to check if its needed
    });
  }

  onSubmit() {
    if (this.formGroup.valid) {
      console.log("Form Submitted", this.formGroup.value);
      this.router.navigate(["/medicalHistory"]);
      this.formSubmit.emit();
    } else {
      this.formGroup.markAllAsTouched();
    }
  }

  createFormGroup(schema: any[]): void {
    schema.forEach((field) => {
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
