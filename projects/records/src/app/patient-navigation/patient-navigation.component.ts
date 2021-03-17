import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-patient-navigation',
  templateUrl: './patient-navigation.component.html',
  styleUrls: ['./patient-navigation.component.css']
})
export class PatientNavigationComponent implements OnInit {
    // id of existing patient
    id: string;

    constructor(private route: ActivatedRoute) {
        this.route.params.subscribe(res => {
            this.id = res.id;
        });
    }
    ngOnInit(): void {  }
}
