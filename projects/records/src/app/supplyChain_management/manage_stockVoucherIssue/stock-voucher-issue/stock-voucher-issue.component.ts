import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StockVoucherIssueCommand } from '../../../_models/StockVoucherIssueCommand';
import { StockManagementService } from '../../../_services/stock-management.service';

@Component({
  selector: 'app-stock-voucher-issue',
  templateUrl: './stock-voucher-issue.component.html',
  styleUrls: ['./stock-voucher-issue.component.css']
})
export class StockVoucherIssueComponent implements OnInit {
  id: string;
  saves: boolean;
  edit: boolean;
  message: string;
  option: [];
  selected: any;
  selectedvoucherId: any;
  selectedgrnidId: any;
  show: boolean;
  stockVoucherIssueFormGroup: FormGroup;
  maxDate: Date;
  public voidchecked:boolean;
  public Stores: StoreVouchers[];
  public GRNItem: StoreVouchers[];

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private authService: AuthService,
              private router: Router,
              private services: StockManagementService) {
                this.route.params.subscribe(res => {
                  this.id = res.id;
              });
              this.maxDate = new Date();
          }
  
  async ngOnInit(): Promise<void> {
  
  this.stockVoucherIssueFormGroup = this.formBuilder.group({
    id: [''],
    stockVoucherId: [''],
    goodReceivedNoteItemId: [''],
    issuedQuantity: ['', Validators.required],
    issueDate: ['', Validators.required],
  });
  var stores = await this.services.getStores().toPromise();
  this.Stores = stores.data;
  console.log(stores.data);
  var Grnitem = await this.services.getGoodRecvedNoteItem().toPromise();
  this.GRNItem = Grnitem.data;
  console.log(Grnitem.data);

  this.maxDate = new Date(), 'dd-MM-yy';
  if(this.id){
    this.saves = false;
    this.edit = true;
    const result = await this.services.getStockvoucherIssuebyId(this.id).toPromise();
    this.stockVoucherIssueFormGroup.setValue(result.data);
  }
  else if(this.id === undefined){
    this.saves = true;
      this.edit = false;
  }
  this.show=false;
  }
  
  async onSavestockVoucherIssue(): Promise<void>{
    
    try {
      const stockVoucherIssue: StockVoucherIssueCommand = {
        stockVoucherId: this.stockVoucherIssueFormGroup.value.stockVoucherId,
        issueDate: this.stockVoucherIssueFormGroup.value.issueDate,
        goodReceivedNoteItemId: this.stockVoucherIssueFormGroup.value.goodReceivedNoteItemId,
        issuedQuantity: this.stockVoucherIssueFormGroup.value.issuedQuantity,
        id: '00000000-0000-0000-0000-000000000000',
        userId: this.authService.user.profile.sub,
        createDate: new Date(),
        void: false,
        voidDate: new Date(),
      };
    console.log(stockVoucherIssue);
      const result = await this.services.addStockvoucherIssue(stockVoucherIssue).toPromise();
      console.log("SB SINGH");
      if(result.code === 200){
        this.message = result.message;
        }
          setTimeout(() => {
          this.router.navigate(['/records/managestockvoucherissue/']);
          },3000);
      
  } catch (e) {
      console.log(e);
  }
  }
  async onEditstockVoucherIssue(): Promise<void>{
    try {
      const stockVoucherIssue: StockVoucherIssueCommand = {
        stockVoucherId: this.stockVoucherIssueFormGroup.value.stockVoucherId,
        issueDate: this.stockVoucherIssueFormGroup.value.issueDate,
        goodReceivedNoteItemId: this.stockVoucherIssueFormGroup.value.goodReceivedNoteItemId,
        issuedQuantity: this.stockVoucherIssueFormGroup.value.issuedQuantity,
        id: this.id,
        userId: this.authService.user.profile.sub,
        createDate: new Date(),
        void: false,
        voidDate: new Date(),
      };
    
      const result = await this.services.addStockvoucherIssue(stockVoucherIssue).toPromise();
        console.log("SB SiNGH");
        if(result.code === 200){
        this.message = result.message;
        }
          setTimeout(() => {
          this.router.navigate(['/records/managestockvoucherissue/']);
          },3000);
      
      } catch (e) {
      console.log(e);
    }
  }
}
export class StoreVouchers {
  storeId?: string;
  id?: string;
}
export class GRNItemId{
  batchNumber?: string;
  id?:string;
}
