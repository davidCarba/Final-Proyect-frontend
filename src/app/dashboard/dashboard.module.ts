import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardNavComponent } from './components/dashboard-nav/dashboard-nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxsModule } from '@ngxs/store';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ErrorModule } from '../error/error.module';
import { AuthModule } from '../auth/auth.module';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { DashboardFooterComponent } from './components/dashboard-footer/dashboard-footer.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { ShopComponent } from './components/shop/shop.component';
import { NgxStripeModule } from "ngx-stripe";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardNavComponent,
    DashboardHeaderComponent,
    DashboardFooterComponent,
    MyAccountComponent,
    ShopComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    DashboardRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ErrorModule,
    AuthModule,
    NgxsModule.forFeature([]),
    NgxStripeModule.forRoot('pk_test_EHYpbLcaCbUZBfa17u1cvCq2'),
    SharedModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
