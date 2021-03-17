import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { BillingManagementService } from '../../_services/billing-management.service';
import { BillItemTypeCommnd } from '../../_model/BillItemTypeCommnd';
@Component({
  selector: 'app-itemtype',
  templateUrl: './itemtype.component.html',
  styleUrls: ['./itemtype.component.css']
})
export class ItemtypeComponent implements OnInit {
// id of existing patient
id: string;
save: boolean;
edit: boolean;
message: string;
option: [];
selected: any;
selecteditem: any;
show: boolean;
itemtypeFormGroup: FormGroup;
maxDate: Date;
public voidchecked:boolean;

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

  this.itemtypeFormGroup = this.formBuilder.group({
    id: [''],
    name: ['', Validators.required],
    status: ['']
});
console.log(this.id); 
this.maxDate = new Date();
if(this.id){
  this.save = false;
  this.edit = true;
   const result = await this.billServices.getItemTypebillByid(this.id).toPromise();
   this.selected = result.data.status;
   this.itemtypeFormGroup.setValue(result.data);
 
}
else if(this.id === undefined){
  this.save = true;
   this.edit = false;
}
this.show=false;
}

async onSaveItemType(): Promise<void>{
  
  try {
    const ItemtypeCommand: BillItemTypeCommnd = {
        name: this.itemtypeFormGroup.value.name,
        userId: this.authService.user.profile.sub,
        id: '00000000-0000-0000-0000-000000000000',
        status: this.itemtypeFormGroup.value.status,
        createDate: new Date(),
        void: false,
        voidDate: new Date(),
    };
   
    const result = await this.billServices.addItemTypebill(ItemtypeCommand).toPromise();
    if(result.code === 200){
      this.message = result.message;
      }
       setTimeout(() => {
       this.router.navigate(['/revenue/manageitemtype/']);
       },3000);
    
} catch (e) {
    console.log(e);
}
}
async onEditItemType(): Promise<void>{
  try {
    const ItemtypeCommand: BillItemTypeCommnd = {
        name: this.itemtypeFormGroup.value.name,
        userId: this.authService.user.profile.sub,
        id: this.id,
        status: this.itemtypeFormGroup.value.status,
        createDate: new Date(),
        voidDate: new Date(),
        void: false,
    };
    
    const result = await this.billServices.addItemTypebill(ItemtypeCommand).toPromise();
      if(result.code === 200){
      this.message = result.message;
      }
       setTimeout(() => {
       this.router.navigate(['/revenue/manageitemtype/']);
       },3000);

    } catch (e) {
    console.log(e);
  }
}
 onChangedSort(event: Event): void{
 console.log(this.selected);
  }
}

