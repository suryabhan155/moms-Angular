import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StockManagementService } from '../../../_services/stock-management.service';
import { PurOrderItemCommand } from '../../../_models/PurOrderItemCommand';
import { BillingManagementService } from 'projects/revenue/src/app/_services/billing-management.service';

@Component({
  selector: 'app-porderitem',
  templateUrl: './porderitem.component.html',
  styleUrls: ['./porderitem.component.css']
})
export class PorderitemComponent implements OnInit {
  id: string;
  save: boolean;
  edit: boolean;
  message: string;
  option: [];
  selected: any;
  selecteditemId: any;
  selectedpoId: any;
  show: boolean;
  purOrderitemFormGroup: FormGroup;
  maxDate: Date;
  public voidchecked:boolean;
  
  public ItemMaster: ItemMaster[];
  public PurchaseOrder: PurchaseOrder[];
  
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private authService: AuthService,
              private router: Router,
              private services: StockManagementService, private itemService: BillingManagementService) {
                this.route.params.subscribe(res => {
                  this.id = res.id;
              });
              this.maxDate = new Date();
               }
  
  async ngOnInit(): Promise<void> {
  
    this.purOrderitemFormGroup = this.formBuilder.group({
      id: [''],
      itemId: [''],
      purchaseOrderId: [''],
      orderedQuantity: ['', Validators.required],
      status: ['', Validators.required],
  });
   var POrder = await this.services.getPurOrder().toPromise();
   this.PurchaseOrder = POrder.data;
   console.log(POrder.data);

   var Itemdata = await this.itemService.getBillItemMaster().toPromise();
   this.ItemMaster = Itemdata.data;
   console.log(Itemdata);

  console.log(this.id); 
  this.maxDate = new Date();
  if(this.id){
    this.save = false;
    this.edit = true;
    const result = await this.services.getPurOrderItembyId(this.id).toPromise();
    this.selected = result.data.status;
    console.log(result.data);
    this.purOrderitemFormGroup.setValue(result.data);
  }
  else if(this.id === undefined){
    this.save = true;
     this.edit = false;
  }
  this.show=false;
  }
  
  async onSavePurchaseOrderItem(): Promise<void>{
    
    try {
      const purchaseOrder: PurOrderItemCommand = {
        itemId: this.purOrderitemFormGroup.value.itemId,
        purchaseOrderId: this.purOrderitemFormGroup.value.purchaseOrderId,
        orderedQuantity: this.purOrderitemFormGroup.value.orderedQuantity,
        status: this.purOrderitemFormGroup.value.status,
        id: '00000000-0000-0000-0000-000000000000',
        userId: this.authService.user.profile.sub,
        createDate: new Date(),
        void: false,
        voidDate: new Date(),
      };
     console.log(purchaseOrder);
      const result = await this.services.addPurOrderItem(purchaseOrder).toPromise();
      
      if(result.code === 200){
        this.message = result.message;
        }
         setTimeout(() => {
         this.router.navigate(['/records/manageporderitem/']);
         },3000);
      
  } catch (e) {
      console.log(e);
  }
  }
  async onEditPurchaseOrderItem(): Promise<void>{
    try {
      const purchaseOrder: PurOrderItemCommand = {
        itemId: this.purOrderitemFormGroup.value.itemId,
        purchaseOrderId: this.purOrderitemFormGroup.value.purchaseOrderId,
        orderedQuantity: this.purOrderitemFormGroup.value.orderedQuantity,
        status: this.purOrderitemFormGroup.value.status,
        id: this.id,
        userId: this.authService.user.profile.sub,
        createDate: new Date(),
        void: false,
        voidDate: new Date(),
      };
     console.log(purchaseOrder);
      const result = await this.services.addPurOrderItem(purchaseOrder).toPromise();
        console.log(result);
        if(result.code === 200){
        this.message = result.message;
        }
         setTimeout(() => {
         this.router.navigate(['/records/manageporderitem/']);
         },3000);
     
      } catch (e) {
      console.log(e);
    }
  }
  }
  export class ItemMaster {
   name?: string;
   id?: string;
  }
  export class PurchaseOrder {
    orderNumber?: string;
    id?: string;
   }
