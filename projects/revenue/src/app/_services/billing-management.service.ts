import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../../src/environments/environment';
import { Observable } from 'rxjs';
import { BillingDiscountCommand } from '../_model/BillingDiscountCommand';
import { map } from 'rxjs/operators';
import { BillingTypeCommand } from '../_model/BillingTypeCommand';
import { PaymentMasterCommand } from '../_model/PaymentMasterCommand';
import { BillItemTypeCommnd } from '../_model/BillItemTypeCommnd';
import { ItemMasterCommand } from '../_model/ItemMasterCommand';
import { SubitemTypeCommand } from '../_model/SubitemTypeCommand';
import { BillingConfigrationCommand } from '../_model/BillingConfigrationCommand';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class BillingManagementService {

  constructor(private httpClient: HttpClient) { }
  
  private BILLING_API = environment.BILLING_MANAGEMENT_API;
  //Billing Type 
  public getbillingType(): Observable<any> {
    return this.httpClient.get<any>(this.BILLING_API + 'BillMaster/BillType').pipe();
  }

public addbillingType(billingType: BillingTypeCommand):Observable<any>{
    return this.httpClient.post<any>(this.BILLING_API + 'BillMaster', JSON.stringify(billingType), httpOptions).pipe();
}

public deletebillingType(id: string): Observable<any> {
  console.log(id)
  return this.httpClient.get<any>(this.BILLING_API + 'BillMaster/delete/' + id).pipe();
}

public getbillingTypeByid(id: string): Observable<any> {
  return this.httpClient.get<any>(this.BILLING_API + 'BillMaster/BillType/' + id).pipe();
}
//Billing Discount
public getbillinDescount(): Observable<any> {
  return this.httpClient.get<any>(this.BILLING_API + 'BillingDiscount/BillingDiscount').pipe();
}

public addbillingDescount(billingDiscount: BillingDiscountCommand): Observable<any>{
  return this.httpClient.post<any>(this.BILLING_API + 'BillingDiscount', JSON.stringify(billingDiscount), httpOptions).pipe();
  }

public deletebillingDescount(id: string): Observable<any> {
  console.log(this.BILLING_API + 'BillingDiscount/delete/' + id)
  return this.httpClient.get<any>(this.BILLING_API + 'BillingDiscount/delete/' + id).pipe();
}

public getbillinDiscountByid(id: string): Observable<any> {
  return this.httpClient.get<any>(this.BILLING_API + 'BillingDiscount/BillingDiscount/' + id).pipe();
}
  //paymentMethod
  public getPayMaster(): Observable<any> {
    return this.httpClient.get<any>(this.BILLING_API + 'PaymentMaster/PaymentMethod').pipe();
  }
  
  public addPayMaster(payMasetr: PaymentMasterCommand): Observable<any>{
    return this.httpClient.post<any>(this.BILLING_API + 'PaymentMaster', JSON.stringify(payMasetr), httpOptions).pipe();
    }

    public deletePayMethod(id: string): Observable<any> {
     
      return this.httpClient.get<any>(this.BILLING_API + 'PaymentMaster/delete/' + id).pipe();
    }

    public getPayMethodByid(id: string): Observable<any> {
      return this.httpClient.get<any>(this.BILLING_API + 'PaymentMaster/BillType/' + id).pipe();
    }
    //BillingItemType item type
    public getItemTypebill(): Observable<any> {
      return this.httpClient.get<any>(this.BILLING_API + 'BillingItemType/BillingItemType').pipe();
    }
    
    public addItemTypebill(itemtypeBill: BillItemTypeCommnd): Observable<any>{
      console.log(itemtypeBill)
      return this.httpClient.post<any>(this.BILLING_API + 'BillingItemType', JSON.stringify(itemtypeBill), httpOptions).pipe();
      }
  
      public deleteItemTypebill(id: string): Observable<any> {
       
        return this.httpClient.get<any>(this.BILLING_API + 'BillingItemType/delete/' + id).pipe();
      }
  
      public getItemTypebillByid(id: string): Observable<any> {
        return this.httpClient.get<any>(this.BILLING_API + 'BillingItemType/BillItemType/' + id).pipe();
      }
 //BillingItemMaster

 public getBillItemMaster(): Observable<any> {
  return this.httpClient.get<any>(this.BILLING_API + 'BillingItemMaster').pipe();
}

public addBillItemMaster(itemMaster: ItemMasterCommand): Observable<any>{
  console.log(itemMaster)
  return this.httpClient.post<any>(this.BILLING_API + 'BillingItemMaster', JSON.stringify(itemMaster), httpOptions).pipe();
  }

  public deleteBillItemMaster(id: string): Observable<any> {
   
    return this.httpClient.get<any>(this.BILLING_API + 'BillingItemMaster/delete/' + id).pipe();
  }

  public getBillItemMasterByid(id: string): Observable<any> {
    return this.httpClient.get<any>(this.BILLING_API + 'BillingItemMaster/' + id).pipe();
  }
  //Billing Sub Item data

 public getSubitemType(): Observable<any> {
  return this.httpClient.get<any>(this.BILLING_API + 'BillingSubItemType').pipe();
}

public addSubitemType(subItem: SubitemTypeCommand): Observable<any>{
  console.log(subItem)
  return this.httpClient.post<any>(this.BILLING_API + 'BillingSubItemType', JSON.stringify(subItem), httpOptions).pipe();
  }

  public deleteSubitemType(id: string): Observable<any> {
   
    return this.httpClient.get<any>(this.BILLING_API + 'BillingSubItemType/delete/' + id).pipe();
  }

  public getSubiteTypeByid(id: string): Observable<any> {
    return this.httpClient.get<any>(this.BILLING_API + 'BillingSubItemType/' + id).pipe();
  }
//BillingItemConfiguration

public getItemConfiguration(): Observable<any> {
  return this.httpClient.get<any>(this.BILLING_API + 'BillingItemConfiguration').pipe();
}

public addItemConfiguration(configuration: BillingConfigrationCommand): Observable<any>{
  console.log(configuration)
  return this.httpClient.post<any>(this.BILLING_API + 'BillingItemConfiguration', JSON.stringify(configuration), httpOptions).pipe();
  }

  public deleteItemConfiguration(id: string): Observable<any> {
   
    return this.httpClient.get<any>(this.BILLING_API + 'BillingItemConfiguration/delete/' + id).pipe();
  }

  public getItemConfigurationByid(id: string): Observable<any> {
    return this.httpClient.get<any>(this.BILLING_API + 'BillingItemConfiguration/' + id).pipe();
  }
//Manage stock

}
