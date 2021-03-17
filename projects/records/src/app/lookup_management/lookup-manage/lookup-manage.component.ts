import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomDeleteComponent } from '../../clinic_management/room-edit-delete/room-delete/room-delete.component';
import { LookupService } from '../../_services/lookup.service';

@Component({
  selector: 'app-lookup-manage',
  templateUrl: './lookup-manage.component.html',
  styleUrls: ['./lookup-manage.component.css']
})
export class LookupManageComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}