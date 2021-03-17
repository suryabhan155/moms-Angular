import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { BillingManagementService } from '../../_services/billing-management.service';
import { BillingDiscountCommand } from '../../_model/BillingDiscountCommand';

@Component({
  selector: 'app-billingdiscount',
  templateUrl: './billingdiscount.component.html',
  styleUrls: ['./billingdiscount.component.css']
})
export class BillingdiscountComponent implements OnInit {
// id of existing patient
id: string;
save: boolean;
edit: boolean;
message: string;
option: [];
selected: any;
show: boolean;
billdscFormGroup: FormGroup;
maxDate: Date;
checked: true;

public voidchecked:boolean;

constructor(private formBuilder: FormBuilder,
            private route: ActivatedRoute,
            private authService: AuthService,
            private billingService: BillingManagementService,
            private router: Router) {
              this.route.params.subscribe(res => {
                this.id = res.id;
            });
            this.maxDate = new Date();
             }

async ngOnInit(): Promise<void> {

  this.billdscFormGroup = this.formBuilder.group({
    id: [''],
    name: new FormControl('', Validators.required),
    status: new FormControl(''),
    minDiscount: new FormControl(''),
    maxDiscount: new FormControl(''),
    isPercentage: new FormControl(''),
    needsApproval: new FormControl(''),
});
console.log(this.id); 
this.maxDate = new Date();
if(this.id){
  this.save = false;
  this.edit = true;
  const result = await this.billingService.getbillinDiscountByid(this.id).toPromise();
  this.billdscFormGroup.setValue(result.data);
}
else if(this.id === undefined){
  this.save = true;
   this.edit = false;
}
this.show=false;
}
async onSaveBilldsc(): Promise<void>{
  
  try {
    if(this.billdscFormGroup.value.isPercentage === ""){
      this.billdscFormGroup.value.isPercentage = false
    }
     if(this.billdscFormGroup.value.needsApproval === ""){
      this.billdscFormGroup.value.needsApproval = false;
    }
    const billDiscount: BillingDiscountCommand = {
        name: this.billdscFormGroup.value.name,
        minDiscount: this.billdscFormGroup.value.minDiscount,
        maxDiscount: this.billdscFormGroup.value.maxDiscount,
        isPercentage: this.billdscFormGroup.value.isPercentage,
        needsApproval: this.billdscFormGroup.value.needsApproval,
        userId: this.authService.user.profile.sub,
        id: '00000000-0000-0000-0000-000000000000',
        status: this.billdscFormGroup.value.status,
        createDate: new Date(),
        void: false,
        voidDate: new Date(),
    };
   
    const result = await this.billingService.addbillingDescount(billDiscount).toPromise();
 
    if(result.code == 200){
      this.message = result.message;
      }
       setTimeout(() => {
       this.router.navigate(['/revenue/billdiscountmanage/']);
       },3000);
    
} catch (e) {
    console.log(e);
}
}
async onEditBillingdsc(): Promise<void>{
  try {
    if(this.billdscFormGroup.value.isPercentage === ""){
      this.billdscFormGroup.value.isPercentage = false
    }
     if(this.billdscFormGroup.value.needsApproval === ""){
      this.billdscFormGroup.value.needsApproval = false;
    }
    const DiscountCommand: BillingDiscountCommand = {
      name: this.billdscFormGroup.value.name,
      minDiscount: this.billdscFormGroup.value.minDiscount,
      maxDiscount: this.billdscFormGroup.value.maxDiscount,
      isPercentage: this.billdscFormGroup.value.isPercentage,
      needsApproval: this.billdscFormGroup.value.needsApproval,
      userId: this.authService.user.profile.sub,
      id: this.id,
      status: this.billdscFormGroup.value.status,
      createDate: new Date(),
      void: false,
      voidDate: new Date(),
    };
    console.log(DiscountCommand);
    const result = await this.billingService.addbillingDescount(DiscountCommand).toPromise();
   
      if(result.code == 200){
      this.message = result.message;
      }
       setTimeout(() => {
        this.router.navigate(['/revenue/billdiscountmanage/']);
       },3000);
   
    } catch (e) {
    console.log(e);
  }
}
 onChangedSort(event: Event): void{
 console.log(this.selected);
  }
}

