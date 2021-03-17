import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GoodReceivedNoteCommand } from '../_models/GoodReceivedNoteCommand';
import { GoodReceivedNoteItemCommand } from '../_models/GoodReceivedNoteItemCommand';
import { PurchaseOrderCommand } from '../_models/PurchaseOrderCommand';
import { PurOrderItemCommand } from '../_models/PurOrderItemCommand';
import { StockVoucherCommand } from '../_models/StockVoucherCommand';
import { StoreManageCommand } from '../_models/StoreManageCommand';
import { SuppliersCommand } from '../_models/SuppliersCommand';
import { StockVoucherItemCommand } from '../_models/StockVoucherItemCommand';
import { StockVoucherIssueCommand } from '../_models/StockVoucherIssueCommand';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class StockManagementService {

  private SUPPLY_API = environment.SUPPLYCHAIN_MANAGEMENT_API;
constructor(private httpClient: HttpClient) { }
public getStores(): Observable<any> {
  return this.httpClient.get<any>(this.SUPPLY_API + 'Store/lab/stores').pipe();
}

public addStores(StoresCommand: StoreManageCommand):Observable<any>{
  return this.httpClient.post<any>(this.SUPPLY_API + 'Store', JSON.stringify(StoresCommand), httpOptions).pipe();
}

public getStoresbyId(id: string): Observable<any>{
  return this.httpClient.get<any>(this.SUPPLY_API + 'Store/' + id).pipe();
}

public deleteStores(id: string): Observable<any>{
  return this.httpClient.delete<any>(this.SUPPLY_API + 'Store/' + id).pipe();
}

//#region Suppliers Services
public getSuppliers(): Observable<any> {
  return this.httpClient.get<any>(this.SUPPLY_API + 'Supplier/lab/supplier').pipe();
}

public addSuppliers(suppliersCommand: SuppliersCommand):Observable<any>{
  console.log(suppliersCommand)
  return this.httpClient.post<any>(this.SUPPLY_API + 'Supplier', JSON.stringify(suppliersCommand), httpOptions).pipe();
}

public getSuppliersbyId(id: string): Observable<any>{
  return this.httpClient.get<any>(this.SUPPLY_API + 'Supplier/' + id).pipe();
}

public deleteSuppliers(id: string): Observable<any>{
  return this.httpClient.delete<any>(this.SUPPLY_API + 'Supplier/' + id).pipe();
}
//#endregion

//#region PurchaseOrder service
public getPurOrder(): Observable<any> {
  return this.httpClient.get<any>(this.SUPPLY_API + 'PurchaseOrder/lab/po').pipe();
}

public addPurOrder(purOrderCommand: PurchaseOrderCommand):Observable<any>{
  return this.httpClient.post<any>(this.SUPPLY_API + 'PurchaseOrder', JSON.stringify(purOrderCommand), httpOptions).pipe();
}

public getPurOrderbyId(id: string): Observable<any>{
  return this.httpClient.get<any>(this.SUPPLY_API + 'PurchaseOrder/' + id).pipe();
}

public deletePurOrder(id: string): Observable<any>{
  return this.httpClient.delete<any>(this.SUPPLY_API + 'PurchaseOrder/' + id).pipe();
}
//#endregion

//#region PurchaseOrder service
public getPurOrderItem(): Observable<any> {
  return this.httpClient.get<any>(this.SUPPLY_API + 'PurchaseOrderItem/lab/po/items').pipe();
}

public addPurOrderItem(purOrderItemCommand: PurOrderItemCommand):Observable<any>{
  return this.httpClient.post<any>(this.SUPPLY_API + 'PurchaseOrderItem', JSON.stringify(purOrderItemCommand), httpOptions).pipe();
}

public getPurOrderItembyId(id: string): Observable<any>{
  return this.httpClient.get<any>(this.SUPPLY_API + 'PurchaseOrderItem/' + id).pipe();
}

public deletePurOrderItem(id: string): Observable<any>{
  return this.httpClient.delete<any>(this.SUPPLY_API + 'PurchaseOrderItem/' + id).pipe();
}
//#endregion

//#region Goodrecieved Node services
public getGoodReceivedNote(): Observable<any> {
  return this.httpClient.get<any>(this.SUPPLY_API + 'GoodReceivedNote/lab/grn').pipe();
}

public addGoodReceivedNote(Goodrecievednode: GoodReceivedNoteCommand):Observable<any>{
  return this.httpClient.post<any>(this.SUPPLY_API + 'GoodReceivedNote', JSON.stringify(Goodrecievednode), httpOptions).pipe();
}

public getGoodReceivedNotebyId(id: string): Observable<any>{
  return this.httpClient.get<any>(this.SUPPLY_API + 'GoodReceivedNote/' + id).pipe();
}

public deleteGoodReceivedNote(id: string): Observable<any>{
  return this.httpClient.delete<any>(this.SUPPLY_API + 'GoodReceivedNote/' + id).pipe();
}
//#endregion

//#region GoodReceivedNoteItem Services
public getGoodRecvedNoteItem(): Observable<any> {
  return this.httpClient.get<any>(this.SUPPLY_API + 'GoodReceivedNoteItem/lab/grn/items').pipe();
}

public addGoodRecvedNoteItem(Goodrecievednode: GoodReceivedNoteItemCommand):Observable<any>{
  return this.httpClient.post<any>(this.SUPPLY_API + 'GoodReceivedNoteItem', JSON.stringify(Goodrecievednode), httpOptions).pipe();
}

public getGoodRecvedNoteItembyId(id: string): Observable<any>{
  return this.httpClient.get<any>(this.SUPPLY_API + 'GoodReceivedNoteItem/' + id).pipe();
}

public deleteGoodRecvedNoteItem(id: string): Observable<any>{
  return this.httpClient.delete<any>(this.SUPPLY_API + 'GoodReceivedNoteItem/' + id).pipe();
}
//#endregion

//#region StockVoucher Services
public getStockvoucher(): Observable<any> {
  return this.httpClient.get<any>(this.SUPPLY_API + 'StoreVoucher/lab/vouchers').pipe();
}

public addStockvoucher(stockVoucher: StockVoucherCommand):Observable<any>{
  return this.httpClient.post<any>(this.SUPPLY_API + 'StoreVoucher', JSON.stringify(stockVoucher), httpOptions).pipe();
}

public getStockvoucherbyId(id: string): Observable<any>{
  return this.httpClient.get<any>(this.SUPPLY_API + 'StoreVoucher/' + id).pipe();
}

public deleteStockvoucher(id: string): Observable<any>{
  return this.httpClient.delete<any>(this.SUPPLY_API + 'StoreVoucher/' + id).pipe();
}
//#endregion

//#region StockVoucherItem Services 
public getStockvoucherItem(): Observable<any> {
  return this.httpClient.get<any>(this.SUPPLY_API + 'StoreVoucherItem/lab/voucher/items').pipe();
}

public addStockvoucherItem(stockVoucher: StockVoucherItemCommand):Observable<any>{
  return this.httpClient.post<any>(this.SUPPLY_API + 'StoreVoucherItem', JSON.stringify(stockVoucher), httpOptions).pipe();
}

public getStockvoucherItembyId(id: string): Observable<any>{
  return this.httpClient.get<any>(this.SUPPLY_API + 'StoreVoucherItem/' + id).pipe();
}

public deleteStockvoucherItem(id: string): Observable<any>{
  return this.httpClient.delete<any>(this.SUPPLY_API + 'StoreVoucherItem/' + id).pipe();
}
//#endregion

//#region StockVoucherIssue Services 
public getStockvoucherIssue(): Observable<any> {
  return this.httpClient.get<any>(this.SUPPLY_API + 'stockvoucherissue/lab/vouchers').pipe();
}

public addStockvoucherIssue(stockVoucherissue: StockVoucherIssueCommand):Observable<any>{
  return this.httpClient.post<any>(this.SUPPLY_API + 'StockVoucherIssue/', JSON.stringify(stockVoucherissue), httpOptions).pipe();
}

public getStockvoucherIssuebyId(id: string): Observable<any>{
  return this.httpClient.get<any>(this.SUPPLY_API + 'stockvoucherissue/' + id).pipe();
}

public deleteStockvoucherIssue(id: string): Observable<any>{
  return this.httpClient.delete<any>(this.SUPPLY_API + 'stockvoucherissue/' + id).pipe();
}
//#endregion
}
