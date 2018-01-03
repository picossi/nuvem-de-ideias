import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Idea } from '../../../shared/models/idea.model';
import { IdeaService } from '../../idea/idea.service';
import { Commentary } from '../../../shared/models/commentary.model';
import { AppComponent } from '../../../app.component';
import { CommentsService } from '../comments.service';

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
        public appComponent: AppComponent
    ) { }

    ngOnInit() { }

    saveCommentary(text: string) {
        if (!text) { return; }
        Object.assign(this.commentary, new Commentary(null, text, this.appComponent.currentUser));
        this.commentaryInputEl.nativeElement.value = '';
        this
            .commentsService
            .insert(this.idea.Id, this.commentary);
    }
}
