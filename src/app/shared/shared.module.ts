import { NgModule, ApplicationRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './components/layout/layout.component';
import { MaterialModule } from './modules/material.module';
import { AvatarModule } from 'ngx-avatar';
import { AppComponent } from '../app.component';
import { MomentModule } from 'angular2-moment';
import { StorageService } from './services/storage.service';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  providers: [
    StorageService,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule,
    AvatarModule,
    ReactiveFormsModule,
    FormsModule,
    MomentModule
  ],
  exports: [
    MaterialModule,
    CommonModule,
    AvatarModule,
    MomentModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  entryComponents: []
})
export class SharedModule { }
