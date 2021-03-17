import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LookupMasterCommand } from '../../_models/LookupMasterCommand';
import { LookupService } from '../../_services/lookup.service';

@Component({
  selector: 'app-lookupmaster',
  templateUrl: './lookupmaster.component.html',
  styleUrls: ['./lookupmaster.component.css']
})
export class LookupmasterComponent implements OnInit {
  id: string;
  save: boolean;
  edit: boolean;
  message: string;
  option: [];
  selected: any;
  show: boolean;
  itemMasterFormGroup: FormGroup;
  maxDate: Date;
  public voidchecked:boolean;
  constructor(private formBuilder: FormBuilder,
              private lookupService: LookupService,
              private route: ActivatedRoute,
              private authService: AuthService,
              private router: Router) {
                this.route.params.subscribe(res => {
                  this.id = res.id;
              });
              this.maxDate = new Date();
               }

 async ngOnInit(): Promise<void> {
  
    this.itemMasterFormGroup = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      alias: ['', Validators.required]
  });
  console.log(this.id); 
  this.maxDate = new Date();
  if(this.id){
    this.save = false;
    this.edit = true;
    const result = await this.lookupService.getLookuoMasterbyId(this.id).toPromise();
    console.log(result);
    this.itemMasterFormGroup.setValue(result.data);
  }
  else if(this.id === undefined){
    this.save = true;
     this.edit = false;
  }
  this.show=false;
  }

  async onSaveItemMaster(): Promise<void>{
    
    try {
      const lookupmasterCommand: LookupMasterCommand = {
          name: this.itemMasterFormGroup.value.name,
          userId: this.authService.user.profile.sub,
          id: '00000000-0000-0000-0000-000000000000',
          alias: this.itemMasterFormGroup.value.alias,
          createDate: new Date(),
          void: false,
          voidDate: new Date(),
      };
     
      const result = await this.lookupService.addLookuoMaster(lookupmasterCommand).toPromise();
     
      if(result.code === 200){
        this.message = result.message;
        }
         setTimeout(() => {
         this.router.navigate(['/records/lookupmastermanage/']);
         },3000);
    
  } catch (e) {
    
  }
  }
  async onEditItemMaster(): Promise<void>{
    try {
      const lookupmasterCommand: LookupMasterCommand = {
          name: this.itemMasterFormGroup.value.name,
          userId: this.authService.user.profile.sub,
          id: this.id,
          alias: this.itemMasterFormGroup.value.alias,
          createDate: new Date(),
          void: false,
      };
      const result = await this.lookupService.addLookuoMaster(lookupmasterCommand).toPromise();
     
        if(result.code === 200){
        this.message =result.message;
        }
         setTimeout(() => {
         this.router.navigate(['/records/lookupmastermanage/']);
         },3000);
     
  } catch (e) {
      console.log(e);
  }
}
onChangedSort(event: Event): void{
 console.log(this.selected);
  }
}
