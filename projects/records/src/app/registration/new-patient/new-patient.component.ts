import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DobCalculatorComponent} from '../dob-calculator/dob-calculator.component';
import * as moment from 'moment';
import {LookupService} from '../../_services/lookup.service';
import {RegistrationService} from '../../_services/registration.service';
import {RegistrationCommand} from '../../_models/RegistrationCommand';
import {AuthService} from '../../../../../../src/app/services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSelectChange} from '@angular/material/select';
import {MatOption} from '@angular/material/core';
import * as _ from 'lodash';

@Component({
    selector: 'app-new-patient',
    templateUrl: './new-patient.component.html',
    styleUrls: ['./new-patient.component.css'],
    providers: [LookupService, RegistrationService]
})
export class NewPatientComponent implements OnInit {
    isLinear = true;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    thirdFormGroup: FormGroup;
    fourthFormGroup: FormGroup;
    fifthFormGroup: FormGroup;
    maxDate: Date;

    // id of existing patient
    id: string;

    // LookupOptions
    GenderOptions: any[] = [];
    MaritalStatusOptions: any[] = [];

    CountyOptions: any[] = [];
    SubCountyOptions: any[] = [];
    WardOptions: any[] = [];

    RelationshipOptions: any[] = [];

    constructor(private formBuilder: FormBuilder,
                public dialog: MatDialog,
                private lookupService: LookupService,
                private registrationService: RegistrationService,
                private authService: AuthService,
                private router: Router,
                private route: ActivatedRoute) {
        this.maxDate = new Date();
        this.route.params.subscribe(res => {
            this.id = res.id;
        });
    }

    async ngOnInit(): Promise<void> {
        this.firstFormGroup = this.formBuilder.group({
            firstName: ['', Validators.required],
            middleName: [''],
            lastName: ['', Validators.required],
            sex: ['', Validators.required],
            maritalStatus: ['', Validators.required],
            doB: new FormControl('', Validators.required),
            registrationDate: new FormControl(new Date(), Validators.required),
            identificationNumber: new FormControl('', Validators.required)
        });

        this.secondFormGroup = this.formBuilder.group({
            county: ['', Validators.required],
            subCounty: ['', Validators.required],
            ward: ['', Validators.required],
            email: ['', Validators.compose([Validators.email])],
            mobilePhone: [''],
            city: [''],
            address: [''],
            postalCode: [''],
            homePhone: [''],
            id: [''],
        });

        this.thirdFormGroup = this.formBuilder.group({
            firstName: [''],
            middleName: [''],
            lastName: [''],
            relationship: [''],
        });

        this.fourthFormGroup = this.formBuilder.group({
            occupation: [''],
            employers: [''],
            employerAddress: [''],
            industry: [''],
            city: [''],
            country: [''],
            id: [''],
        });

        this.fifthFormGroup = this.formBuilder.group({
            patientStatus: ['Alive', Validators.required],
            dateDeceased: ['', Validators.required],
            reasonDeceased: ['', Validators.required],
            icD10: ['', Validators.required],
            id: [''],
        });

        this.fifthFormGroup.controls.dateDeceased.disable({onlySelf: true});
        this.fifthFormGroup.controls.reasonDeceased.disable({onlySelf: true});
        this.fifthFormGroup.controls.icD10.disable({onlySelf: true});

        await this.getLookupOptions();

        if (this.id) {
            await this.GetPatient(this.id);
        }
    }

    getErrorMessage(): string {
        if (this.secondFormGroup.controls.email.hasError('required')) {
            return 'You must enter a value';
        }

        return this.secondFormGroup.controls.email.hasError('email') ? 'Not a valid email' : '';
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(DobCalculatorComponent, {
        });

        dialogRef.afterClosed().subscribe(result => {
            if (!result) {
                return;
            }

            const currentDate = new Date();
            currentDate.setDate(15);
            currentDate.setMonth(5);
            const estDob = moment(currentDate.toISOString());
            const dob = estDob.add((result.age * -1), 'years');

            this.firstFormGroup.controls.doB.setValue(moment(dob).toDate());
        });
    }

