import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
    constructor(
        public angularFireAuth : AngularFireAuth
    ){}

    signInWithFacebook() {
        this.angularFireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
    }

    signOut() {
        this.angularFireAuth.auth.signOut();
    }
}
