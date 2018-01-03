import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { User } from './shared/models/user.model';
import { AuthService } from './shared/services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public currentUser : User = new User();
  public teste = 123;

  constructor(
    public authService: AuthService,
    private router: Router,
    private snackBar : MatSnackBar
  ){}

  ngOnInit() {
    this.getAuthStatus();
    this.router.navigateByUrl("ideas");
  }

  getAuthStatus(){
    return this
      .authService
      .angularFireAuth
      .auth
      .onAuthStateChanged((data) => {
        if(data) {
          this.currentUser = Object.assign(this.currentUser, new User(true, data.uid, data.displayName, data.email, data.photoURL))
        } else {
          this.currentUser = Object.assign(this.currentUser, new User(false));
        }
      });
  }

  getUser() : User{
    return this.currentUser;
  }

  showSnackBar(title: string, action: string) : MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(title, action, {duration: 3000});
  }

  
  
}
