import { Injectable } from '@angular/core';
import {environment} from '../../../../../src/environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {VitalsCommand} from '../_models/VitalsCommand';
import {RoomCommand} from '../_models/RoomCommand';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ClinicManagementService {
    private CLINIC_MANAGEMENT_API = environment.CLINIC_MANAGEMENT_API;

    constructor(private httpClient: HttpClient) { }

    public addPatientVitals(vitalsCommand: VitalsCommand): Observable<any> {
        return this.httpClient.post<any>(this.CLINIC_MANAGEMENT_API + 'Vitals', JSON.stringify(vitalsCommand), httpOptions).pipe();
    }

    public getPatientVitals(patientId: string): Observable<any> {
        return this.httpClient.get(this.CLINIC_MANAGEMENT_API + 'Vitals/getPatientVitals/' + patientId).pipe();
    }

    public addPatientConsultation(): Observable<any> {
        return this.httpClient.post(this.CLINIC_MANAGEMENT_API + '', JSON.stringify(''), httpOptions).pipe();
    }
    //Add room service 
    public addPatientRoom(roomCommand: RoomCommand):Observable<any>{
        return this.httpClient.post<any>(this.CLINIC_MANAGEMENT_API + 'Room', JSON.stringify(roomCommand), httpOptions).pipe();

    }
    public getPatientRoom(): Observable<any>{
        return this.httpClient.get(this.CLINIC_MANAGEMENT_API + 'Room').pipe();
    }
    public getPatientSingleRoom(id: string): Observable<any>{
        return this.httpClient.get(this.CLINIC_MANAGEMENT_API + 'Room/' + id).pipe();
    }

    public deleteRoom(id: string): Observable<any>{
        return this.httpClient.delete(this.CLINIC_MANAGEMENT_API + 'Room/' + id).pipe();
    }     
    
}
