// src/app/dashboard/dashboard-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from 'src/app/components/dashboard/cart/cart.component';
import { OrdersComponent } from 'src/app/components/dashboard/orders/orders.component';
import { OverviewComponent } from 'src/app/components/dashboard/overview/overview.component';
import { ProfileComponent } from 'src/app/components/dashboard/profile/profile.component';
import { ShopComponent } from 'src/app/components/dashboard/shop/shop.component';

const routes: Routes = [
  { path: 'overview', component: OverviewComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
