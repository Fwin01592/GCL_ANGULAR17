import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formGroup: FormGroup;
  captcha: string='';
  captchaVerified: boolean = false;

  constructor(private fb: FormBuilder,private router: Router) {
    this.formGroup = this.fb.group({});
  }
  ngOnInit(): void {
    this.generateNewCaptcha();
  }
  onSubmit() {
    if (this.formGroup.valid) {
      this.verifyCaptcha();
      console.log('Form Submitted', this.formGroup.value);
      if(this.captchaVerified)
      this.router.navigate(['/dashboard']);
     // this.formSubmit.emit();
      } else {
      this.formGroup.markAllAsTouched();
    }
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

  generateNewCaptcha(): void {
    this.captcha = this.generateCaptchaString(6);
    this.drawCaptcha();
  }

  generateCaptchaString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      captcha += characters[randomIndex];
    }
    return captcha;
  }

  drawCaptcha(): void {
    const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('captchaCanvas');
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = '30px Arial';
      ctx.fillStyle = this.getRandomColor();
      ctx.fillText(this.captcha, 10, 30);

      // Adding some noise
      for (let i = 0; i < 30; i++) {
        ctx.fillStyle = this.getRandomColor();
        ctx.beginPath();
        ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 3, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  verifyCaptcha(): void {
    this.captchaVerified = this.formGroup.value['captcha'] === this.captcha;
    if (this.captchaVerified) {
      alert('CAPTCHA verified successfully!');
    } else {
      alert('Incorrect CAPTCHA, please try again.');
      this.generateNewCaptcha();
    }
  }
}
