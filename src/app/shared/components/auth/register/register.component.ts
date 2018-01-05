import { Component, ViewChild} from '@angular/core';

@Component({
    selector: 'register-component',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    @ViewChild('input') input;

    mouseOver = false;

    onChange(files) {

    }
}
