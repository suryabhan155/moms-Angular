import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent implements OnInit {
    vitalsFormGroup: FormGroup;
    maxDate: Date;

    visible = true;
    selectable = true;
    removable = true;
    addOnBlur = true;
    readonly separatorKeysCodes: number[] = [ENTER, COMMA];
    complaints: Complaint[] = [];
    findings: Finding[] = [];

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.vitalsFormGroup = this.formBuilder.group({
            visitDate: new FormControl(new Date(), Validators.required),
            complaint: new FormControl('', Validators.required),
            finding: new FormControl('', Validators.required),
            diagnosis: new FormControl('', Validators.required),
            treatment: new FormControl('', Validators.required),
        });

        this.maxDate = new Date();
    }

    add(event: MatChipInputEvent): void {
        const input = event.input;
        const value = event.value;

        // Add our fruit
        if ((value || '').trim()) {
            this.complaints.push({name: value.trim()});
        }

        // Reset the input value
        if (input) {
            input.value = '';
        }
    }

    addFinding(event: MatChipInputEvent): void {
        const input = event.input;
        const value = event.value;

        // Add our fruit
        if ((value || '').trim()) {
            this.findings.push({name: value.trim()});
        }

        // Reset the input value
        if (input) {
            input.value = '';
        }
    }

    removeComplaint(complaint: Complaint): void {
        const index = this.complaints.indexOf(complaint);

        if (index >= 0) {
            this.complaints.splice(index, 1);
        }
    }

    removeFinding(finding: Finding): void {
        const index = this.findings.indexOf(finding);

        if (index >= 0) {
            this.findings.splice(index, 1);
        }
    }
}

export interface Complaint {
    name: string;
}

export interface Finding {
    name: string;
}
