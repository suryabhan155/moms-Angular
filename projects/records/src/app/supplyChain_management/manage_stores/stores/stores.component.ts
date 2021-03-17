import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import {StoreManageCommand} from '../../../_models/StoreManageCommand';
import { StockManagementService } from '../../../_services/stock-management.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {
  id: string;
  save: boolean;
  edit: boolean;
  message: string;
  option: [];
  selected: any;
  show: boolean;
  StoresFormGroup: FormGroup;
  maxDate: Date;
  selectedCategory: any;
  public voidchecked:boolean;
  constructor(private formBuilder: FormBuilder,
             private StoreServices: StockManagementService,
              private route: ActivatedRoute,
              private authService: AuthService,
              private router: Router) {
                this.route.params.subscribe(res => {
                  this.id = res.id;
              });
              this.maxDate = new Date();
               }

 async ngOnInit(): Promise<void> {
  
    this.StoresFormGroup = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      category: ['', Validators.required],
      status: ['', Validators.required],
  });
  this.maxDate = new Date();
  if(this.id){
    this.save = false;
    this.edit = true;
     const result = await this.StoreServices.getStoresbyId(this.id).toPromise();
     if(result.data.category === "Reveiving"){
         this.selectedCategory = 0;
     }else if(result.data.category === "Dispensing"){
      this.selectedCategory = 1;
     }else if(result.data.category === "Both or External"){
      this.selectedCategory = 2;
     }
     this.selectedCategory = 
     this.selected = result.data.status;
     this.StoresFormGroup.setValue(result.data);
  }
  else if(this.id === undefined){
    this.save = true;
     this.edit = false;
  }
  this.show=false;
}

  async onSaveStores(): Promise<void>{
    
    try {
       if(this.selectedCategory === 0){
        this.StoresFormGroup.value.category = "Reveiving";
       }
       else if(this.selectedCategory === 1){
        this.StoresFormGroup.value.category = "Dispensing";
       }
       else if(this.selectedCategory === 2){
        this.StoresFormGroup.value.category = "Both or External";
       }

      const storesCommand: StoreManageCommand = {
          name: this.StoresFormGroup.value.name,
          category: this.StoresFormGroup.value.category,
          status: this.selected,
          id: '00000000-0000-0000-0000-000000000000',
          createDate: new Date(),
          void: false,
          userId: this.authService.user.profile.sub,
      };
     
     const result = await this.StoreServices.addStores(storesCommand).toPromise();
  
      if(result.code === 200){
        this.message = result.message;
        }
         setTimeout(() => {
         this.router.navigate(['/records/managestores/']);
         },3000);
      
  } catch (e) {
      
  }
  }
  async onEditStores(): Promise<void>{
    try {
      if(this.selectedCategory === 0){
        this.StoresFormGroup.value.category = "Reveiving";
       }
       else if(this.selectedCategory === 1){
        this.StoresFormGroup.value.category = "Dispensing";
       }
       else if(this.selectedCategory === 2){
        this.StoresFormGroup.value.category = "Both or External";
       }

      const storesCommand: StoreManageCommand = {
          name: this.StoresFormGroup.value.name,
          category: this.StoresFormGroup.value.category,
          status: this.selected,
          id: this.id,
          createDate: new Date(),
          void: false,
          userId: this.authService.user.profile.sub,
      };
      const result = await this.StoreServices.addStores(storesCommand).toPromise();
        if(result.code === 200){
        this.message = result.message;
        }
         setTimeout(() => {
         this.router.navigate(['/records/managestores/']);
         },3000);
     
  } catch (e) {
      
  }
}
}