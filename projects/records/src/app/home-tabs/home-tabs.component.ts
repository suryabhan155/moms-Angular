import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RegistrationService} from '../_services/registration.service';

@Component({
    selector: 'app-home-tabs',
    templateUrl: './home-tabs.component.html',
    styleUrls: ['./home-tabs.component.css'],
    providers: [RegistrationService]
})
export class HomeTabsComponent implements OnInit {
    // id of existing patient
    id: string;
    fullName: string;
    dateOfBirth: Date;
    phone: string;

    constructor(private route: ActivatedRoute,
                private registrationService: RegistrationService) {
        this.route.params.subscribe(res => {
            this.id = res.id;
        });
    }

    async ngOnInit(): Promise<void> {
        try {
            const patient = await this.registrationService.getPatient(this.id).toPromise();
            if (patient) {
                const lastName = patient.lastName ? patient.lastName : '';
                const firstName = patient.firstName ? patient.firstName : '';
                const middleName = patient.middleName ? patient.middleName : '';
                this.fullName = lastName + ', ' + firstName + ' ' + middleName;
                this.dateOfBirth = patient.doB;
                this.phone = patient.phone;
            }
        } catch (e) {

        }
    }
}
