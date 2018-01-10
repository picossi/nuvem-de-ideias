import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdeaCardComponent } from './idea-card/idea-card.component';
import { IdeaDetailsDialogComponent } from './idea-details/idea-details-dialog.component';
import { IdeaListComponent } from './idea-list/idea-list.component';
import { IdeaNewDialogComponent } from './idea-new/idea-new-dialog.component';
import { IdeaService } from './shared/idea.service';
import { SharedModule } from '../shared/shared.module';
import { CommentsModule } from '../comments/comments.module';
import { AuthModule } from '../auth/auth.module';

@NgModule({
    declarations: [
        IdeaCardComponent,
        IdeaDetailsDialogComponent,
        IdeaListComponent,
        IdeaNewDialogComponent
    ],
    imports: [
        SharedModule,
        CommentsModule,
        AuthModule
    ],
    exports: [
        IdeaListComponent
    ],
    providers: [
        IdeaService
    ],
    entryComponents: [
        IdeaDetailsDialogComponent,
        IdeaNewDialogComponent
    ]
})
export class IdeaModule {}
