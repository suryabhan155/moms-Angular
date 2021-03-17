import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { BillingManagementService } from '../../_services/billing-management.service';
import { SubitemTypeCommand } from '../../_model/SubitemTypeCommand';
@Component({
  selector: 'app-item-subtype',
  templateUrl: './item-subtype.component.html',
  styleUrls: ['./item-subtype.component.css']
})
export class ItemSubtypeComponent implements OnInit {
// id of existing patient
id: string;
save: boolean;
edit: boolean;
message: string;
option: [];
selected: any;
selecteditem: any;
show: boolean;
subitemtypeFormGroup: FormGroup;
maxDate: Date;
public voidchecked:boolean;
public ItemType: SubItemTypeDTO[];

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

  this.subitemtypeFormGroup = this.formBuilder.group({
    id: [''],
    name: ['', Validators.required],
    status: [''],
    itemTypeID: [''],
});
console.log(this.id); 
this.maxDate = new Date();
const res = await this.billServices.getItemTypebill().toPromise();
this.ItemType = res.data;

if(this.id){
  this.save = false;
  this.edit = true;
  const result = await this.billServices.getSubiteTypeByid(this.id).toPromise();
  this.subitemtypeFormGroup.setValue(result.data);
}
else if(this.id === undefined){
  this.save = true;
   this.edit = false;
}
this.show=false;

}

async onSaveSubItemType(): Promise<void>{
  
  try {
    //const result = await this.billServices.getItemTypebillByid(this.selecteditem).toPromise();
    const SubItemtypeCommand: SubitemTypeCommand = {
        name: this.subitemtypeFormGroup.value.name,
        status: this.subitemtypeFormGroup.value.status,
        itemTypeID: this.selecteditem,
       // billingItemMaster: result.data,
        userId: this.authService.user.profile.sub,
        id: '00000000-0000-0000-0000-000000000000',
        createDate: new Date(),
        void: false,
        voidDate: new Date(),
    };
    const res = await this.billServices.addSubitemType(SubItemtypeCommand).toPromise();
    console.log(res);
    if(res.code === 200){
      this.message = res.message;
      }
       setTimeout(() => {
       this.router.navigate(['/revenue/managesubitem/']);
       },3000);
} catch (e) {
    console.log(e);
}
}
async onEditSubItemType(): Promise<void>{
  //const result = await this.billServices.getItemTypebillByid(this.selecteditem).toPromise();
  //console.log(result.data);
  try {
    const SubItemtypeCommand: SubitemTypeCommand = {
      name: this.subitemtypeFormGroup.value.name,
      status: this.subitemtypeFormGroup.value.status,
      itemTypeID: this.selecteditem,
     // billingItemMaster: result.data,
      userId: this.authService.user.profile.sub,
      id: this.id,
      createDate: new Date(),
      void: false,
      voidDate: new Date(),
  };
    
  const res = await this.billServices.addSubitemType(SubItemtypeCommand).toPromise();
      console.log(res);
      if(res.code === 200){
      this.message = res.message;
      }
       setTimeout(() => {
       this.router.navigate(['/revenue/managesubitem/']);
       },3000);
   
    } catch (e) {
    console.log(e);
  }
}
 onChangedSort(event: Event): void{
  }
}
export class SubItemTypeDTO {
  name?: string;
  status?: boolean;
  createDate?: Date;
  id?: string; 
  userId?: string;
  void?: boolean;
  voidDate?: Date;
}
