import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { BillingManagementService } from '../../_services/billing-management.service';
import {BillingTypeCommand} from '../../_model/BillingTypeCommand';
@Component({
  selector: 'app-billtype',
  templateUrl: './billtype.component.html',
  styleUrls: ['./billtype.component.css']
})
export class BilltypeComponent implements OnInit {
// id of existing patient
id: string;
save: boolean;
edit: boolean;
message: string;
option: [];
selected: any;
show: boolean;
billtypeFormGroup: FormGroup;
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

  this.billtypeFormGroup = this.formBuilder.group({
    id: [''],
    name: new FormControl('', Validators.required),
    status: new FormControl(''),
});
console.log(this.id); 
this.maxDate = new Date();
if(this.id){
  this.save = false;
  this.edit = true;
  const result = await this.billServices.getbillingTypeByid(this.id).toPromise();
  this.selected = result.data.status;
  this.billtypeFormGroup.setValue(result.data);
 
}
else if(this.id === undefined){
  this.save = true;
   this.edit = false;
}
this.show=false;
}

async onSaveBillType(): Promise<void>{
  
  try {
    const typeCommand: BillingTypeCommand = {
        name: this.billtypeFormGroup.value.name,
        userId: this.authService.user.profile.sub,
        id: '00000000-0000-0000-0000-000000000000',
        status: this.billtypeFormGroup.value.status,
        createDate: new Date(),
        void: false,
        voidDate: new Date(),
    };
   
    const result = await this.billServices.addbillingType(typeCommand).toPromise();
    
    if(result.code == 200){
      this.message = result.message;
      }
       setTimeout(() => {
       this.router.navigate(['/revenue/billmanage/']);
       },3000);
    
} catch (e) {
    console.log(e);
}
}
async onEditBillingType(): Promise<void>{
  try {
    const TypeCommand: BillingTypeCommand = {
        name: this.billtypeFormGroup.value.name,
        userId: this.authService.user.profile.sub,
        id: this.id,
        status: this.billtypeFormGroup.value.status,
        createDate: new Date(),
        void: false,
    };
    console.log(TypeCommand);
    const result = await this.billServices.addbillingType(TypeCommand).toPromise();
      console.log(result);
      if(result.code == 200){
      this.message = result.message;
      }
       setTimeout(() => {
       this.router.navigate(['/revenue/billmanage/']);
       },3000);
   
    } catch (e) {
    console.log(e);
  }
}
 onChangedSort(event: Event): void{
 console.log(this.selected);
  }
}
