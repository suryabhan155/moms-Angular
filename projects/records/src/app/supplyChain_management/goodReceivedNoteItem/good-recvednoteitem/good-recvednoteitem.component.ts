import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StockManagementService } from '../../../_services/stock-management.service';
import { GoodReceivedNoteItemCommand } from '../../../_models/GoodReceivedNoteItemCommand';
import { BillingManagementService } from 'projects/revenue/src/app/_services/billing-management.service';

@Component({
  selector: 'app-good-recvednoteitem',
  templateUrl: './good-recvednoteitem.component.html',
  styleUrls: ['./good-recvednoteitem.component.css']
})
export class GoodRecvednoteitemComponent implements OnInit {
  id: string;
  save: boolean;
  edit: boolean;
  message: string;
  show: boolean;
  goodRecievednodeItemFormGroup: FormGroup;
  maxDate: Date;
  public voidchecked:boolean;
  
  public GoodRenode: GoodReceivedNode[];
  public Items: Items[];
  
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
  
    this.goodRecievednodeItemFormGroup = this.formBuilder.group({
      id: [''],
      goodReceivedNoteId: [''],
      itemId: [''],
      batchNumber: ['', Validators.required],
      receivedQuantity: ['', Validators.required],
      expiryDateTime: ['', Validators.required],
      unitPrice: ['', Validators.required],
  });
   var goodrec = await this.services.getGoodReceivedNote().toPromise();
   this.GoodRenode = goodrec.data;

   var itemMaster = await this.itemService.getBillItemMaster().toPromise();
   this.Items = itemMaster.data;

  this.maxDate = new Date(), 'dd-MM-yy';
  if(this.id){
    this.save = false;
    this.edit = true;
    const result = await this.services.getGoodRecvedNoteItembyId(this.id).toPromise();
    this.goodRecievednodeItemFormGroup.setValue(result.data);
  }
  else if(this.id === undefined){
    this.save = true;
     this.edit = false;
  }
  this.show=false;
  }
  
  async onSavegoodRecievedItem(): Promise<void>{
    
    try {
      const Goodrecievditem: GoodReceivedNoteItemCommand = {
        goodReceivedNoteId: this.goodRecievednodeItemFormGroup.value.goodReceivedNoteId,
        itemId: this.goodRecievednodeItemFormGroup.value.itemId,
        batchNumber: this.goodRecievednodeItemFormGroup.value.batchNumber,
        receivedQuantity: this.goodRecievednodeItemFormGroup.value.receivedQuantity,
        unitPrice: this.goodRecievednodeItemFormGroup.value.unitPrice,
        expiryDateTime: this.goodRecievednodeItemFormGroup.value.expiryDateTime,
        id: '00000000-0000-0000-0000-000000000000',
        userId: this.authService.user.profile.sub,
        createDate: new Date(),
        void: false,
        voidDate: new Date(),
      };
      const result = await this.services.addGoodRecvedNoteItem(Goodrecievditem).toPromise();
      
      if(result.code === 200){
        this.message = result.message;
        }
         setTimeout(() => {
         this.router.navigate(['/records/managegoodrecievednodeitem/']);
         },3000);
      
  } catch (e) {
      console.log(e);
  }
  }
  async onEditgoodRecievedItem(): Promise<void>{
    try {
      const Goodrecievditem: GoodReceivedNoteItemCommand = {
        goodReceivedNoteId: this.goodRecievednodeItemFormGroup.value.goodReceivedNoteId,
        itemId: this.goodRecievednodeItemFormGroup.value.itemId,
        batchNumber: this.goodRecievednodeItemFormGroup.value.batchNumber,
        receivedQuantity: this.goodRecievednodeItemFormGroup.value.receivedQuantity,
        unitPrice: this.goodRecievednodeItemFormGroup.value.unitPrice,
        expiryDateTime: this.goodRecievednodeItemFormGroup.value.expiryDateTime,
        id: this.id,
        userId: this.authService.user.profile.sub,
        createDate: new Date(),
        void: false,
        voidDate: new Date(),
      };
      console.log(Goodrecievditem);
      const result = await this.services.addGoodRecvedNoteItem(Goodrecievditem).toPromise();
        console.log(result);
        if(result.code === 200){
        this.message = result.message;
        }
         setTimeout(() => {
         this.router.navigate(['/records/managegoodrecievednodeitem/']);
         },3000);
     
      } catch (e) {
      console.log(e);
    }
  }
  }
  export class GoodReceivedNode {
   id?: string;
  }
  export class Items {
   name?: string;
    id?: string;
   }

