import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-physical-examination',
  templateUrl: './physical-examination.component.html',
  styleUrls: ['./physical-examination.component.css']
})
export class PhysicalExaminationComponent implements OnInit {
    physicalExaminationFormGroup: FormGroup;
    maxDate: Date;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.physicalExaminationFormGroup = this.formBuilder.group({
            visitDate: new FormControl(new Date(), Validators.required),
            general: new FormControl('', Validators.required),
            head: new FormControl('', Validators.required),
            eyes: new FormControl('', Validators.required),
            ears: new FormControl('', Validators.required),
            nose: new FormControl('', Validators.required),
            mouthAndThroat: new FormControl('', Validators.required),
            neck: new FormControl('', Validators.required),
            breasts: new FormControl('', Validators.required),
            gastrointestinal: new FormControl('', Validators.required),
            genitourinary: new FormControl('', Validators.required),
            neurologic: new FormControl('', Validators.required),
            psychiatric: new FormControl('', Validators.required),
        });

        this.maxDate = new Date();
    }

}