    async getLookupOptions(): Promise<void> {
        this.GenderOptions = await this.lookupService.getLookByGroupName('Gender').toPromise();
        this.MaritalStatusOptions = await this.lookupService.getLookByGroupName('MaritalStatus').toPromise();
        let counties = [];
        const result = await this.lookupService.getCounties().toPromise();
        result.map(obj => {
            counties.push({
                id: obj.countyUid,
                countyName: obj.countyName
            });
        });
        counties = _.uniqBy(counties, obj => obj.id);
        this.CountyOptions = _.sortBy(counties, obj => obj.countyName);
        this.RelationshipOptions = await this.lookupService.getLookByGroupName('Relationship').toPromise();
    }

    onPatientStatusChange(): void {
        const patientStatus = this.fifthFormGroup.value.patientStatus;
        if (patientStatus === 'Alive') {
            this.fifthFormGroup.controls.dateDeceased.disable({onlySelf: true});
            this.fifthFormGroup.controls.reasonDeceased.disable({onlySelf: true});
            this.fifthFormGroup.controls.icD10.disable({onlySelf: true});
            this.fifthFormGroup.updateValueAndValidity();
        } else {
            this.fifthFormGroup.controls.dateDeceased.enable({onlySelf: false});
            this.fifthFormGroup.controls.reasonDeceased.enable({onlySelf: false});
            this.fifthFormGroup.controls.icD10.enable({onlySelf: false});
            this.fifthFormGroup.updateValueAndValidity();
        }
    }

    onRegisterGuardianChange(): void {
        const registerGuardian = this.thirdFormGroup.value.registerGuardian;
        if (registerGuardian === 'yes') {
            this.thirdFormGroup.controls.firstName.enable({ onlySelf: true });
            this.thirdFormGroup.controls.middleName.enable({ onlySelf: true });
            this.thirdFormGroup.controls.lastName.enable({ onlySelf: true });
            this.thirdFormGroup.controls.relationship.enable({ onlySelf: true });
            this.thirdFormGroup.updateValueAndValidity();
        } else {
            this.thirdFormGroup.controls.firstName.disable({ onlySelf: true });
            this.thirdFormGroup.controls.middleName.disable({ onlySelf: true });
            this.thirdFormGroup.controls.lastName.disable({ onlySelf: true });
            this.thirdFormGroup.controls.relationship.disable({ onlySelf: true });
            this.thirdFormGroup.updateValueAndValidity();
        }
    }

