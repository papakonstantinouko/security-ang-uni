import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form autocomplete="off" novalidate [formGroup]="form">
      <fieldset>
        <legend>Sign Up</legend>

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
        <div class="form-field">
          <label for="confirm">Confirm:</label>
          <input
            id="confirm"
            name="confirm"
            formControlName="confirm"
            type="password"
          />
        </div>
      </fieldset>

      <div class="form-buttons">
        <button class="button button-primary" (click)="signUp()">
          Sign Up
        </button>
      </div>
    </form>
  `,
  styleUrls: ['../common/forms.css'],
})
export class SignupComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirm: ['', Validators.required],
    });
  }

  ngOnInit() {}

  signUp() {
    const val = this.form.value;

    //TODO
  }
}
