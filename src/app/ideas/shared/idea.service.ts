import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from 'angularfire2/firestore';

import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Idea } from './idea.model';




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

  public getVotes(idea: Idea) {
    if (idea.Votes) {
      Object.values(idea.Votes).forEach(vote => {
        idea.UpVote += vote ? 1 : 0;
        idea.DownVote += !vote ? 1 : 0;
      });
    } else {
      idea.UpVote = idea.DownVote = 0;
    }
  }
}
