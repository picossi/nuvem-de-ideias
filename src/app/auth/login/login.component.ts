import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';

@Component({
    selector: 'login-component',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    @Output() loginFinished: EventEmitter<any> = new EventEmitter<any>();

    form: FormGroup;

    public get isFormValid(): boolean {
        return this.form.dirty || this.form.valid;
    }

    constructor(
        private authService: AuthService
    ) { }

    ngOnInit() {
        this.form = this.getForm();
    }

    getForm(): FormGroup {
        return new FormGroup({
            email: new FormControl(null, Validators.required),
            password: new FormControl(null, [Validators.required, Validators.minLength(6)])
        });
    }

    submit() {
        if (this.isFormValid) {
            this.login();
        } else {
            return;
        }
    }

    login() {
        const email = this.form.get('email').value;
        const password = this.form.get('password').value;

        this
            .authService
            .signInWithEmail(this.insertMailDomain(email), password)
            .then(() => this.loginFinished.emit(true))
            .catch(() => this.loginFinished.emit(false));
    }

    insertMailDomain(str: string): string {
        if (str.indexOf('([a-z0-9A-Z]+\@forlogic\.net)') > -1) {
            return str;
        } else {
            return str += '@forlogic.net';
        }
    }
}
