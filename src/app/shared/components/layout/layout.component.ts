import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent implements OnInit {

  constructor(
    private appComponent: AppComponent,
    private authService : AuthService
  ) {}

  ngOnInit() {}

  login() {
    this.authService.signInWithFacebook();
  }

  logoff() {
    this.authService.signOut();
  }


}
