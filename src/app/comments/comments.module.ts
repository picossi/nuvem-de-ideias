import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { CommentaryNewComponent } from './commentary-new/commentary-new.component';
import { CommentaryComponent } from './commentary/commentary.component';
import { CommentsService } from './shared/commentary.service';

@NgModule({
    declarations: [
        CommentaryComponent,
        CommentaryNewComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        CommentaryNewComponent,
        CommentaryComponent
    ],
    providers: [
        CommentsService
    ],
})
export class CommentsModule {}
