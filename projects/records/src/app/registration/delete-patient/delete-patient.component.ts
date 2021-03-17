import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-patient',
  templateUrl: './delete-patient.component.html',
  styleUrls: ['./delete-patient.component.css']
})
export class DeletePatientComponent implements OnInit {
    title: string;

    constructor(private formBuilder: FormBuilder,
                private dialogRef: MatDialogRef<DeletePatientComponent>,
                @Inject(MAT_DIALOG_DATA) data) {
        this.title = 'Delete this records';
    }

    ngOnInit(): void {}

    no(): void {
        this.dialogRef.close('no');
    }

    yes(): void {
        this.dialogRef.close('yes');
    }
}
