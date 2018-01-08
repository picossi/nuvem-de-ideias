import { Injectable, EventEmitter, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FirebaseApp} from 'angularfire2';
import 'firebase/storage';

import * as firebase from 'firebase/app';

@Injectable()
export class StorageService {
  constructor(
    @Inject(FirebaseApp) public firebaseApp: firebase.app.App
  ) { }

  uploadImage(path: string, file: any): firebase.storage.UploadTask {
    const storageRef = this.firebaseApp.storage().ref();
    return storageRef.child(path).put(file);
  }


}
