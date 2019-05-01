import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Auth } from '../../../auth/auth.models';
import { AuthState } from '../../../auth/store/auth.state';

@Component({
  selector: 'al-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {
  @Select(AuthState) user$: Observable<Auth>;

  constructor() { }

  ngOnInit() {
    this.user$.subscribe()
  }
}
