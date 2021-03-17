import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {RegistrationService} from '../../_services/registration.service';
import {Router} from '@angular/router';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {DeletePatientComponent} from '../delete-patient/delete-patient.component';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-all-patients',
    templateUrl: './all-patients.component.html',
    styleUrls: ['./all-patients.component.css'],
    providers: [RegistrationService]
})
export class AllPatientsComponent implements OnInit, AfterViewInit  {
    displayedColumns: string[] = ['patientNumber', 'firstName', 'middleName', 'lastName', 'doB', 'sex', 'maritalStatus', 'phone'];
    public PatientsDTO: PatientDTO[] = [];
    dataSource = new MatTableDataSource(this.PatientsDTO);
    patientCount = 0;
    selectedRow: any;
    editmode = false;
    linksArray = [];
    searchFormGroup: FormGroup;

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private registrationService: RegistrationService,
                private router: Router,
                private dialog: MatDialog,
                private formBuilder: FormBuilder) {

    }

    async ngOnInit(): Promise<void> {
        this.searchFormGroup = this.formBuilder.group({
            search: ['', Validators.required],
        });

        const result = await this.registrationService.getAllPatient().toPromise();
        // this.dataSource = new MatTableDataSource(result);
        if (result && result.length > 0) {
            this.patientCount = result.length;
        }
    }

    // tslint:disable-next-line:typedef
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    onEditSelected(): void {
        this.router.navigate(['/records/register/' + this.selectedRow.id]);
    }

    async onDeleteSelected(): Promise<void> {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;

        dialogConfig.data = {
        };
        const dialogRef = this.dialog.open(DeletePatientComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(
            data => {
                if (data === 'no') {
                    return;
                }

                try {
                    this.registrationService.deletePatient(this.selectedRow.id).subscribe(
                        (res) => {
                            this.ngOnInit();
                        }
                    );
                } catch (e) {

                }
            }
        );
    }

    highlight(): void {
        this.editmode = !!this.selectedRow;
        if (this.editmode) {
            this.linksArray = [
                {
                    name: 'Vitals',
                    link: 'records/manageVitals/' + this.selectedRow.id
                },
                {
                    name: 'Consultation',
                    link: 'records/consultation/' + this.selectedRow.id
                },
                {
                    name: 'Physical Examination',
                    link: 'records/physicalExamination/' + this.selectedRow.id
                },
            ];
        } else {
            this.linksArray = [];
        }
    }

    async onPatientSearch(): Promise<void> {
        // console.log(this.searchFormGroup.value);
        const searchResult = await this.registrationService.searchPatient(this.searchFormGroup.value.search).toPromise();
        // console.log(searchResult);
        this.dataSource = new MatTableDataSource(searchResult);
    }
}

export class PatientDTO {
    Id?: string;
    FirstName?: string;
    MiddleName?: string;
    LastName?: string;
    DoB?: Date;
    Sex?: string;
    MaritalStatus?: string;
    Narrative?: string;
}
