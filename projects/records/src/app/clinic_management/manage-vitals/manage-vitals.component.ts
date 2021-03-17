import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {ClinicManagementService} from '../../_services/clinic-management.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-manage-vitals',
    templateUrl: './manage-vitals.component.html',
    styleUrls: ['./manage-vitals.component.css'],
    providers: [ClinicManagementService]
})
export class ManageVitalsComponent implements OnInit {
    // id of existing patient
    id: string;
    displayedColumns: string[] = ['vitalDateTime', 'temperature', 'height', 'weight', 'bpSystolic', 'bpDiastolic', 'respiratoryRate', 'pulse'];
    public VitalsDTO: VitalsDTO[] = [];
    dataSource = new MatTableDataSource(this.VitalsDTO);

    constructor(private clinicManagementService: ClinicManagementService,
                private route: ActivatedRoute,
                private router: Router) {
        this.route.params.subscribe(res => {
            this.id = res.id;
        });
    }

    async ngOnInit(): Promise<void> {
        try {
            const result = await this.clinicManagementService.getPatientVitals(this.id).toPromise();
            this.dataSource = new MatTableDataSource(result);
        } catch (e) {

        }
    }

    async addVitals(): Promise<void> {
        await this.router.navigate(['/records/vitals/' + this.id]);
    }
}

export class VitalsDTO {
    bpDiastolic?: number;
    bpSystolic?: number;
    createDate?: Date;
    height?: number;
    id?: string;
    patientId?: string;
    pulse?: number;
    respiratoryRate?: number;
    temperature?: number;
    userId?: string;
    vitalDateTime?: Date;
    void?: boolean;
    voidDate?: Date;
    weight?: number;
}
