import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatButtonModule } from '@angular/material';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { FirebaseConfig } from '../environments/firebase.config';
import { IdeaModule } from './ideas/idea.module';
import { SharedModule } from './shared/shared.module';
import { environment } from '../environments/environment';
import { routes } from './app.routing';

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
    IdeaModule
  ],
  exports: [
    AppComponent
  ],
  providers: [AngularFireAuth, AppComponent],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent]
})
export class AppModule { }
