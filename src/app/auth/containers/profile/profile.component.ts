import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { Observable } from 'rxjs';

import { ErrorState } from '../../../error/store/error.state';
import { AuthState } from '../../store/auth.state';
import { Profile } from '../../auth.models';
import { UpdateUserProfile } from '../../store/auth.actions';

@Component({
  selector: 'al-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  @Select(ErrorState) errors$: Observable<Error>;
  @Select(AuthState) user$: Observable<Profile>;

  updateProfileForm = this.fb.group(
    {
      fullName: ['', [Validators.required]],
      address: ['', [Validators.required]],
      cp: ['', [Validators.required]]
    },
    { updateOn: 'blur' }
  );

  constructor(private fb: FormBuilder, private store: Store) { }

  ngOnInit() {
    this.user$.subscribe(({ fullName, address, cp }) =>
      this.updateProfileForm.setValue({
        fullName: fullName || "",
        address: address || "",
        cp: cp || "",
      })
    );
  }

  updateProfile() {
    if (!this.updateProfileForm.valid) {
      this.markFormGroupTouched(this.updateProfileForm);
      return;
    }

    this.store.dispatch(new UpdateUserProfile(this.updateProfileForm.value));
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
    });
  }
}
