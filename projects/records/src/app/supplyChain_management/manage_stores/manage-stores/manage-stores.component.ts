import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomDeleteComponent } from '../../../clinic_management/room-edit-delete/room-delete/room-delete.component';
import { StockManagementService } from '../../../_services/stock-management.service';

@Component({
  selector: 'app-manage-stores',
  templateUrl: './manage-stores.component.html',
  styleUrls: ['./manage-stores.component.css']
})
export class ManageStoresComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  //paginator
  public pageSize = 10;
  public currentPage = 0;
  public totalSize = 0;
  public array: any;
  id: string;
  
  displayedColumns: string[] = ['name', 'category', 'status', 'action'];
  public StoreManageDTO: StoresManageDTO[] = [];
  dataSource = new MatTableDataSource(this.StoreManageDTO);
  selectedRow: any;
  editmode = false;
  constructor(private StoreServices: StockManagementService,
              private route: ActivatedRoute,
              private router: Router,
              private dialog: MatDialog){
             
              this.route.params.subscribe(res => {
              this.id = res.id;
              });
      }

  async ngOnInit(): Promise<void> {
    try{
      const result = await this.StoreServices.getStores().toPromise();
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

 
  async addStores(): Promise<void> {
    await this.router.navigate(['/records/stores/']);
}

onEditStores(value: any): void{
  this.router.navigate(['/records/stores/' + value.id]);
}

async onDeleteStores(value: any): Promise<void> {
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
              this.StoreServices.deleteStores(value.id).subscribe(
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
      
  } else {
     
  }
}
}
export class StoresManageDTO {
  name?: string;
  category?: string;
  status?: number;
  createDate?: Date;
  id?: string; 
  userId?: string;
  void?: boolean;
  voidDate?: Date;
}

