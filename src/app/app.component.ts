import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { User } from './shared/models/user.model';
import { AuthService } from './shared/services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public currentUser: User = new User();

  constructor(
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.router.navigateByUrl('ideas');
  }


  showSnackBar(title: string, action: string): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(title, action, {duration: 3000});
  }
}
