import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RegistrationService} from '../_services/registration.service';
import {RegistrationCommand} from '../_models/RegistrationCommand';
import * as moment from 'moment';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
    // id of existing patient
    id: string;
    patient: RegistrationCommand;
    personName: string;
    age: number;
    sex: string;
    patientStatus: string;
    maritalStatus: string;

    constructor(private route: ActivatedRoute,
                private registrationService: RegistrationService) {
        this.route.params.subscribe(res => {
            this.id = res.id;
        });
    }

    async ngOnInit(): Promise<void> {
        if (this.id) {
            //await this.getPatient(this.id);
        }
    }

    private async getPatient(id: string): Promise<void> {
        this.patient = await this.registrationService.getPatient(id).toPromise();
        this.personName = this.patient.lastName + ', ' + this.patient.firstName;
        this.age = this.ageFromDateOfBirthday(this.patient.doB);
        if (!this.patient.death) {
            this.patientStatus = 'Alive';
        } else {
            this.patientStatus = 'Dead';
        }
    }

    public ageFromDateOfBirthday(dateOfBirth: any): number {
        return moment().diff(dateOfBirth, 'years');
    }
}
