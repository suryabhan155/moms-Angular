import { getSupportedInputTypes } from '@angular/cdk/platform';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LookupMapMaster } from '../../_models/LookupMapMaster';
import { ClinicManagementService } from '../../_services/clinic-management.service';
import { LookupService } from '../../_services/lookup.service';

@Component({
  selector: 'app-map-master-item',
  templateUrl: './map-master-item.component.html',
  styleUrls: ['./map-master-item.component.css']
})
export class MapMasterItemComponent implements OnInit {
  mapMasterFormGroup: FormGroup;
  id: any;
  masteritemid: any; 
  selectedmaster: any;
  selecteditem: any;
  message: string;
  public MasterDTO: LookupMasterDTO[];
  public ItemDTO: LookupitemDTO[];

  constructor(private formBuilder: FormBuilder,
              private lookupService: LookupService,
              private route: ActivatedRoute,
              private authService: AuthService,
              private router: Router) {
              this.route.params.subscribe(res => {
              this.id = res.id;
    });
 }

  async ngOnInit(): Promise<void> {
    const result = await this.lookupService.getLookupIten().toPromise();
    this.ItemDTO = result.data;

    const masterresult = await this.lookupService.getLookupMaster().toPromise();
    this.MasterDTO = masterresult.data;

    this.mapMasterFormGroup = this.formBuilder.group({
      id: [''],
      lookupMasterId: [''],
      lookupItemId: ['']
  });
  }

 async onSaveMapitem(): Promise<void>{
    try {
      const lookupmapMaster: LookupMapMaster = {
        lookupMasterId: this.selectedmaster,
        lookupItemId: this.selecteditem,
        id: '00000000-0000-0000-0000-000000000000',
        userId: this.authService.user.profile.sub,
        createDate: new Date(),
        void: false,
        voidDate: new Date(),
      };
      console.log(lookupmapMaster);
      const result = await this.lookupService.addLookuoMapmaster(lookupmapMaster).toPromise();
   
      if(result.code === 200){
        this.message = result.message;
        }
         setTimeout(() => {
         this.router.navigate(['/records/mapmastermanage/']);
         },3000);
  } catch (e) {
    
    }
  }

async onEditMapMaster(): Promise<void>{
    try {
      const lookupmapMaster: LookupMapMaster = {
        lookupMasterId: this.selectedmaster,
        lookupItemId: this.selecteditem,
        id: this.id,
        userId: this.authService.user.profile.sub,
        createDate: new Date(),
        void: false,
        voidDate: new Date(),
      };
      console.log(lookupmapMaster);
      const result = await this.lookupService.addLookuoMapmaster(lookupmapMaster).toPromise();
   
      if(result.code === 200){
        this.message = result.message;
        }
         setTimeout(() => {
         this.router.navigate(['/records/mapmastermanage/']);
         },3000);
  } catch (e) {
    
    }
  }

  onChangedItem(event: Event): void{
    
    this.masteritemid = this.selecteditem;
    
    console.log(this.masteritemid);
     }
     
  onChangedMaster(event: Event): void{
    console.log(this.selectedmaster);
    }
}
export class LookupitemDTO {
  name?: string;
  alias?: string;
  createDate?: Date;
  id?: string; 
  userId?: string;
  void?: boolean;
  voidDate?: Date;
}
export class LookupMasterDTO {
  name?: string;
  alias?: string;
  createDate?: Date;
  id?: string; 
  userId?: string;
  void?: boolean;
  voidDate?: Date;
}