    async SaveRegistration(): Promise<void> {
        const newPatient: RegistrationCommand = {
            id: '00000000-0000-0000-0000-000000000000',
            createDate: new Date(),
            userId: this.authService.user.profile.sub,
            void: false,
            firstName: this.firstFormGroup.value.firstName,
            lastName: this.firstFormGroup.value.lastName,
            middleName: this.firstFormGroup.value.middleName,
            doB: this.firstFormGroup.value.doB,
            sex: this.firstFormGroup.value.sex,
            maritalStatus: this.firstFormGroup.value.maritalStatus,
            identificationNumber: this.firstFormGroup.value.identificationNumber,
            patientNumber: new Date().getFullYear() + '-' + Math.floor(Math.random() * 90000) + 10000,
            registrationDate: this.firstFormGroup.value.registrationDate,
            phone: this.secondFormGroup.value.mobilePhone,
            narrative: null,
            searchVector: [],
            guardians: [],
            contacts: [
                {
                    county: this.secondFormGroup.value.county,
                    subCounty: this.secondFormGroup.value.subCounty,
                    ward: this.secondFormGroup.value.ward,
                    address: this.secondFormGroup.value.address,
                    city: this.secondFormGroup.value.city,
                    createDate: new Date(),
                    email: this.secondFormGroup.value.email,
                    homePhone: this.secondFormGroup.value.homePhone,
                    mobilePhone: this.secondFormGroup.value.mobilePhone,
                    patientId: '00000000-0000-0000-0000-000000000000',
                    postalCode: this.secondFormGroup.value.postalCode,
                    userId: this.authService.user.profile.sub,
                    void: false,
                    id: '00000000-0000-0000-0000-000000000000'
                }
            ],
            employers: [
                {
                    occupation: this.secondFormGroup.value.occupation,
                    city: this.secondFormGroup.value.city,
                    country: this.secondFormGroup.value.country,
                    createDate: new Date(),
                    employerAddress: this.secondFormGroup.value.employerAddress,
                    employers: this.secondFormGroup.value.employers,
                    industry: this.secondFormGroup.value.industry,
                    patientId: '00000000-0000-0000-0000-000000000000',
                    userId: this.authService.user.profile.sub,
                    void: false,
                    id: '00000000-0000-0000-0000-000000000000'
                }
            ],
            death: {
                reasonDeceased: this.fifthFormGroup.value.reasonDeceased,
                dateDeceased: this.fifthFormGroup.value.dateDeceased,
                createDate: new Date(),
                icD10: this.fifthFormGroup.value.icD10,
                patientId: '00000000-0000-0000-0000-000000000000',
                userId: this.authService.user.profile.sub,
                void: false,
                id: '00000000-0000-0000-0000-000000000000'
            }
        };


        try {
            if (this.id) {
                newPatient.id = this.id;
                if (newPatient.contacts.length > 0) {
                    newPatient.contacts[0].patientId = this.id;
                    newPatient.contacts[0].id = this.secondFormGroup.value.id ? this.secondFormGroup.value.id : '00000000-0000-0000-0000-000000000000';
                }

                if (newPatient.employers.length > 0) {
                    newPatient.employers[0].patientId = this.id;
                    newPatient.employers[0].id = this.fourthFormGroup.value.id ? this.fourthFormGroup.value.id : '00000000-0000-0000-0000-000000000000';
                }

                if (newPatient.death) {
                    if (this.fifthFormGroup.value.patientStatus === 'Alive') {
                        newPatient.death.void = true;
                        newPatient.death.voidDate = new Date();
                    }
                    newPatient.death.patientId = this.id;
                    newPatient.death.id = this.fifthFormGroup.value.id ? this.fifthFormGroup.value.id : '00000000-0000-0000-0000-000000000000';
                }

                const result = await this.registrationService.registerPatient(newPatient).toPromise();
                const contactResult = await this.registrationService.updateContacts(newPatient.contacts[0]).toPromise();
                // const employersResult = await this.registrationService.updateEmployers(newPatient.employers).toPromise();
                const deathresult = await this.registrationService.updateDeath(newPatient.death).toPromise();
            } else {
                const result = await this.registrationService.registerPatient(newPatient).toPromise();
            }

            await this.router.navigate(['/records/allPatients']);
        } catch (e) {
            console.log(e);
        }
    }

