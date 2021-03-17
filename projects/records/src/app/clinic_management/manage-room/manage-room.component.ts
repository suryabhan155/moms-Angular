import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ClinicManagementService} from '../../_services/clinic-management.service';
import {ActivatedRoute, Router} from '@angular/router';
import {RoomDeleteComponent} from '../room-edit-delete/room-delete/room-delete.component';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-manage-room',
  templateUrl: './manage-room.component.html',
  styleUrls: ['./manage-room.component.css'],
  providers: [ClinicManagementService]
})
export class ManageRoomComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  //paginator
  public pageSize = 10;
  public currentPage = 0;
  public totalSize = 0;
  public array: any;

  id: string;
  
  displayedColumns: string[] = ['name', 'status', 'action'];
  public RoomDTO: RoomDTO[] = [];
  dataSource = new MatTableDataSource(this.RoomDTO);
  selectedRow: any;
  editmode = false;
  constructor(private clinicManagementService: ClinicManagementService,
              private route: ActivatedRoute,
              private router: Router,
              private dialog: MatDialog){
             
              this.route.params.subscribe(res => {
              this.id = res.id;
              });
      }

  async ngOnInit(): Promise<void> {
    try{
      const result = await this.clinicManagementService.getPatientRoom().toPromise();
      
            this.dataSource = new MatTableDataSource(result.data);
            this.dataSource.paginator = this.paginator;
            this.array = result;
            this.totalSize = this.array.length;
            this.iterator();
    }catch (e) {
    }
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iterator();
  }
  
  private iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.array.slice(start, end);
    this.dataSource = part;
  }

 
  async addRoom(): Promise<void> {
    await this.router.navigate(['/records/room/']);
}

onEditSelected(value: any): void{
  this.router.navigate(['/records/room/' + value.id]);
}

async onDeleteSelected(value: any): Promise<void> {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;

  dialogConfig.data = {
  };
  const dialogRef = this.dialog.open(RoomDeleteComponent, dialogConfig);
  dialogRef.afterClosed().subscribe(
      data => {
          if (data === 'no') {
              return;
          }

          try {
              this.clinicManagementService.deleteRoom(value.id).subscribe(
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
      // this.linksArray = [
      //     {
      //         name: 'Vitals',
      //         link: 'records/manageVitals/' + this.selectedRow.id
      //     },
      //     {
      //         name: 'Consultation',
      //         link: 'records/consultation/' + this.selectedRow.id
      //     },
      //     {
      //         name: 'Physical Examination',
      //         link: 'records/physicalExamination/' + this.selectedRow.id
      //     },
      // ];
  } else {
      // this.linksArray = [];
  }
}
}
export class RoomDTO {
  name?: string;
  status?: number;
  createDate?: Date;
  id?: string; 
  userId?: string;
  void?: boolean;
  voidDate?: Date;
}
