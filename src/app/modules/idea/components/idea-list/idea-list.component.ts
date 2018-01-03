import { Component, OnInit, trigger, state, transition, animate, style, Query, ViewContainerRef, OnDestroy } from '@angular/core';
import { IdeaNewDialog } from '../idea-new/idea-new-dialog.component';
import { MatDialog } from '@angular/material';
import { Idea } from '../../../../shared/models/idea.model';
import { IdeaService } from '../../idea.service';
import { AppComponent } from '../../../../app.component';
import { query, stagger } from '@angular/animations';
import { IdeaDetailsDialog } from '../idea-details/idea-details-dialog.component';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'idea-list',
    templateUrl: './idea-list.component.html',
    styleUrls: ['./idea-list.component.css'],
    // animations: [
    //     trigger('fadeIn', [
    //       transition(':enter', [
    //         style({ opacity: '0' }),
    //         animate('.30s ease-out', style({ opacity: '1' })),
    //       ]),
    //     ]),
    //   ] [@fadeIn]=''''
})
export class IdeaListComponent implements OnInit, OnDestroy {
    ideas: Array<Idea> = new Array<Idea>();
    isLoading: boolean = false;
    ideaSubs: Subscription;

    constructor(
        public dialog: MatDialog,
        public ideaService: IdeaService,
        public appComponent: AppComponent,
        public viewContainerRef: ViewContainerRef
    ) { }

    ngOnInit() {
        this.ideaSubs = this.getIdeasSubscription();
    }

    ngOnDestroy() {
        if (this.ideaSubs) {
         this.ideaSubs.unsubscribe();
        }
    }

    getIdeasSubscription(): Subscription {
        return this
            .ideaService
            .get()
            .subscribe((data: Array<Idea>) => {
                this.ideas = data.filter(x => x.Removed === false);
                this.isLoading = false;
            });
    }

    addIdea() {
        const dialog = this.dialog.open(IdeaNewDialog, {
            width: '400px'
        });
        dialog
            .afterClosed()
            .subscribe(result => {
                if (!result) { return; }
                const title = result.controls.title.value;
                const desc = result.controls.description.value;
                if (title && desc) {
                    const idea = new Idea(null, title, desc, 0, 0, this.appComponent.currentUser, false, false);
                    this.ideaService.insert(idea);
                }
            });
    }

    openDetails(idea: Idea) {
        const dialog = this.dialog.open(IdeaDetailsDialog, {
            width: '600px',
            viewContainerRef: this.viewContainerRef
        });
        dialog.componentInstance.idea = idea;
    }

}
