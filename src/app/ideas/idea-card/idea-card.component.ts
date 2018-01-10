import { Component, Input, trigger, style, state, transition, animate, ViewContainerRef } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';

import { IdeaDetailsDialogComponent } from '../idea-details/idea-details-dialog.component';
import { Idea } from '../shared/idea.model';
import { IdeaService } from '../shared/idea.service';
import { AppComponent } from '../../app.component';
import { AuthService } from '../../auth/shared/auth.service';


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
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    public viewContainerRef: ViewContainerRef,
    public authService: AuthService
  ) { }

  upVote(ev) {
    this.stopPropagation(ev);
    if (this.checkVotePermission()) {
      this.idea.Votes = this.idea.Votes || {};
      if (this.idea.Votes[this.authService.currentUser.uid]) {
        delete this.idea.Votes[this.authService.currentUser.uid];
      } else {
        this.idea.Votes[this.authService.currentUser.uid] = true;
      }
      this.ideaService.update(this.idea.Id, 'Votes', this.idea.Votes);
    }
  }

  downVote(ev) {
    this.stopPropagation(ev);
    if (this.checkVotePermission()) {
      this.idea.Votes = this.idea.Votes || {};
      if (this.idea.Votes[this.authService.currentUser.uid] === false) {
        delete this.idea.Votes[this.authService.currentUser.uid];
      } else {
        this.idea.Votes[this.authService.currentUser.uid] = false;
      }
      this.ideaService.update(this.idea.Id, 'Votes', this.idea.Votes);
    }
  }

  checkVotePermission(): boolean {
    if (!this.authService.currentUser || !this.authService.currentUser.uid) {
      this.snackBar.open('Você deve fazer o login para votar', 'OK', { duration: 3000 });
      return false;
    }
    return true;
  }

  remove(idea: Idea) {
    this.ideaService.update(this.idea.Id, 'Removed', true);
    this.appComponent.showSnackBar('Ideia removida', 'DESFAZER').onAction().subscribe(() => {
      this.ideaService.update(this.idea.Id, 'Removed', false);
    });
  }

  openDetails(idea: Idea) {
    const dialog = this.dialog.open(IdeaDetailsDialogComponent, {
      width: '600px',
      viewContainerRef: this.viewContainerRef
    });
    dialog.componentInstance.idea = idea;
  }

  /**
   * Impede que o click da para visualizar a modal seja acionado.
   * @param ev evento do click
   */
  stopPropagation(ev) {
    ev.stopPropagation();
  }
}
