import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ChangeDetectorRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule, MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { routes } from './app.routing';
import { SharedModule } from './shared/shared.module';
import { AngularFireModule } from 'angularfire2';
import { FirebaseConfig } from '../environments/firebase.config';
import { AngularFireAuth } from 'angularfire2/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AngularFirestoreModule } from 'angularfire2/firestore';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule.forRoot(routes),
    SharedModule,
    AngularFireModule.initializeApp(FirebaseConfig),
    AngularFirestoreModule,
  ],
  exports: [
    AppComponent
  ],
  providers: [AngularFireAuth, AppComponent],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent]
})
export class AppModule { }
