import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StockManagementService } from '../../../_services/stock-management.service';
import { GoodReceivedNoteCommand } from '../../../_models/GoodReceivedNoteCommand';

@Component({
  selector: 'app-good-receivednode',
  templateUrl: './good-receivednode.component.html',
  styleUrls: ['./good-receivednode.component.css']
})
export class GoodReceivednodeComponent implements OnInit {
  id: string;
  save: boolean;
  edit: boolean;
  message: string;
  show: boolean;
  goodRecievednodeFormGroup: FormGroup;
  maxDate: Date;
  public voidchecked:boolean;
  
  public Suppliers: Suppliers[];
  public PurchaseOrder: PurchaseOrder[];
  
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
  
    this.goodRecievednodeFormGroup = this.formBuilder.group({
      id: [''],
      purchaseOrderId: [''],
      supplierId: [''],
      receivedDateTime: ['', Validators.required],
  });
   var POrder = await this.services.getPurOrder().toPromise();
   this.PurchaseOrder = POrder.data;

   var suppliersid = await this.services.getSuppliers().toPromise();
   this.Suppliers = suppliersid.data;

  this.maxDate = new Date(), 'dd-MM-yy';
  if(this.id){
    this.save = false;
    this.edit = true;
    const result = await this.services.getGoodReceivedNotebyId(this.id).toPromise();
    this.goodRecievednodeFormGroup.setValue(result.data);
  }
  else if(this.id === undefined){
    this.save = true;
     this.edit = false;
  }
  this.show=false;
  }
  
  async onSavegoodRecieved(): Promise<void>{
    
    try {
      const Goodrecievd: GoodReceivedNoteCommand = {
        purchaseOrderId: this.goodRecievednodeFormGroup.value.purchaseOrderId,
        supplierId: this.goodRecievednodeFormGroup.value.supplierId,
        receivedDateTime: this.goodRecievednodeFormGroup.value.receivedDateTime,
        id: '00000000-0000-0000-0000-000000000000',
        userId: this.authService.user.profile.sub,
        createDate: new Date(),
        void: false,
        voidDate: new Date(),
      };
     console.log(Goodrecievd);
      const result = await this.services.addGoodReceivedNote(Goodrecievd).toPromise();
      
      if(result.code === 200){
        this.message = result.message;
        }
         setTimeout(() => {
         this.router.navigate(['/records/managegoodrecievednode/']);
         },3000);
      
  } catch (e) {
      console.log(e);
  }
  }
  async onEditgoodRecieved(): Promise<void>{
    try {
      const Goodrecievd: GoodReceivedNoteCommand = {
        purchaseOrderId: this.goodRecievednodeFormGroup.value.purchaseOrderId,
        supplierId: this.goodRecievednodeFormGroup.value.supplierId,
        receivedDateTime: this.goodRecievednodeFormGroup.value.receivedDateTime,
        id: this.id,
        userId: this.authService.user.profile.sub,
        createDate: new Date(),
        void: false,
        voidDate: new Date(),
      };
     console.log(Goodrecievd);
      const result = await this.services.addGoodReceivedNote(Goodrecievd).toPromise();
        console.log(result);
        if(result.code === 200){
        this.message = result.message;
        }
         setTimeout(() => {
         this.router.navigate(['/records/managegoodrecievednode/']);
         },3000);
     
      } catch (e) {
      console.log(e);
    }
  }
  }
  export class Suppliers {
   name?: string;
   id?: string;
  }
  export class PurchaseOrder {
    orderNumber?: string;
    id?: string;
   }

