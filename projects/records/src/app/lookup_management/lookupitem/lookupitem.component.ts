import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LookupItemCommand } from '../../_models/LookupItemCommand';
import { LookupService } from '../../_services/lookup.service';

@Component({
  selector: 'app-lookupitem',
  templateUrl: './lookupitem.component.html',
  styleUrls: ['./lookupitem.component.css']
})
export class LookupitemComponent implements OnInit {

  id: string;
  save: boolean;
  edit: boolean;
  message: string;
  option: [];
  selected: any;
  show: boolean;
  lookupItemFormGroup: FormGroup;
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
  
    this.lookupItemFormGroup = this.formBuilder.group({
      id: [''],
      name: new FormControl('', Validators.required),
      alias: new FormControl('', Validators.required),
  });
  this.maxDate = new Date();
  if(this.id){
    this.save = false;
    this.edit = true;
    const result = await this.lookupService.getLookuoItembyId(this.id).toPromise();
    this.lookupItemFormGroup.setValue(result.data);
  }
  else if(this.id === undefined){
    this.save = true;
     this.edit = false;
  }
  this.show=false;
}

  async onSaveItem(): Promise<void>{
    
    try {
      const lookupitemCommand: LookupItemCommand = {
          name: this.lookupItemFormGroup.value.name,
          alias: this.lookupItemFormGroup.value.alias,
          id: '00000000-0000-0000-0000-000000000000',
          createDate: new Date(),
          void: false,
          userId: this.authService.user.profile.sub,
      };
     
      const result = await this.lookupService.addLookuoItem(lookupitemCommand).toPromise();
  
      if(result.alias){
        this.message ='LookupItem create successfully';
        }
         setTimeout(() => {
         this.router.navigate(['/records/lookupitemmanage/']);
         },3000);
      
  } catch (e) {
      
  }
  }
  async onEditItem(): Promise<void>{
    try {
    const lookupitemCommand: LookupItemCommand = {
          name: this.lookupItemFormGroup.value.name,
          userId: this.authService.user.profile.sub,
          id: this.id,
          alias: this.lookupItemFormGroup.value.alias,
          createDate: new Date(),
          void: false,
      };
    
      const result = await this.lookupService.addLookuoItem(lookupitemCommand).toPromise();
        if(result){
        this.message ='LookupItem update successfully';
        }
         setTimeout(() => {
         this.router.navigate(['/records/lookupitemmanage/']);
         },3000);
     
  } catch (e) {
      
  }
}
}