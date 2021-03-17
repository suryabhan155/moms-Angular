import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { BilingDeleteComponent } from 'projects/revenue/src/app/billing_delete/biling-delete/biling-delete.component';
import { StockManagementService } from '../../../_services/stock-management.service';

@Component({
  selector: 'app-manage-porderitem',
  templateUrl: './manage-porderitem.component.html',
  styleUrls: ['./manage-porderitem.component.css']
})
export class ManagePorderitemComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  //paginator
  public pageSize = 10;
  public currentPage = 0;
  public totalSize = 0;
  public array: any;
  id: string;
 

  displayedColumns: string[] = ['orderedQuantity', 'status', 'action'];
  public PurchaseOrderDTO: PurchaseOrderDTO[] = [];
  dataSource = new MatTableDataSource(this.PurchaseOrderDTO);
  selectedRow: any;
  editmode = false;
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private dialog: MatDialog,
              private PurOrderServices: StockManagementService ) {
                this.route.params.subscribe(res => {
                  this.id = res.id;
              });
       }

 async ngOnInit(): Promise<void> {
    var result = await this.PurOrderServices.getPurOrderItem().toPromise();
    this.dataSource = new MatTableDataSource(result.data);
    this.dataSource.paginator = this.paginator;
            this.array = result.data;
            this.totalSize = this.array.length;
            this.iterator();
  }

async addPurchaseOrderItem(): Promise<void> {
  await this.router.navigate(['/records/purchaseorderitem/']);
   }

   onEditPurchaseOrderItem(value: any): void{
    this.router.navigate(['/records/purchaseorderitem/' + value.id]);
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
                this.PurOrderServices.deletePurOrderItem(value.id).subscribe(
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
export class PurchaseOrderDTO {
  poId?: string;
  ItemId?:  string;
  orderedQuantity?: string;
  status?: number;
}
