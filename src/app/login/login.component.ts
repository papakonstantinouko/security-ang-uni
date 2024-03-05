import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form autocomplete="off" novalidate [formGroup]="form">
      <fieldset>
        <legend>Login</legend>
        <div class="form-field">
          <label for="email">Email:</label>
          <input id="email" name="email" formControlName="email" />
        </div>
        <div class="form-field">
          <label for="password">Password:</label>
          <input
            id="password"
            name="password"
            formControlName="password"
            type="password"
          />
        </div>
      </fieldset>

      <div class="form-buttons">
        <button class="button button-primary" (click)="login()">Login</button>
      </div>
    </form>
  `,
  styleUrls: ['../common/forms.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {}

  login() {
    const formValue = this.form.value;

    //TODO
  }
}
