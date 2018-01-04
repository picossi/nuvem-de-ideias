import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from 'angularfire2/firestore';

import * as firebase from 'firebase/app';
import { Idea } from '../../shared/models/idea.model';
import { Observable } from 'rxjs/Observable';
import { Commentary } from '../../shared/models/commentary.model';

@Injectable()
export class IdeaService {

  constructor(
    public angularFirestore: AngularFirestore
  ) { }

  public get(): Observable<any> {
    return this
      .angularFirestore
      .collection('ideas')
      .valueChanges();
  }

  public insert(idea: Idea): Promise<any> {
    return this
      .angularFirestore
      .collection('ideas')
      .add(idea.asJson).then((ref) => {
        this.update(ref.id, 'Id', ref.id);
      });
  }

  public update(id: string, prop: string, value: any): Promise<any> {
    return this
      .angularFirestore
      .collection('ideas')
      .doc(id).update({
        [prop]: value
      });
  }
}
