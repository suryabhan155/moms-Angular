import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {HistoryComponent} from './history/history.component';
import {AllPatientsComponent} from './registration/all-patients/all-patients.component';
import {RegisterComponent} from './registration/register/register.component';
import {VitalsComponent} from './clinic_management/vitals/vitals.component';
import {PhysicalExaminationComponent} from './clinic_management/physical-examination/physical-examination.component';
import {ConsultationComponent} from './clinic_management/consultation/consultation.component';
import {ManageVitalsComponent} from './clinic_management/manage-vitals/manage-vitals.component';
import {ManageRoomComponent} from './clinic_management/manage-room/manage-room.component';
import {RoomComponent} from './clinic_management/room/room.component';
import { LookupManageComponent } from './lookup_management/lookup-manage/lookup-manage.component';
import { LookupitemManageComponent } from './lookup_management/lookupitem-manage/lookupitem-manage.component';
import { LookupitemComponent } from './lookup_management/lookupitem/lookupitem.component';
import { LookupmasterManageComponent } from './lookup_management/lookupmaster-manage/lookupmaster-manage.component';
import { LookupmasterComponent } from './lookup_management/lookupmaster/lookupmaster.component';
import { MapMasterItemComponent } from './lookup_management/map-master-item/map-master-item.component';
import { MapmasterManageComponent } from './lookup_management/mapmaster-manage/mapmaster-manage.component';
import { ManageStoresComponent } from './supplyChain_management/manage_stores/manage-stores/manage-stores.component';
import { StoresComponent } from './supplyChain_management/manage_stores/stores/stores.component';
import { ManageSuppliersComponent } from './supplyChain_management/manage_suppliers/manage-suppliers/manage-suppliers.component';
import { SuppliersComponent} from './supplyChain_management/manage_suppliers/suppliers/suppliers.component';
import { ManagePurchaseorderComponent } from './supplyChain_management/manage_purchaseOrder/manage-purchaseorder/manage-purchaseorder.component';
import {  PurchaseorderComponent } from './supplyChain_management/manage_purchaseOrder/purchaseorder/purchaseorder.component';
import { ManagePorderitemComponent } from './supplyChain_management/manage_purchaseOrderItem/manage-porderitem/manage-porderitem.component';
import { PorderitemComponent } from './supplyChain_management/manage_purchaseOrderItem/porderitem/porderitem.component';
import { ManageGoodReceivednodeComponent } from './supplyChain_management/goodReceivedNote/manage-good-receivednode/manage-good-receivednode.component';
import { GoodReceivednodeComponent } from './supplyChain_management/goodReceivedNote/good-receivednode/good-receivednode.component';
import { ManageGoodRecvednoteitemComponent } from './supplyChain_management/goodReceivedNoteItem/manage-good-recvednoteitem/manage-good-recvednoteitem.component';
import { GoodRecvednoteitemComponent } from './supplyChain_management/goodReceivedNoteItem/good-recvednoteitem/good-recvednoteitem.component';
import { ManageStockvoucherComponent } from './supplyChain_management/manage_stockVoucher/manage-stockvoucher/manage-stockvoucher.component';
import { StockvoucherComponent } from './supplyChain_management/manage_stockVoucher/stockvoucher/stockvoucher.component';
import { ManageStockvoucheritemComponent } from './supplyChain_management/manage_StockVoucherItem/manage-stockvoucheritem/manage-stockvoucheritem.component';
import { StockvoucheritemComponent } from './supplyChain_management/manage_StockVoucherItem/stockvoucheritem/stockvoucheritem.component';
import { ManageStockVoucherIssueComponent } from './supplyChain_management/manage_stockVoucherIssue/manage-stock-voucher-issue/manage-stock-voucher-issue.component';
import { StockVoucherIssueComponent } from './supplyChain_management/manage_stockVoucherIssue/stock-voucher-issue/stock-voucher-issue.component';


