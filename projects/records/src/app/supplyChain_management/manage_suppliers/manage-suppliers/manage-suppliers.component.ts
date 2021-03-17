import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { DeletePatientComponent } from '../../../registration/delete-patient/delete-patient.component';
import { StockManagementService } from '../../../_services/stock-management.service';

@Component({
  selector: 'app-manage-suppliers',
  templateUrl: './manage-suppliers.component.html',
  styleUrls: ['./manage-suppliers.component.css']
})
export class ManageSuppliersComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  //paginator
  public pageSize = 10;
  public currentPage = 0;
  public totalSize = 0;
  public array: any;
  id: string;
  maxDate: Date;

  displayedColumns: string[] = ['name', 'status', 'action'];
  public SuppliersDTO: SuppliersDTO[] = [];
  dataSource = new MatTableDataSource(this.SuppliersDTO);
  selectedRow: any;
  editmode = false;
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private dialog: MatDialog,
              private Supplierservices: StockManagementService ) {
                this.route.params.subscribe(res => {
                  this.id = res.id;
              });
              this.maxDate = new Date();
  }

 async ngOnInit(): Promise<void> {
    var result = await this.Supplierservices.getSuppliers().toPromise();
    this.dataSource = new MatTableDataSource(result.data);
    this.dataSource.paginator = this.paginator;
            this.array = result.data;
            this.totalSize = this.array.length;
            this.iterator();
  }

async addSuppliesr(): Promise<void> {
  await this.router.navigate(['/records/suppliers/']);
   }

   onEditSuppliers(value: any): void{
    this.router.navigate(['/records/suppliers/' + value.id]);
  }

  onDeleteSelected(value: any): void {
    console.log(value.id);
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
                this.Supplierservices.deleteSuppliers(value.id).subscribe(
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
export class SuppliersDTO {
  name?: string;
  status?: number;
  createDate?: Date;
  id?: string; 
  userId?: string;
  void?: boolean;
  voidDate?: Date;
}