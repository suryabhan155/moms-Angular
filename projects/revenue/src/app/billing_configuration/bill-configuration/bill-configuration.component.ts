import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { BillingManagementService } from '../../_services/billing-management.service';
import { BillingConfigrationCommand } from '../../_model/BillingConfigrationCommand';

@Component({
  selector: 'app-bill-configuration',
  templateUrl: './bill-configuration.component.html',
  styleUrls: ['./bill-configuration.component.css']
})
export class BillConfigurationComponent implements OnInit {
// id of existing patient
id: string;
save: boolean;
edit: boolean;
message: string;
option: [];
selected: any;
selectemasterId: any;
show: boolean;
configurationFormGroup: FormGroup;
maxDate: Date;
public voidchecked:boolean;

public MasterType: BillMasterItemType[];


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

  this.configurationFormGroup = this.formBuilder.group({
    id: [''],
    itemMasterId: [''],
    maxStock: ['', Validators.required],
    minStock: ['', Validators.required],
    purchaseUnitPrice: ['', Validators.required],
    quantityPerPurchaseUnit: ['', Validators.required],
    dispensingUnit: ['', Validators.required],
    purchaseUnit: ['', Validators.required],
    quantityPerDispenseUnit: ['', Validators.required],
    status: ['', Validators.required],
});
 var master = await this.billServices.getBillItemMaster().toPromise();
 this.MasterType= master.data;
  
console.log(this.id); 
this.maxDate = new Date();
if(this.id){
  this.save = false;
  this.edit = true;
  const result = await this.billServices.getItemConfigurationByid(this.id).toPromise();
  this.selected = result.data.status;
  this.configurationFormGroup.setValue(result.data);
}
else if(this.id === undefined){
  this.save = true;
   this.edit = false;
}
this.show=false;
}

async onSaveConfiguration(): Promise<void>{
  
  try {
    const billConfiguration: BillingConfigrationCommand = {
      itemMasterId: this.configurationFormGroup.value.itemMasterId,
      maxStock: this.configurationFormGroup.value.maxStock,
      minStock: this.configurationFormGroup.value.minStock,
      purchaseUnitPrice: this.configurationFormGroup.value.purchaseUnitPrice,
      quantityPerPurchaseUnit: this.configurationFormGroup.value.quantityPerPurchaseUnit,
      dispensingUnit: this.configurationFormGroup.value.dispensingUnit,
      purchaseUnit: this.configurationFormGroup.value.purchaseUnit,
      quantityPerDispenseUnit: this.configurationFormGroup.value.quantityPerDispenseUnit,
      status: this.configurationFormGroup.value.status,
      id: '00000000-0000-0000-0000-000000000000',
      userId: this.authService.user.profile.sub,
      createDate: new Date(),
      void: false,
      voidDate: new Date(),
        
    };
   console.log(billConfiguration);
    const result = await this.billServices.addItemConfiguration(billConfiguration).toPromise();
    
    if(result.code === 200){
      this.message = result.message;
      }
       setTimeout(() => {
       this.router.navigate(['/revenue/manageconfiguration/']);
       },3000);
    
} catch (e) {
    console.log(e);
}
}
async onEditConfiguration(): Promise<void>{
  try {
    const billConfiguration: BillingConfigrationCommand = {
      itemMasterId: this.configurationFormGroup.value.itemMasterId,
      maxStock: this.configurationFormGroup.value.maxStock,
      minStock: this.configurationFormGroup.value.minStock,
      purchaseUnitPrice: this.configurationFormGroup.value.purchaseUnitPrice,
      quantityPerPurchaseUnit: this.configurationFormGroup.value.quantityPerPurchaseUnit,
      dispensingUnit: this.configurationFormGroup.value.dispensingUnit,
      purchaseUnit: this.configurationFormGroup.value.purchaseUnit,
      quantityPerDispenseUnit: this.configurationFormGroup.value.quantityPerDispenseUnit,
      status: this.configurationFormGroup.value.status,
      id: this.id,
      userId: this.authService.user.profile.sub,
      createDate: new Date(),
      void: false,
      voidDate: new Date(),
  };
    console.log(billConfiguration);
    const result = await this.billServices.addItemConfiguration(billConfiguration).toPromise();
      console.log(result);
      if(result.code === 200){
      this.message = result.message;
      }
       setTimeout(() => {
       this.router.navigate(['/revenue/manageconfiguration/']);
       },3000);
   
    } catch (e) {
    console.log(e);
  }
}
}
export class BillMasterItemType {
 name?: string;
 id?: string;
}



