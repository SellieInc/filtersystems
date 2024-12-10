// src/app/dashboard/dashboard.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CartComponent } from 'src/app/components/dashboard/cart/cart.component';
import { OrdersComponent } from 'src/app/components/dashboard/orders/orders.component';
import { OverviewComponent } from 'src/app/components/dashboard/overview/overview.component';
import { ProfileComponent } from 'src/app/components/dashboard/profile/profile.component';
import { ShopComponent } from 'src/app/components/dashboard/shop/shop.component';

@NgModule({
  declarations: [
    OverviewComponent,
    ShopComponent,
    ProfileComponent,
    OrdersComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
