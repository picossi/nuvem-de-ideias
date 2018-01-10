import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthDialogComponent } from './auth-dialog/auth-dalog.component';
import { AuthService } from './shared/auth.service';

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        AuthDialogComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        AuthDialogComponent
    ],
    providers: [
        AuthService
    ],
    entryComponents: [
        AuthDialogComponent
    ]
})
export class AuthModule {}
