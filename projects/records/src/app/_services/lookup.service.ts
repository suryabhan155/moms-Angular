import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../../src/environments/environment';
import {Observable} from 'rxjs';
import { LookupItemCommand } from '../_models/LookupItemCommand';
import { LookupMasterCommand } from '../_models/LookupMasterCommand';
import { LookupMapMaster } from '../_models/LookupMapMaster';

import { map } from 'rxjs/operators';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LookupService {
    private LOOKUP_API = environment.LOOKUP_API;

    constructor(private httpClient: HttpClient) { }

    public getLookByGroupName(groupName: string): Observable<any[]> {
        return this.httpClient.get<any[]>(this.LOOKUP_API + 'LookupOption/optionsByName/' + groupName).pipe();
    }

    public getCounty(countyName: string): Observable<any[]> {
        return this.httpClient.get<any[]>(this.LOOKUP_API + 'LookupMasterItem/GetCounty/' + countyName).pipe();
    }

    public getCounties(): Observable<any[]> {
        return this.httpClient.get<any[]>(this.LOOKUP_API + 'LookupMasterItem/GetCounty').pipe();
    }

    public getSubCounty(subCountyName: string): Observable<any[]> {
        return this.httpClient.get<any[]>(this.LOOKUP_API + 'LookupMasterItem/GetSubCounty/' + subCountyName).pipe();
    }
    public getLookupIten(): Observable<any> {
        return this.httpClient.get<any>(this.LOOKUP_API + 'LookupItem').pipe();
    }

    public addLookuoItem(lookupItemCommand: LookupItemCommand):Observable<any>{
        return this.httpClient.post<any>(this.LOOKUP_API + 'LookupItem', JSON.stringify(lookupItemCommand), httpOptions).pipe();
    }

    public getLookuoItembyId(id: string): Observable<any>{
        return this.httpClient.get<any>(this.LOOKUP_API + 'LookupItem/item/' + id).pipe();
    }

    public deleteLookuoItembyId(id: string): Observable<any>{
        return this.httpClient.get<any>(this.LOOKUP_API + 'LookupItem/Delete/' + id).pipe();
    }

    public getLookupMaster(): Observable<any> {
        return this.httpClient.get<any>(this.LOOKUP_API + 'LookupMaster').pipe();
    }

    public addLookuoMaster(lookupItemCommand: LookupMasterCommand):Observable<any>{
        console.log(lookupItemCommand)
        return this.httpClient.post<any>(this.LOOKUP_API + 'LookupMaster', JSON.stringify(lookupItemCommand), httpOptions).pipe();
    }

    public getLookuoMasterbyId(id: string): Observable<any>{
        return this.httpClient.get<any>(this.LOOKUP_API + 'LookupMaster/masterById/' + id).pipe();
    }
    
    public deleteLookuoMasterbyId(id: string): Observable<any>{
        return this.httpClient.get<any>(this.LOOKUP_API + 'LookupMaster/delete/' + id).pipe();
    }

    public addLookuoMapmaster(lookupmapMaster: LookupMapMaster): Observable<any>{
        console.log(lookupmapMaster);
        return this.httpClient.post<any>(this.LOOKUP_API + 'LookupMasterItem', JSON.stringify(lookupmapMaster), httpOptions).pipe();
    }
}