const routes: Routes = [
    {
        path: 'records/home/:id',
        component: HomeComponent,
        pathMatch: 'full',
    },
    {
        path: 'records/history',
        component: HistoryComponent
    },
    {
        path: 'records/allPatients',
        component: AllPatientsComponent
    },
    {
        path: 'records/register',
        component: RegisterComponent
    },
    {
        path: 'records/register/:id',
        component: RegisterComponent
    },
    {
        path: 'records/manageVitals/:id',
        component: ManageVitalsComponent
    },
    {
        path: 'records/vitals/:id',
        component: VitalsComponent
    },
    {
        path: 'records/physicalExamination/:id',
        component: PhysicalExaminationComponent
    },
    {
        path: 'records/consultation/:id',
        component: ConsultationComponent
    },
    {
        path: 'records/manageroom',
        component: ManageRoomComponent
    },
    {
        path: 'records/room',
        component: RoomComponent
    },
    {
        path: 'records/room/:id',
        component: RoomComponent
    },

    {
        path: 'records/lookup',
        component: LookupManageComponent
    },

    {
        path: 'records/lookupitemmanage',
        component: LookupitemManageComponent
    },
    {
        path: 'records/lookupitem',
        component:  LookupitemComponent
    },
    {
        path: 'records/lookupitem/:id',
        component:  LookupitemComponent
    },
    {
        path: 'records/lookupmastermanage',
        component:  LookupmasterManageComponent
    },
    {
        path: 'records/lookupmaster',
        component: LookupmasterComponent
    },
    {
        path: 'records/lookupmaster/:id',
        component: LookupmasterComponent
    },
    {
        path: 'records/mapmaster',
        component: MapMasterItemComponent
    },
    {
        path: 'records/mapmastermanage',
        component: MapmasterManageComponent
    },
    {
        path: 'records/managestores',
        component: ManageStoresComponent
    },
    {
        path: 'records/stores',
        component: StoresComponent
    },
    {
        path: 'records/stores/:id',
        component: StoresComponent
    },
    {
        path: 'records/managesuppliers',
        component:  ManageSuppliersComponent
    },
    {
        path: 'records/suppliers',
        component: SuppliersComponent
    },
    {
        path: 'records/suppliers/:id',
        component: SuppliersComponent
    },
    {
        path: 'records/managepurchaseorder',
        component: ManagePurchaseorderComponent
    },
    {
        path: 'records/purchaseorder/:id',
        component:  PurchaseorderComponent
    },
    {
        path: 'records/purchaseorder',
        component:  PurchaseorderComponent
    },
    {
        path: 'records/manageporderitem',
        component: ManagePorderitemComponent
    },
    {
        path: 'records/purchaseorderitem/:id',
        component:  PorderitemComponent
    },
    {
        path: 'records/purchaseorderitem',
        component:  PorderitemComponent
    },
    {
        path: 'records/managegoodrecievednode',
        component: ManageGoodReceivednodeComponent
    },
    {
        path: 'records/goodrecievednode',
        component:  GoodReceivednodeComponent
    },
    {
        path: 'records/goodrecievednode/:id',
        component:  GoodReceivednodeComponent
    },
    {
        path: 'records/managegoodrecievednodeitem',
        component: ManageGoodRecvednoteitemComponent
    },
    {
        path: 'records/goodrecievednodeitem',
        component: GoodRecvednoteitemComponent
    },
    {
        path: 'records/goodrecievednodeitem/:id',
        component: GoodRecvednoteitemComponent
    },
    {
        path: 'records/managestockvoucher',
        component: ManageStockvoucherComponent
    },
    {
        path: 'records/stockvoucher/:id',
        component: StockvoucherComponent
    },
    {
        path: 'records/stockvoucher',
        component: StockvoucherComponent
    },
    {
        path: 'records/managestockvoucheritem',
        component: ManageStockvoucheritemComponent
    },
    {
        path: 'records/stockvoucheritem/:id',
        component: StockvoucheritemComponent
    },
    {
        path: 'records/stockvoucheritem',
        component: StockvoucheritemComponent
    },
    {
        path: 'records/managestockvoucherissue',
        component: ManageStockVoucherIssueComponent
    },
    {
        path: 'records/stockvoucherissue',
        component: StockVoucherIssueComponent
    },
    {
        path: 'records/stockvoucherissue/:id',
        component:  StockVoucherIssueComponent
    },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
