import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Idea } from '../../../../shared/models/idea.model';
import { AppComponent } from '../../../../app.component';
import { IdeaService } from '../../idea.service';
import { LayoutComponent } from '../../../../shared/components/layout/layout.component';
import { Subscription } from 'rxjs/Subscription';
import { CommentsService } from '../../../comments/comments.service';
import { Commentary } from '../../../../shared/models/commentary.model';


@Component({
    selector: 'idea-details-dialog',
    templateUrl: './idea-details-dialog.component.html',
})
export class IdeaDetailsDialog implements OnInit {
    idea: Idea;
    commentsSubs: Subscription;
    comments: Array<Commentary> = new Array<Commentary>();

    constructor(
        public dialogRef: MatDialogRef<IdeaDetailsDialog>,
        public ideaService: IdeaService,
        public commentsService: CommentsService
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
