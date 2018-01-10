import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';

import { Idea } from '../../ideas/shared/idea.model';
import { Commentary } from '../shared/commentary.model';
import { CommentsService } from '../shared/commentary.service';
import { AppComponent } from '../../app.component';
import { AuthService } from '../../auth/shared/auth.service';


@Component({
  selector: 'commentary-new',
  templateUrl: './commentary-new.component.html'
})
export class CommentaryNewComponent implements OnInit {
  @Input() idea: Idea;
  @ViewChild('commentaryInput') commentaryInputEl: ElementRef;

  commentary: Commentary = new Commentary();

  constructor(
    public commentsService: CommentsService,
    public appComponent: AppComponent,
    public authService: AuthService
  ) { }

  ngOnInit() { }

  saveCommentary(text: string) {
    if (!text) { return; }
    Object.assign(this.commentary, new Commentary(null, text, this.authService.currentUser));
    this.commentaryInputEl.nativeElement.value = '';
    this
      .commentsService
      .insert(this.idea.Id, this.commentary);
  }
}
