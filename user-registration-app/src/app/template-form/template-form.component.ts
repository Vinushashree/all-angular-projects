import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserRegistration } from '../user-registration.model';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-form.component.html'
})
export class TemplateFormComponent {
  user: UserRegistration = {
    fullName: '',
    email: '',
    gender: '',
    country: '',
    agree: false
  };

  submitted = false;

  countries: string[] = ['India', 'USA', 'UK', 'Germany'];

  onSubmit() {
    this.submitted = true;
  }
}
