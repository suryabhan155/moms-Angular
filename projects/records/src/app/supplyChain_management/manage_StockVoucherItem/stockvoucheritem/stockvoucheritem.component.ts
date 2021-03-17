import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BillingManagementService } from 'projects/revenue/src/app/_services/billing-management.service';
import { AuthService } from 'src/app/services/auth.service';
import { StockVoucherItemCommand } from '../../../_models/StockVoucherItemCommand';
import { StockManagementService } from '../../../_services/stock-management.service';


@Component({
  selector: 'app-stockvoucheritem',
  templateUrl: './stockvoucheritem.component.html',
  styleUrls: ['./stockvoucheritem.component.css']
})
export class StockvoucheritemComponent implements OnInit {
  id: string;
  save: boolean;
  edit: boolean;
  message: string;
  show: boolean;
  stockVoucherItemFormGroup: FormGroup;

  public Items: Items[];
  public StockVoucher: StockVoucher[];
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private authService: AuthService,
              private router: Router, private itemService: BillingManagementService,
              private services: StockManagementService) {
                this.route.params.subscribe(res => {
                  this.id = res.id;
              });
          }
  
  async ngOnInit(): Promise<void> {
  
    this.stockVoucherItemFormGroup = this.formBuilder.group({
      id: [''],
      stockVoucherId: [''],
      itemId: [''],
      quantity: ['', Validators.required],
  });
    var stockVoucher = await this.services.getStockvoucher().toPromise();
    this.StockVoucher = stockVoucher.data;
   
   var item = await this.itemService.getBillItemMaster().toPromise();
   this.Items = item.data;

  if(this.id){
    this.save = false;
    this.edit = true;
    const result = await this.services.getStockvoucherItembyId(this.id).toPromise();
    this.stockVoucherItemFormGroup.setValue(result.data);
  }
  else if(this.id === undefined){
    this.save = true;
     this.edit = false;
  }
  this.show=false;
  }
  
  async onSavestockVoucherItem(): Promise<void>{
    
    try {
      const stockVoucheritem: StockVoucherItemCommand = {
        stockVoucherId: this.stockVoucherItemFormGroup.value.stockVoucherId,
        itemId: this.stockVoucherItemFormGroup.value.itemId,
        quantity: this.stockVoucherItemFormGroup.value.quantity,
        id: '00000000-0000-0000-0000-000000000000',
        userId: this.authService.user.profile.sub,
        createDate: new Date(),
        void: false,
        voidDate: new Date(),
      };
    
      const result = await this.services.addStockvoucherItem(stockVoucheritem).toPromise();
      
      if(result.code === 200){
        this.message = result.message;
        }
         setTimeout(() => {
         this.router.navigate(['/records/managestockvoucheritem/']);
         },3000);
      
  } catch (e) {
      console.log(e);
  }
  }
  async onEditstockVoucherItem(): Promise<void>{
    try {
      const stockVoucheritem: StockVoucherItemCommand = {
        stockVoucherId: this.stockVoucherItemFormGroup.value.stockVoucherId,
        itemId: this.stockVoucherItemFormGroup.value.itemId,
        quantity: this.stockVoucherItemFormGroup.value.quantity,
        id: this.id,
        userId: this.authService.user.profile.sub,
        createDate: new Date(),
        void: false,
        voidDate: new Date(),
      };
    
      const result = await this.services.addStockvoucherItem(stockVoucheritem).toPromise();
       
        if(result.code === 200){
        this.message = result.message;
        }
         setTimeout(() => {
         this.router.navigate(['/records/managestockvoucheritem/']);
         },3000);
     
      } catch (e) {
      console.log(e);
    }
  }
  }
  export class Items {
   name?: string;
   id?: string;
  }
  export class StockVoucher {
    id?: string;
   }

