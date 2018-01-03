import { Component, Input } from '@angular/core';
import { Commentary } from '../../../shared/models/commentary.model';

@Component({
    selector: 'commentary',
    templateUrl: './commentary.component.html',
    styleUrls: ['./commentary.component.css']
})
export class CommentaryComponent {
    @Input() commentary: Commentary;

    constructor() { }

    public get commentaryDate(): Date {
        return new Date(this.commentary.Date);
    }
}
