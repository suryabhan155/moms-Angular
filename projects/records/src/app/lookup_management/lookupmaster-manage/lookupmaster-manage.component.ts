import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomDeleteComponent } from '../../clinic_management/room-edit-delete/room-delete/room-delete.component';
import { LookupService } from '../../_services/lookup.service';

@Component({
  selector: 'app-lookupmaster-manage',
  templateUrl: './lookupmaster-manage.component.html',
  styleUrls: ['./lookupmaster-manage.component.css']
})
export class LookupmasterManageComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  //paginator
  public pageSize = 10;
  public currentPage = 0;
  public totalSize = 0;
  public array: any;

  id: string;
  
  displayedColumns: string[] = ['name', 'status', 'action'];
  public RoomDTO: LookupMasterDTO[] = [];
  dataSource = new MatTableDataSource(this.RoomDTO);
  selectedRow: any;
  editmode = false;
  constructor(private lookupService: LookupService,
              private route: ActivatedRoute,
              private router: Router,
              private dialog: MatDialog){
             
              this.route.params.subscribe(res => {
              this.id = res.id;
              });
      }

  async ngOnInit(): Promise<void> {
    try{
      const result = await this.lookupService.getLookupMaster().toPromise();
            this.dataSource = new MatTableDataSource(result.data);
            this.dataSource.paginator = this.paginator;
            this.array = result.data;
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
 
  async addItemMaster(): Promise<void> {
    await this.router.navigate(['/records/lookupmaster']);
}

onEditSelected(value: any): void{
  console.log(value);
  this.router.navigate(['/records/lookupmaster/' + value.id]);
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
              this.lookupService.deleteLookuoMasterbyId(value.id).subscribe(
                  (res) => {
                    console.log(res);
                      this.ngOnInit();
                  }
              );
          } catch (e) {
console.log(e);
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
export class LookupMasterDTO {
  name?: string;
  alias?: string;
  createDate?: Date;
  id?: string; 
  userId?: string;
  void?: boolean;
  voidDate?: Date;
}
