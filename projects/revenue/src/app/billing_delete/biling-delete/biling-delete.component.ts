import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-biling-delete',
  templateUrl: './biling-delete.component.html',
  styleUrls: ['./biling-delete.component.css']
})
export class BilingDeleteComponent implements OnInit {
  title: string;

  constructor(private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<BilingDeleteComponent>,
              @Inject(MAT_DIALOG_DATA) data) {
      this.title = 'Delete Billing Manage';
  }

  ngOnInit(): void {}

  no(): void {
      this.dialogRef.close('no');
  }

  yes(): void {
      this.dialogRef.close('yes');
  }
}

