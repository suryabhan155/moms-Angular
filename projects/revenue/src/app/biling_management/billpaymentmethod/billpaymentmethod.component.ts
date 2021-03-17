import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { PaymentMasterCommand } from '../../_model/PaymentMasterCommand';
import { BillingManagementService } from '../../_services/billing-management.service';
@Component({
  selector: 'app-billpaymentmethod',
  templateUrl: './billpaymentmethod.component.html',
  styleUrls: ['./billpaymentmethod.component.css']
})
export class BillpaymentmethodComponent implements OnInit {
// id of existing patient
id: string;
save: boolean;
edit: boolean;
message: string;
option: [];
selected: any;
show: boolean;
PaymethodFormGroup: FormGroup;
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

  this.PaymethodFormGroup = this.formBuilder.group({
    id: [''],
    name: new FormControl('', Validators.required),
    status: new FormControl(''),
});
console.log(this.id); 
this.maxDate = new Date();
if(this.id){
  this.save = false;
  this.edit = true;
  var result = await this.billServices.getPayMethodByid(this.id).toPromise();
  this.selected = result.data.status;
  this.PaymethodFormGroup.setValue(result.data);
 
}
else if(this.id === undefined){
  this.save = true;
   this.edit = false;
}
this.show=false;
}
async onSavePaymentMethod(): Promise<void>{
  
  try {
    const PayCommand: PaymentMasterCommand = {
        name: this.PaymethodFormGroup.value.name,
        userId: this.authService.user.profile.sub,
        id: '00000000-0000-0000-0000-000000000000',
        status: this.PaymethodFormGroup.value.status,
        createDate: new Date(),
        void: false,
        voidDate: new Date(),
    };
   
    const result = await this.billServices.addPayMaster(PayCommand).toPromise();
    console.log(result);
    if(result.code === 200){
      this.message = result.message;
      }
       setTimeout(() => {
       this.router.navigate(['/revenue/paymethodmanage/']);
       },3000);
    
} catch (e) {
    console.log(e);
}
}
async onEditPaymentMethod(): Promise<void>{
  try {
    const PayCommand: PaymentMasterCommand = {
      name: this.PaymethodFormGroup.value.name,
      userId: this.authService.user.profile.sub,
      id: this.id,
      status: this.PaymethodFormGroup.value.status,
      createDate: new Date(),
      void: false,
      voidDate: new Date(),
  };
    console.log(PayCommand);
    const result = await this.billServices.addPayMaster(PayCommand).toPromise();
      console.log(result);
      if(result.code == 200){
      this.message = result.message;
      }
       setTimeout(() => {
       this.router.navigate(['/revenue/paymethodmanage/']);
       },3000);
   
    } catch (e) {
    console.log(e);
  }
}
 onChangedSort(event: Event): void{
 console.log(this.selected);
  }
}
