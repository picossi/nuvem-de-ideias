import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  constructor(
    public angularFireAuth: AngularFireAuth
  ) {}

  get currentUser(): firebase.User {
    return this.angularFireAuth.auth.currentUser;
  }

  signInWithFacebook() {
    this.angularFireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  signOut() {
    this.angularFireAuth.auth.signOut();
  }

  signUpWithEmail(email: string, password: string): Promise<any> {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  signInWithEmail(email: string, password: string): Promise<any> {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
  }
}
