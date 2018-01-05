import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Idea } from '../../../../shared/models/idea.model';
import { AppComponent } from '../../../../app.component';
import { IdeaService } from '../../idea.service';
import { LayoutComponent } from '../../../../shared/components/layout/layout.component';

@Component({
  selector: 'idea-new-dialog',
  templateUrl: './idea-new-dialog.component.html'
})
export class IdeaNewDialogComponent implements OnInit {
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<IdeaNewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public ideaService: IdeaService,
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(50)])),
      description: new FormControl(null, Validators.maxLength(300))
    });
  }

  save(): void {
    if (!this.form.valid) {
      return;
    }
    this.dialogRef.close(this.form);
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
