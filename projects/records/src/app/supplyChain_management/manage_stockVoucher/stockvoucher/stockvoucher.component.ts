import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StockManagementService } from '../../../_services/stock-management.service';
import { StockVoucherCommand } from '../../../_models/StockVoucherCommand';

@Component({
  selector: 'app-stockvoucher',
  templateUrl: './stockvoucher.component.html',
  styleUrls: ['./stockvoucher.component.css']
})
export class StockvoucherComponent implements OnInit {
  id: string;
  save: boolean;
  edit: boolean;
  message: string;
  show: boolean;
  stockVoucherFormGroup: FormGroup;
  maxDate: Date;
  public voidchecked:boolean;
  
  public Stores: Stores[];

  public SourceStore = new SourceStore('3fa85f64-5717-4562-b3fc-2c963f66afa6','sourceStore101');
  
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
  
    this.stockVoucherFormGroup = this.formBuilder.group({
      id: [''],
      storeId: [''],
      sourceStoreId: [''],
      voucherDateTime: ['', Validators.required],
  });
   //var POrder = await this.services.getPurOrder().toPromise();
    //this.Stores = new SourceStore('3fa85f64-5717-4562-b3fc-2c963f66afa6','sourceStore101');
   
   var stores = await this.services.getStores().toPromise();
   this.Stores = stores.data;

  this.maxDate = new Date(), 'dd-MM-yy';
  if(this.id){
    this.save = false;
    this.edit = true;
    const result = await this.services.getStockvoucherbyId(this.id).toPromise();
    this.stockVoucherFormGroup.setValue(result.data);
  }
  else if(this.id === undefined){
    this.save = true;
     this.edit = false;
  }
  this.show=false;
  }
  
  async onSavestockVoucher(): Promise<void>{
    
    try {
      this.stockVoucherFormGroup.value.sourceStoreId = '3fa85f64-5717-4562-b3fc-2c963f66afa6';
      const stockVoucher: StockVoucherCommand = {
        storeId: this.stockVoucherFormGroup.value.storeId,
        sourceStoreId: this.stockVoucherFormGroup.value.sourceStoreId,
        voucherDateTime: this.stockVoucherFormGroup.value.voucherDateTime,
        id: '00000000-0000-0000-0000-000000000000',
        userId: this.authService.user.profile.sub,
        createDate: new Date(),
        void: false,
        voidDate: new Date(),
      };
    
      const result = await this.services.addStockvoucher(stockVoucher).toPromise();
      
      if(result.code === 200){
        this.message = result.message;
        }
         setTimeout(() => {
         this.router.navigate(['/records/managestockvoucher/']);
         },3000);
      
  } catch (e) {
      console.log(e);
  }
  }
  async onEditstockVoucher(): Promise<void>{
    try {
      this.stockVoucherFormGroup.value.sourceStoreId = '3fa85f64-5717-4562-b3fc-2c963f66afa6';
      const stockVoucher: StockVoucherCommand = {
        storeId: this.stockVoucherFormGroup.value.storeId,
        sourceStoreId: this.stockVoucherFormGroup.value.sourceStoreId,
        voucherDateTime: this.stockVoucherFormGroup.value.voucherDateTime,
        id: this.id,
        userId: this.authService.user.profile.sub,
        createDate: new Date(),
        void: false,
        voidDate: new Date(),
      };
    
      const result = await this.services.addStockvoucher(stockVoucher).toPromise();
       
        if(result.code === 200){
        this.message = result.message;
        }
         setTimeout(() => {
         this.router.navigate(['/records/managestockvoucher/']);
         },3000);
     
      } catch (e) {
      console.log(e);
    }
  }
  }
  export class Stores {
   name?: string;
   id?: string;
  }
  export class SourceStore {
    constructor(public name: string,public id: string)
      {}
   }


