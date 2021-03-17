import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dob-calculator',
  templateUrl: './dob-calculator.component.html',
  styleUrls: ['./dob-calculator.component.css']
})
export class DobCalculatorComponent implements OnInit {
    title: string;
    public DobCalculatorFormGroup: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private dialogRef: MatDialogRef<DobCalculatorComponent>,
        @Inject(MAT_DIALOG_DATA) data)
    {
        this.title = 'DOB Calculator';
    }

    ngOnInit(): void {
        this.DobCalculatorFormGroup = this.formBuilder.group({
            age: new FormControl('', [Validators.required]),
        });
    }

    save(): void {
        if (this.DobCalculatorFormGroup.valid) {
            this.dialogRef.close(this.DobCalculatorFormGroup.value);
        } else {
            return;
        }
    }

    close(): void {
        this.dialogRef.close();
    }

}
