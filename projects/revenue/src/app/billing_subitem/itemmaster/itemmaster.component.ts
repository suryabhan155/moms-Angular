import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { BillingManagementService } from '../../_services/billing-management.service';
import { ItemMasterCommand } from '../../_model/ItemMasterCommand';
@Component({
  selector: 'app-itemmaster',
  templateUrl: './itemmaster.component.html',
  styleUrls: ['./itemmaster.component.css']
})
export class ItemmasterComponent implements OnInit {
// id of existing patient
id: string;
save: boolean;
edit: boolean;
message: string;
option: [];
selected: any;
selecteditemtype: any;
selectedsubitemtype: any;
show: boolean;
itemMasetrFormGroup: FormGroup;
maxDate: Date;
public voidchecked:boolean;

public ItemType: BillItemType[];
public SubItem: SubItemtype[];

constructor(private formBuilder: FormBuilder,
            private route: ActivatedRoute,
            private authService: AuthService,
            private router: Router,
            private billServices: BillingManagementService) {
              this.route.params.subscribe(res => {
                this.id = res.id;
            });
            this.maxDate = new Date();
             }

async ngOnInit(): Promise<void> {

  this.itemMasetrFormGroup = this.formBuilder.group({
    id: [''],
    name: ['', Validators.required],
    displayName: ['', Validators.required],
    itemCode: ['', Validators.required],
    itemDescription: ['', Validators.required],
    abbreviation: ['', Validators.required],
    type: [''],
    itemTypeId: [''],
    itemSubTypeId: [''],
    createDate: ['']
});
var itemtype = await this.billServices.getItemTypebill().toPromise();
this.ItemType = itemtype.data;

var subtype = await this.billServices.getSubitemType().toPromise();
this.SubItem = subtype.data;
  
console.log(this.id); 
this.maxDate = new Date();
if(this.id){
  this.save = false;
  this.edit = true;
  const result = await this.billServices.getBillItemMasterByid(this.id).toPromise();
  //this.selected = result.status;
console.log(result.data.type);

  if(result.data.type == "Inventory")
  {
    this.selected = 0;
  }
  else{
    this.selected = 1;
  }
  this.itemMasetrFormGroup.setValue(result.data);
}
else if(this.id === undefined){
  this.save = true;
   this.edit = false;
}
this.show=false;
}

async onSaveItemMaster(): Promise<void>{
  
  try {
  if(this.selected === 0){
    this.itemMasetrFormGroup.value.type = 'Inventory';
  }else{
    this.itemMasetrFormGroup.value.type = 'Service';
  }
  
    const itemMasterCommand: ItemMasterCommand = {
        name: this.itemMasetrFormGroup.value.name,
        displayname: this.itemMasetrFormGroup.value.displayName,
        id: '00000000-0000-0000-0000-000000000000',
        itemTypeId: this.selecteditemtype,
        itemSubTypeId: this.selectedsubitemtype,
        itemcode: this.itemMasetrFormGroup.value.itemCode,
        itemdescription: this.itemMasetrFormGroup.value.itemDescription,
        abbreviation: this.itemMasetrFormGroup.value.abbreviation,
        type: this.itemMasetrFormGroup.value.type,
        userId: this.authService.user.profile.sub,
        createDate: new Date(),
        void: false,
        voidDate: new Date(),
    };
   console.log(itemMasterCommand);
    const result = await this.billServices.addBillItemMaster(itemMasterCommand).toPromise();
    
    if(result.code === 200){
      this.message = result.message;
      }
       setTimeout(() => {
       this.router.navigate(['/revenue/manageitemmaster/']);
       },3000);
    
} catch (e) {
    console.log(e);
}
}
async onEditItemMaster(): Promise<void>{
  try {
    const itemMasterCommand: ItemMasterCommand = {
      name: this.itemMasetrFormGroup.value.name,
      displayname: this.itemMasetrFormGroup.value.displayName,
      id: this.id,
      itemTypeId: this.selecteditemtype,
      itemSubTypeId: this.selectedsubitemtype,
      itemcode: this.itemMasetrFormGroup.value.itemCode,
      itemdescription: this.itemMasetrFormGroup.value.itemDescription,
      abbreviation: this.itemMasetrFormGroup.value.abbreviation,
      type: this.itemMasetrFormGroup.value.type,
      userId: this.authService.user.profile.sub,
      createDate: new Date(),
      void: false,
      voidDate: new Date(),
  };
    console.log(itemMasterCommand);
    const result = await this.billServices.addBillItemMaster(itemMasterCommand).toPromise();
      console.log(result);
      if(result.code === 200){
      this.message = result.message;
      }
       setTimeout(() => {
       this.router.navigate(['/revenue/manageitemmaster/']);
       },3000);
   
    } catch (e) {
    console.log(e);
  }
}
 onChangedSort(event: Event): void{
 console.log(this.selected);
  }
}
export class BillItemType {
 name?: string;
 id?: string;
}
export class SubItemtype {
  name?: string;
  id?: string;
 }

