import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from 'angularfire2/firestore';

import * as firebase from 'firebase/app';
import { Idea } from '../../shared/models/idea.model';
import { Observable } from 'rxjs/Observable';
import { Commentary } from '../../shared/models/commentary.model';

@Injectable()
export class CommentsService {

  constructor(
    public angularFirestore: AngularFirestore
  ) { }

  public get(ideaId: string): Observable<any> {
    return this
      .angularFirestore
      .collection('ideas', ref => ref.orderBy('Date')).doc(ideaId).collection('comments')
      .valueChanges();
  }

  public insert(ideaId: string, commentary: Commentary): Promise<any> {
    return this
      .angularFirestore
      .collection('ideas')
      .doc(ideaId)
      .collection('comments')
      .add(commentary.asJson).then((ref) => {
        this.update(ideaId, ref.id, 'Id', ref.id);
      });
  }

  public update(ideaId: string, commentaryId: string, prop: string, value: any): Promise<any> {
    return this
      .angularFirestore
      .collection('ideas')
      .doc(ideaId)
      .collection('comments')
      .doc(commentaryId)
      .update({
        [prop]: value
      });
  }

}
