import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { MatDialog } from '@angular/material';

import { AuthDialogComponent } from '../../../auth/auth-dialog/auth-dalog.component';
import { AuthService } from '../../../auth/shared/auth.service';
import { Subscription } from 'rxjs/Subscription';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';




@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, OnDestroy {

  mediaSubs: Subscription;
  isMobile = false;

  constructor(
    public appComponent: AppComponent,
    public authService: AuthService,
    private dialog: MatDialog,
    public media: ObservableMedia
  ) { }

  ngOnInit() {
    this.mediaSubs = this.getMediaSubscription();
  }

  ngOnDestroy() {
    if (this.mediaSubs) {
      this.mediaSubs.unsubscribe();
    }
  }

  getMediaSubscription(): Subscription {
    return this
      .media
      .subscribe((change: MediaChange) => {
        this.isMobile = change.mqAlias === 'sm' || change.mqAlias === 'xs';
      });
  }

  login() {
    // this.authService.signInWithFacebook();
    const dialog = this.dialog.open(AuthDialogComponent, {
      width: '750px',
      height: '500px',
      panelClass: 'teste'
    });
  }

  logoff() {
    this.authService.signOut();
  }


}
