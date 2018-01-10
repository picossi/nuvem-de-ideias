import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Idea } from '../shared/idea.model';
import { Subscription } from 'rxjs/Subscription';
import { Commentary } from '../../comments/shared/commentary.model';
import { IdeaService } from '../shared/idea.service';
import { CommentsService } from '../../comments/shared/commentary.service';
import { AppComponent } from '../../app.component';
import { AuthService } from '../../auth/shared/auth.service';


@Component({
  selector: 'idea-details-dialog',
  templateUrl: './idea-details-dialog.component.html',
  styleUrls: ['./idea-details-dialog.component.css']
})
export class IdeaDetailsDialogComponent implements OnInit {
  idea: Idea;
  commentsSubs: Subscription;
  comments: Array<Commentary> = new Array<Commentary>();

  constructor(
    public dialogRef: MatDialogRef<IdeaDetailsDialogComponent>,
    public ideaService: IdeaService,
    public commentsService: CommentsService,
    public appComponent: AppComponent,
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.commentsSubs = this.getCommentsSubscription();
  }

  getCommentsSubscription(): Subscription {
    return this
      .commentsService
      .get(this.idea.Id)
      .subscribe((data: Commentary[]) => {
        this.comments = data.sort(this.compare);
      });
  }

  compare(c1: Commentary, c2: Commentary): number {
    if (c1.Date > c2.Date) {
      return -1;
    }
    if (c1.Date < c2.Date) {
      return 1;
    }
    return 0;
  }

  cancel(): void {
    this.dialogRef.close();
  }


}
