import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../../src/environments/environment';
import {Observable} from 'rxjs';
import {Contacts, Death, Employers, RegistrationCommand} from '../_models/RegistrationCommand';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
    private REGISTRATION_API = environment.REGISTRATION_API;

    constructor(private httpClient: HttpClient) { }

    public getAllPatient(): Observable<any> {
        return this.httpClient.get<any>(this.REGISTRATION_API + 'Patient', httpOptions).pipe();
    }

    public registerPatient(newPatient: RegistrationCommand): Observable<any> {
        return this.httpClient.post<any>(this.REGISTRATION_API + 'Patient', JSON.stringify(newPatient), httpOptions).pipe();
    }

    public getPatient(id: string): Observable<any> {
        return this.httpClient.get(this.REGISTRATION_API + 'Patient/' + id).pipe();
    }

    public deletePatient(id: string): Observable<any> {
        return this.httpClient.delete(this.REGISTRATION_API + 'Patient/delete/' + id).pipe();
    }

    public searchPatient(searchString: string): Observable<any> {
        return this.httpClient.get(this.REGISTRATION_API + 'Patient/PatientSearch/' + JSON.stringify(searchString)).pipe();
    }

    public updateContacts(contacts: Contacts): Observable<any> {
        return this.httpClient.post<any>(this.REGISTRATION_API + 'Contact/Add', JSON.stringify(contacts), httpOptions).pipe();
    }

    public updateEmployers(employers: Employers[]): Observable<any> {
        return this.httpClient.post<any>(this.REGISTRATION_API + 'Contact/Add', JSON.stringify(employers), httpOptions).pipe();
    }

    public updateDeath(death: Death): Observable<any> {
        return this.httpClient.post<any>(this.REGISTRATION_API + 'Death', JSON.stringify(death), httpOptions).pipe();
    }
}
