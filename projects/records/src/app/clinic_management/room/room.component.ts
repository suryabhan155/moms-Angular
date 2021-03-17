import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ClinicManagementService} from '../../_services/clinic-management.service';
import {RoomCommand} from '../../_models/RoomCommand';
import {MatTableDataSource} from '@angular/material/table';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../../../../../src/app/services/auth.service';
import { ThrowStmt } from '@angular/compiler';
import { AlertService } from '../../_alert/alert.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
  providers: [ClinicManagementService]
})
export class RoomComponent implements OnInit {
  // id of existing patient
  id: string;
  save: boolean;
  edit: boolean;
  message: string;
  option: [];
  selected: any;
  show: boolean;
  roomFormGroup: FormGroup;
  maxDate: Date;
  public voidchecked:boolean;
  public RoomDTO: RoomDTO[] = [];
  dataSource = new MatTableDataSource(this.RoomDTO);
  constructor(private formBuilder: FormBuilder,
              private clinicManagementServices: ClinicManagementService,
              private route: ActivatedRoute,
              private authService: AuthService,
              private router: Router) {
                this.route.params.subscribe(res => {
                  this.id = res.id;
              });
              this.maxDate = new Date();
               }

 async ngOnInit(): Promise<void> {
  
    this.roomFormGroup = this.formBuilder.group({
      id: [''],
      name: new FormControl('', Validators.required),
      status: new FormControl(''),
  });
  
  this.maxDate = new Date();
  if(this.id){
    this.save = false;
    this.edit = true;
    const result = await this.clinicManagementServices.getPatientSingleRoom(this.id).toPromise();
    this.dataSource = new MatTableDataSource(result.data);
    this.selected = result.data.status;
    this.roomFormGroup.setValue(result.data);
   
  }
  else if(this.id === undefined){
    this.save = true;
     this.edit = false;
  }
  this.show=false;
}
getOption(){
  return[
    {id: '0', name: 'Active'},
    {id: '1', name: 'InActive'}
  ]
}
  async onSaveRoom(): Promise<void>{
    
    try {
      const roomCommand: RoomCommand = {
          name: this.roomFormGroup.value.name,
          userId: this.authService.user.profile.sub,
          id: '00000000-0000-0000-0000-000000000000',
          status: this.roomFormGroup.value.status,
          createDate: new Date(),
          void: false,
          voidDate: new Date(),
      };
     
      const result = await this.clinicManagementServices.addPatientRoom(roomCommand).toPromise();
      console.log(result);
      if(result.code === 200){
        this.message = result.message;
        }
         setTimeout(() => {
         this.router.navigate(['/records/manageroom/']);
         },3000);
      
  } catch (e) {
      console.log(e);
  }
  }
  async onEditRoom(): Promise<void>{
    try {
      const roomCommand: RoomCommand = {
          name: this.roomFormGroup.value.name,
          userId: this.authService.user.profile.sub,
          id: this.id,
          status: this.roomFormGroup.value.status,
          createDate: new Date(),
          void: false,
      };
     console.log(roomCommand);
      const result = await this.clinicManagementServices.addPatientRoom(roomCommand).toPromise();
        console.log(result.status);
        if(result.code == 200){
        this.message = result.message;
        }
         setTimeout(() => {
         this.router.navigate(['/records/manageroom/']);
         },3000);
     
  } catch (e) {
      console.log(e);
  }
}
onChangedSort(event: Event): void{
 console.log(this.selected);
  }
}
export class RoomDTO {
  name?: string;
  status?: number;
  createDate?: Date;
  id?: string; 
  userId?: string;
  void?: boolean;
  voidDate?: Date;
}