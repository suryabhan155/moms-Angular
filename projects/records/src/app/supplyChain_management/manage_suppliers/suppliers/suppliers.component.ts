import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SuppliersCommand } from '../../../_models/SuppliersCommand';
import { StockManagementService } from '../../../_services/stock-management.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {
// id of existing patient
id: string;
save: boolean;
edit: boolean;
message: string;
option: [];
selected: any;
show: boolean;
suppliersFormGroup: FormGroup;
maxDate: Date;
public voidchecked:boolean;

constructor(private formBuilder: FormBuilder,
            private route: ActivatedRoute,
            private authService: AuthService,
            private router: Router,
            private Supplierservices: StockManagementService) {
              this.route.params.subscribe(res => {
                this.id = res.id;
            });
            this.maxDate = new Date();
             }

async ngOnInit(): Promise<void> {

  this.suppliersFormGroup = this.formBuilder.group({
    id: [''],
    name: new FormControl('', Validators.required),
    status: new FormControl(''),
});
console.log(this.id); 
this.maxDate = new Date();
if(this.id){
  this.save = false;
  this.edit = true;
  const result = await this.Supplierservices.getSuppliersbyId(this.id).toPromise();
  this.selected = result.data.status;
  this.suppliersFormGroup.setValue(result.data);
 
}
else if(this.id === undefined){
  this.save = true;
   this.edit = false;
}
this.show=false;
}

async onSaveSuppliers(): Promise<void>{
  
  try {
    const suppliersCommand: SuppliersCommand = {
        name: this.suppliersFormGroup.value.name,
        userId: this.authService.user.profile.sub,
        id: '00000000-0000-0000-0000-000000000000',
        status: this.suppliersFormGroup.value.status,
        createDate: new Date(),
        void: false,
        voidDate: new Date(),
    };
   
    const result = await this.Supplierservices.addSuppliers(suppliersCommand).toPromise();
    
    if(result.code == 200){
      this.message = result.message;
      }
       setTimeout(() => {
       this.router.navigate(['/records/managesuppliers/']);
       },3000);
    
} catch (e) {
    console.log(e);
}
}
async onEditSuppliers(): Promise<void>{
  try {
    const suppliersCommand: SuppliersCommand = {
        name: this.suppliersFormGroup.value.name,
        userId: this.authService.user.profile.sub,
        id: this.id,
        status: this.suppliersFormGroup.value.status,
        createDate: new Date(),
        void: false,
    };
    console.log(suppliersCommand);
    const result = await this.Supplierservices.addSuppliers(suppliersCommand).toPromise();
      console.log(result);
      if(result.code == 200){
      this.message = result.message;
      }
       setTimeout(() => {
       this.router.navigate(['/records/managesuppliers/']);
       },3000);
   
    } catch (e) {
    console.log(e);
  }
}
 onChangedSort(event: Event): void{
 console.log(this.selected);
  }
}
