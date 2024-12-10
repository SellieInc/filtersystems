import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatCardModule } from '@angular/material/card'; 
import { MatIconModule } from '@angular/material/icon';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthLandingComponent } from 'src/app/components/auth/auth-landing/auth-landing.component';
import { AuthTabsComponent } from 'src/app/components/auth/auth-tabs/auth-tabs.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AuthTabsComponent,
    AuthLandingComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule
  ]
})
export class AuthModule { }
