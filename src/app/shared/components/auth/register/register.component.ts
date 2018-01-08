import { Component, ViewChild, OnInit, ElementRef, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { User } from '../../../models/user.model';
import { StorageService } from '../../../services/storage.service';

@Component({
    selector: 'register-component',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    @ViewChild('input') input;
    @ViewChild('avatar') avatar: ElementRef;

    @Output() registerFinished: EventEmitter<any> = new EventEmitter<any>();

    mouseOver = false;
    form: FormGroup;
    avatarURL = 'assets/img/user.png';
    avatarFile: File = null;

    get isFormValid(): boolean {
        return this.form.dirty && this.form.valid;
    }

    constructor(
        private authService: AuthService,
        private storage: StorageService
    ) { }

    ngOnInit() {
        this.form = this.getForm();
    }

    getForm(): FormGroup {
        return new FormGroup({
            name: new FormControl(null, Validators.required),
            email: new FormControl(null, Validators.required),
            password: new FormControl(null, [Validators.required, Validators.minLength(6)])
        });
    }

    submit() {
        if (this.isFormValid) {
            this.register();
        } else {
            return;
        }
    }

    register() {
        const name = this.form.get('name').value;
        const email = this.form.get('email').value;
        const password = this.form.get('password').value;

        this
            .authService
            .signUpWithEmail(this.insertMailDomain(email), password)
            .then((value) => {
                this.storage.uploadImage('/users/' + this.avatarFile.name, this.avatarFile).then((data) => {
                    this.authService.currentUser.updateProfile({ displayName: name, photoURL: data.downloadURL });
                });
                this.registerFinished.emit(true);
            });
    }

    onChange(files: File[]) {
        const file = files[0];
        this.setPreviewImage(file);
        this.avatarFile = file;
    }

    setPreviewImage(file: any) {
        const reader = new FileReader();

        reader.onload = (event: any) => {
            this.avatarURL = event.currentTarget.result;
        };

        reader.readAsDataURL(file);
    }

    insertMailDomain(str: string): string {
        if (str.indexOf('([a-z0-9A-Z]+\@forlogic\.net)') > -1) {
            return str;
        } else {
            return str += '@forlogic.net';
        }
    }

}
