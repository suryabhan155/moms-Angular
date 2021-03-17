import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { BilingDeleteComponent } from '../../billing_delete/biling-delete/biling-delete.component';
import { BillingManagementService } from '../../_services/billing-management.service';

@Component({
  selector: 'app-manage-item-subtype',
  templateUrl: './manage-item-subtype.component.html',
  styleUrls: ['./manage-item-subtype.component.css']
})
export class ManageItemSubtypeComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  //paginator
  public pageSize = 10;
  public currentPage = 0;
  public totalSize = 0;
  public array: any;
  id: string;
  maxDate: Date;

  displayedColumns: string[] = ['name', 'status', 'action'];
  public ItemSubTypeDTO: ItemSubTypeDTO[] = [];
  dataSource = new MatTableDataSource(this.ItemSubTypeDTO);
  selectedRow: any;
  editmode = false;
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private billservices: BillingManagementService, private dialog: MatDialog) {

              this.route.params.subscribe(res => {
                  this.id = res.id;
              });
              this.maxDate = new Date();
               }

 async ngOnInit(): Promise<void> {
    var result = await this.billservices.getSubitemType().toPromise();
    this.dataSource = new MatTableDataSource(result.data);
    this.dataSource.paginator = this.paginator;
           // this.array = result;
            //this.totalSize = this.array.length;
            this.iterator();
  }

async addSubItem(): Promise<void> {
  await this.router.navigate(['/revenue/subitem/']);
   }

   onEditSubItem(value: any): void{
     console.log(value.id);
     this.router.navigate(['/revenue/subitem/' + value.id]);
  }

  onDeleteSelected(value: any): void {
    console.log(value.id);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
  
    dialogConfig.data = {
    };
    const dialogRef = this.dialog.open(BilingDeleteComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
        data => {
            if (data === 'no') {
                return;
            }
            try {
                this.billservices.deleteSubitemType(value.id).subscribe(
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
  }
  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iterator();
  }
  
  private iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    //const part = this.array.slice(start, end);
    //this.dataSource = part;
  }

}

export class ItemSubTypeDTO {
  itemtype?: string;
  itemsubtype?: string;
  name?: string;
  status?: number;
  createDate?: Date;
  id?: string; 
  userId?: string;
  void?: boolean;
  voidDate?: Date;
}