    async GetPatient(id: string): Promise<void> {
        try {
            const patient = await this.registrationService.getPatient(id).toPromise();
            this.firstFormGroup.controls.firstName.setValue(patient.firstName);
            this.firstFormGroup.controls.middleName.setValue(patient.middleName);
            this.firstFormGroup.controls.lastName.setValue(patient.lastName);
            this.firstFormGroup.controls.sex.setValue(patient.sex);
            this.firstFormGroup.controls.maritalStatus.setValue(patient.maritalStatus);
            this.firstFormGroup.controls.doB.setValue(patient.doB);
            this.firstFormGroup.controls.registrationDate.setValue(patient.registrationDate);
            this.firstFormGroup.controls.identificationNumber.setValue(patient.identificationNumber);

            if (patient.contacts.length > 0) {
                this.secondFormGroup.controls.county.setValue(patient.contacts[0].county);
                const county = this.CountyOptions.filter(obj => obj.id === patient.contacts[0].county);
                await this.onCountySelect(null, county[0].countyName);
                const subCounty = this.SubCountyOptions.filter(obj => obj.id === patient.contacts[0].subCounty);
                await this.onSubCountySelect(null, subCounty[0].subCountyName);
                this.secondFormGroup.controls.subCounty.setValue(patient.contacts[0].subCounty);
                this.secondFormGroup.controls.ward.setValue(patient.contacts[0].ward);
                this.secondFormGroup.controls.email.setValue(patient.contacts[0].email);
                this.secondFormGroup.controls.mobilePhone.setValue(patient.contacts[0].mobilePhone);
                this.secondFormGroup.controls.city.setValue(patient.contacts[0].city);
                this.secondFormGroup.controls.address.setValue(patient.contacts[0].address);
                this.secondFormGroup.controls.postalCode.setValue(patient.contacts[0].postalCode);
                this.secondFormGroup.controls.homePhone.setValue(patient.contacts[0].homePhone);
                this.secondFormGroup.controls.id.setValue(patient.contacts[0].id);
            }

            if (patient.employers.length > 0) {
                this.fourthFormGroup.controls.occupation.setValue(patient.employers[0].occupation);
                this.fourthFormGroup.controls.employers.setValue(patient.employers[0].employers);
                this.fourthFormGroup.controls.employerAddress.setValue(patient.employers[0].employerAddress);
                this.fourthFormGroup.controls.industry.setValue(patient.employers[0].industry);
                this.fourthFormGroup.controls.city.setValue(patient.employers[0].city);
                this.fourthFormGroup.controls.country.setValue(patient.employers[0].country);
                this.fourthFormGroup.controls.id.setValue(patient.employers[0].id);
            }

            if (patient.death) {
                if (patient.death.void === false) {
                    this.fifthFormGroup.controls.patientStatus.setValue('Dead');
                    this.fifthFormGroup.controls.dateDeceased.setValue(patient.death.dateDeceased);
                    this.fifthFormGroup.controls.reasonDeceased.setValue(patient.death.reasonDeceased);
                    this.fifthFormGroup.controls.icD10.setValue(patient.death.icD10);
                }
                this.fifthFormGroup.controls.id.setValue(patient.death.id);
            }
        } catch (e) {
            console.log(e);
        }
    }

    async onCountySelect(event: MatSelectChange, countyName?: string): Promise<void> {
        let selectedCounty = null;
        let selectedData = null;
        if (!countyName) {
            selectedData = {
                text: (event.source.selected as MatOption).viewValue,
                value: event.source.value
            };
        }

        let subCounties = [];
        selectedCounty = countyName ? countyName : selectedData.text;
        const result = await this.lookupService.getCounty(selectedCounty).toPromise();
        result.map(obj => {
            subCounties.push({
                id: obj.subCountyUid,
                subCountyName: obj.subCountyName
            });
        });
        subCounties = _.uniqBy(subCounties, obj => obj.id);
        this.SubCountyOptions = _.sortBy(subCounties, obj => obj.subCountyName);
    }

    async onSubCountySelect(event?: MatSelectChange, subCountyName?: string): Promise<void> {
        let selectedSubCounty = null;
        let selectedData = null;
        if (!subCountyName) {
            selectedData = {
                text: (event.source.selected as MatOption).viewValue,
                value: event.source.value
            };
        }
        let wards = [];
        selectedSubCounty = subCountyName ? subCountyName : selectedData.text;
        const result = await this.lookupService.getSubCounty(selectedSubCounty).toPromise();
        result.map(obj => {
            wards.push({
                id: obj.wardUid,
                wardName: obj.wardName
            });
        });
        wards = _.uniqBy(wards, obj => obj.id);
        this.WardOptions = _.sortBy(wards, obj => obj.wardName);
    }
}
