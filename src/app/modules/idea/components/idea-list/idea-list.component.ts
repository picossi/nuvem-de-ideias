import { Component, OnInit, trigger, state, transition, animate, style, Query, OnDestroy } from '@angular/core';
import { IdeaNewDialogComponent } from '../idea-new/idea-new-dialog.component';
import { Idea } from '../../../../shared/models/idea.model';
import { IdeaService } from '../../idea.service';
import { AppComponent } from '../../../../app.component';
import { query, stagger } from '@angular/animations';
import { Subscription } from 'rxjs/Subscription';
import { MatDialog } from '@angular/material';
import { AuthService } from '../../../../shared/services/auth.service';

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
  isLoading: false;
  ideaSubs: Subscription;

  constructor(
    public ideaService: IdeaService,
    public appComponent: AppComponent,
    public dialog: MatDialog,
    public authService: AuthService
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
        this.ideas.forEach((idea) => {
          this.ideaService.getVotes(idea);
        });
        this.isLoading = false;
      });
  }

  addIdea() {
    const dialog = this.dialog.open(IdeaNewDialogComponent, {
      width: '400px'
    });
    dialog
      .afterClosed()
      .subscribe((result) => {
        if (!result) {
          return;
        }
        const title = result.controls.title.value;
        const desc = result.controls.description.value;
        if (title) {
          this.ideaService.insert(new Idea(null, title, desc, 0, 0, this.authService.currentUser, false, false));
        }
      });
  }
}
