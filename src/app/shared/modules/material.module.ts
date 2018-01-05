import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule,
  MatIconModule,
  MatTooltipModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatCardModule,
  MatProgressBarModule,
  MatSnackBarModule,
  MatTabsModule
} from '@angular/material';


@NgModule({
  imports: [
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatFormFieldModule,
    MatListModule,
    MatCardModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatTabsModule
  ],
  exports: [
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatTabsModule
  ]
})
export class MaterialModule { }
