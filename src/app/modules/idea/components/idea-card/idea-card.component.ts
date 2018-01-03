import { Component, Input, trigger, style, state, transition, animate } from '@angular/core';
import { Idea } from '../../../../shared/models/idea.model';
import { IdeaService } from '../../idea.service';
import { AppComponent } from '../../../../app.component';

@Component({
    selector: 'idea-card',
    templateUrl: './idea-card.component.html',
    styleUrls: ['./idea-card.component.css']
})
export class IdeaCardComponent {
    @Input() idea: Idea;

    constructor(
        public ideaService: IdeaService,
        public appComponent: AppComponent,
    ) { }

    upVote() {
        this.ideaService.update(this.idea.Id, 'UpVote', ++this.idea.UpVote);
    }

    downVote() {
        this.ideaService.update(this.idea.Id, 'DownVote', ++this.idea.DownVote);
    }

    remove(idea: Idea) {
        this.ideaService.update(this.idea.Id, 'Removed', true);
        this.appComponent.showSnackBar('Ideia removida', 'DESFAZER').onAction().subscribe(() => {
            this.ideaService.update(this.idea.Id, 'Removed', false);
        });
    }

}
