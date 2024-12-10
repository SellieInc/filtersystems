import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLandingComponent } from 'src/app/components/auth/auth-landing/auth-landing.component';
import { AuthTabsComponent } from 'src/app/components/auth/auth-tabs/auth-tabs.component';

const routes: Routes = [
  { path: 'secure-access', component: AuthTabsComponent },
  { path: 'landing', component: AuthLandingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
