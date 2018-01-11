import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LayoutComponent } from '../../shared/components/layout/layout.component';

@Component({
  selector: 'auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.css']
})
export class AuthDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AuthDialogComponent>
  ) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
