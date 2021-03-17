import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { PurchaseOrderCommand } from '../../../_models/PurchaseOrderCommand';
import { SuppliersDTO } from '../../manage_suppliers/manage-suppliers/manage-suppliers.component';
import { StockManagementService } from '../../../_services/stock-management.service';
@Component({
  selector: 'app-purchaseorder',
  templateUrl: './purchaseorder.component.html',
  styleUrls: ['./purchaseorder.component.css']
})
export class PurchaseorderComponent implements OnInit {
  id: string;
  save: boolean;
  edit: boolean;
  message: string;
  option: [];
  selected: any;
  selectedstoreId: any;
  selectedsupplierId: any;
  show: boolean;
  purchaseOrderFormGroup: FormGroup;
  maxDate: Date;
  public voidchecked:boolean;
  
  public Stores: Stores[];
  public Suppliers: Suppliers[];
  
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
  
    this.purchaseOrderFormGroup = this.formBuilder.group({
      id: [''],
      storeId: [''],
      supplierId: [''],
      orderNumber: ['', Validators.required],
      orderDateTime: ['', Validators.required],
      status: ['', Validators.required],
  });
   var strores = await this.services.getStores().toPromise();
   this.Stores= strores.data;

   var supplir = await this.services.getSuppliers().toPromise();
   this.Suppliers= supplir.data;
  this.maxDate = new Date(), 'dd-MM-yy';
  if(this.id){
    this.save = false;
    this.edit = true;
    const result = await this.services.getPurOrderbyId(this.id).toPromise();
    //this.selected = result.data.status;
    this.purchaseOrderFormGroup.setValue(result.data);
  }
  else if(this.id === undefined){
    this.save = true;
     this.edit = false;
  }
  this.show=false;
  }
  
  async onSavePurchaseOrder(): Promise<void>{
    
    try {
      const purchaseOrder: PurchaseOrderCommand = {
        storeId: this.purchaseOrderFormGroup.value.storeId,
        supplierId: this.purchaseOrderFormGroup.value.supplierId,
        orderNumber: this.purchaseOrderFormGroup.value.orderNumber,
        orderDateTime: this.purchaseOrderFormGroup.value.orderDateTime,
        status: this.purchaseOrderFormGroup.value.status,
        id: '00000000-0000-0000-0000-000000000000',
        userId: this.authService.user.profile.sub,
        createDate: new Date(),
        void: false,
        voidDate: new Date(),
          
      };
     console.log(purchaseOrder);
      const result = await this.services.addPurOrder(purchaseOrder).toPromise();
      
      if(result.code === 200){
        this.message = result.message;
        }
         setTimeout(() => {
         this.router.navigate(['records/managepurchaseorder/']);
         },3000);
      
  } catch (e) {
      console.log(e);
  }
  }
  async onEditPurchaseOrder(): Promise<void>{
    try {
      const purchaseOrder: PurchaseOrderCommand  = {
        storeId: this.purchaseOrderFormGroup.value.storeId,
        supplierId: this.purchaseOrderFormGroup.value.supplierId,
        orderNumber: this.purchaseOrderFormGroup.value.orderNumber,
        orderDateTime: this.purchaseOrderFormGroup.value.orderDateTime,
        status:  this.purchaseOrderFormGroup.value.status,
        id: this.id,
        userId: this.authService.user.profile.sub,
        createDate: new Date(),
        void: false,
        voidDate: new Date(),
    };
      console.log(purchaseOrder);
      const result = await this.services.addPurOrder(purchaseOrder).toPromise();
        console.log(result);
        if(result.code === 200){
        this.message = result.message;
        }
         setTimeout(() => {
         this.router.navigate(['/records/managepurchaseorder/']);
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
  export class Suppliers {
    name?: string;
    id?: string;
   }
