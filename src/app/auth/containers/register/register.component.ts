import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MatchPasswordValidator } from '../../validators/match-pasword.validator';
import { MailValidator } from '../../validators/mail.validator';
import { Store, Actions, ofAction } from '@ngxs/store';
import { Register, RegisterSuccess } from '../../store/auth.actions';
import Swal from 'sweetalert2';


@Component({
  selector: 'al-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group(
    {
      fullName: ['', [Validators.required]],
      address: ['', [Validators.required]],
      cp: ['', [Validators.required]],
      email: ['', [Validators.required, MailValidator]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    },
    {
      updateOn: 'blur',
      validators: [MatchPasswordValidator]
    }
  );

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private actions$: Actions
  ) { }

  ngOnInit() {
    this.actions$
      .pipe(ofAction(RegisterSuccess))
      .subscribe(() => this.registerForm.reset());
  }

  register() {
    if (!this.registerForm.valid) {
      this.markFormGroupAsTouched(this.registerForm);
      return;
    }
    this.store.dispatch(new Register(this.registerForm.value));
    Swal.fire('Hey user!', "Check your email to activate you account", 'success');
  }

  markFormGroupAsTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control =>
      control.markAsTouched()
    );
  }
}
