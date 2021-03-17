import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ClinicManagementService} from '../../_services/clinic-management.service';
import {VitalsCommand} from '../../_models/VitalsCommand';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../../../../../src/app/services/auth.service';

@Component({
    selector: 'app-vitals',
    templateUrl: './vitals.component.html',
    styleUrls: ['./vitals.component.css'],
    providers: [ClinicManagementService]
})
export class VitalsComponent implements OnInit {
    // id of existing patient
    id: string;

    vitalsFormGroup: FormGroup;
    maxDate: Date;

    constructor(private formBuilder: FormBuilder,
                private clinicManagementService: ClinicManagementService,
                private route: ActivatedRoute,
                private authService: AuthService,
                private router: Router) {
        this.route.params.subscribe(res => {
            this.id = res.id;
        });
        this.maxDate = new Date();
    }

    ngOnInit(): void {
        this.vitalsFormGroup = this.formBuilder.group({
            visitDate: new FormControl(new Date(), Validators.required),
            bpSystolic: [''],
            bpDiastolic: [''],
            pulse: [''],
            respRate: [''],
            temperature: new FormControl('', Validators.required),
            weight: new FormControl('', Validators.required),
            height: new FormControl('', Validators.required),
            notes: new FormControl('')
        });

        this.maxDate = new Date();
    }

    async onSaveVitals(): Promise<void> {
        try {
            const vitalsCommand: VitalsCommand = {
                bpDiastolic: this.vitalsFormGroup.value.bpDiastolic ? parseFloat(this.vitalsFormGroup.value.bpDiastolic) : null,
                bpSystolic: this.vitalsFormGroup.value.bpSystolic ? parseFloat(this.vitalsFormGroup.value.bpSystolic) : null,
                createDate: new Date(),
                height: this.vitalsFormGroup.value.height,
                id: '00000000-0000-0000-0000-000000000000',
                patientId: this.id,
                pulse: this.vitalsFormGroup.value.pulse ? parseFloat(this.vitalsFormGroup.value.pulse) : null,
                respiratoryRate: this.vitalsFormGroup.value.respRate ? parseFloat(this.vitalsFormGroup.value.respRate) : null,
                temperature: this.vitalsFormGroup.value.temperature,
                userId: this.authService.user.profile.sub,
                vitalDateTime: this.vitalsFormGroup.value.visitDate,
                void: false,
                weight: this.vitalsFormGroup.value.weight,
                notes: this.vitalsFormGroup.value.notes
            };
            const result = await this.clinicManagementService.addPatientVitals(vitalsCommand).toPromise();

            await this.router.navigate(['/records/manageVitals/' + this.id]);
        } catch (e) {
            console.log(e);
        }
    }
}
