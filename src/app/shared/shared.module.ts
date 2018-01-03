import { NgModule, ApplicationRef } from '@angular/core';

import { LayoutComponent } from './components/layout/layout.component';
import { AuthService } from './services/auth.service';
import { MaterialModule } from './modules/material.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AvatarModule } from 'ngx-avatar';
import { IdeaListComponent } from '../modules/idea/components/idea-list/idea-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IdeaNewDialog } from '../modules/idea/components/idea-new/idea-new-dialog.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { HttpModule } from '@angular/http';
import { ChangeDetectorRef } from '@angular/core';
import { IdeaService } from '../modules/idea/idea.service';
import { IdeaCardComponent } from '../modules/idea/components/idea-card/idea-card.component';
import { IdeaDetailsDialog } from '../modules/idea/components/idea-details/idea-details-dialog.component';
import { CommentaryComponent } from '../modules/comments/commentary/commentary.component';
import { CommentaryNewComponent } from '../modules/comments/commentary-new/commentary-new.component';
import { CommentsService } from '../modules/comments/comments.service';
import { MomentModule } from 'angular2-moment';

@NgModule({
    declarations: [
        LayoutComponent,
        IdeaListComponent,
        IdeaNewDialog,
        IdeaCardComponent,
        CommentaryComponent,
        CommentaryNewComponent,
        IdeaDetailsDialog
    ],
    providers: [
        AuthService,
        LayoutComponent,
        ApplicationRef,
        IdeaService,
        CommentsService
    ],
    imports: [
        HttpModule,
        BrowserModule,
        MaterialModule,
        FlexLayoutModule,
        RouterModule,
        AvatarModule,
        ReactiveFormsModule,
        FormsModule,
        MomentModule
    ],
    exports: [
        MaterialModule
    ],
    entryComponents: [
        IdeaNewDialog,
        IdeaDetailsDialog
    ]
})
export class SharedModule{}