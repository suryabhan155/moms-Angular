import { Component, Inject, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-room-delete',
  templateUrl: './room-delete.component.html',
  styleUrls: ['./room-delete.component.css']
})
export class RoomDeleteComponent implements OnInit {
  title: string;
  constructor(private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<RoomDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
this.title = 'Delete Room';
}

  ngOnInit(): void {
  }
  no(): void {
    this.dialogRef.close('no');
}

yes(): void {
    this.dialogRef.close('yes');
 }
}
