import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { BilingDeleteComponent } from '../../billing_delete/biling-delete/biling-delete.component';
import { BillingManagementService } from '../../_services/billing-management.service';

@Component({
  selector: 'app-billingdiscount-manage',
  templateUrl: './billingdiscount-manage.component.html',
  styleUrls: ['./billingdiscount-manage.component.css']
})
export class BillingdiscountManageComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  //paginator
  public pageSize = 10;
  public currentPage = 0;
  public totalSize = 0;
  public array: any;
  id: string;
  maxDate: Date;

  displayedColumns: string[] = ['name', 'mindiscount', 'maxdiscount', 'status', 'action'];
  public BilldiscountDTO: BilldiscountDTO[] = [];
  dataSource = new MatTableDataSource(this.BilldiscountDTO);
  selectedRow: any;
  editmode = false;
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private billingServices: BillingManagementService, private dialog: MatDialog) {
              this.route.params.subscribe(res => {
              this.id = res.id;
              });
                this.maxDate = new Date();
               }

 async ngOnInit(): Promise<void> {
    var result = await this.billingServices.getbillinDescount().toPromise();
    this.dataSource = new MatTableDataSource(result.data);
    this.dataSource.paginator = this.paginator;
            this.array = result;
            this.totalSize = this.array.length;
            this.iterator();
  }

async addBillDiscount(): Promise<void> {
  await this.router.navigate(['/revenue/billdiscount/']);
   }

   onEditBillDiscount(value: any): void{
    this.router.navigate(['/revenue/billdiscount/' + value.id]);
  }

  onDeleteSelected(value: any): void{
    console.log(value);
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
                this.billingServices.deletebillingDescount(value.id).subscribe(
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
    const part = this.array.slice(start, end);
    this.dataSource = part;
  }

}
export class BilldiscountDTO {
  name?: string;
  isPercentage?: boolean;
  minDiscount?: number;
  maxDiscount?: number;
  needsApproval?: boolean;
  status?: boolean;
  createDate?: Date;
  id?: string; 
  userId?: string;
  void?: boolean;
  voidDate?: Date;
}
