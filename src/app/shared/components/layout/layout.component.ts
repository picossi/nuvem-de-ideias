import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { MatDialog } from '@angular/material';

import { AuthDialogComponent } from '../../../auth/auth-dialog/auth-dalog.component';
import { AuthService } from '../../../auth/shared/auth.service';




@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent implements OnInit {

  constructor(
    public appComponent: AppComponent,
    public authService: AuthService,
    private dialog: MatDialog
  ) { }

  ngOnInit() { }

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
