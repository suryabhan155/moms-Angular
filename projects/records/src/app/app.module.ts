/* tslint:disable:object-literal-shorthand */
import { BrowserModule } from '@angular/platform-browser';
import {ModuleWithProviders, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { PersonDetailsComponent } from './person-details/person-details.component';
import {MatTabsModule} from '@angular/material/tabs';
import { HistoryComponent } from './history/history.component';
import {RouterModule} from '@angular/router';
import { PatientNavigationComponent } from './patient-navigation/patient-navigation.component';
import { HomeTabsComponent } from './home-tabs/home-tabs.component';
import { HistoryTabsComponent } from './history-tabs/history-tabs.component';
import { RegisterComponent } from './registration/register/register.component';
import { AllPatientsComponent } from './registration/all-patients/all-patients.component';
import { RegistrationNavigationComponent } from './registration/registration-navigation/registration-navigation.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NewPatientComponent } from './registration/new-patient/new-patient.component';
import {MatStepperModule} from '@angular/material/stepper';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MAT_DATE_LOCALE, MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {MatDialogModule} from '@angular/material/dialog';
import { DobCalculatorComponent } from './registration/dob-calculator/dob-calculator.component';
import { VitalsComponent } from './clinic_management/vitals/vitals.component';
import { PhysicalExaminationComponent } from './clinic_management/physical-examination/physical-examination.component';
import { ConsultationComponent } from './clinic_management/consultation/consultation.component';
import { DeletePatientComponent } from './registration/delete-patient/delete-patient.component';
import { ManageVitalsComponent } from './clinic_management/manage-vitals/manage-vitals.component';
import {MatChipsModule} from '@angular/material/chips';
import { ManageRoomComponent } from './clinic_management/manage-room/manage-room.component';
import { RoomComponent } from './clinic_management/room/room.component';
import { RoomDeleteComponent } from './clinic_management/room-edit-delete/room-delete/room-delete.component';
import { AlertModule } from './_alert/alert.module';
import { LookupManageComponent } from './lookup_management/lookup-manage/lookup-manage.component';
import { LookupitemManageComponent } from './lookup_management/lookupitem-manage/lookupitem-manage.component';
import { LookupmasterManageComponent } from './lookup_management/lookupmaster-manage/lookupmaster-manage.component';
import { LookupitemComponent } from './lookup_management/lookupitem/lookupitem.component';
import { LookupmasterComponent } from './lookup_management/lookupmaster/lookupmaster.component';
import { MapMasterItemComponent } from './lookup_management/map-master-item/map-master-item.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MapmasterManageComponent } from './lookup_management/mapmaster-manage/mapmaster-manage.component';
import { ManageStoresComponent } from './supplyChain_management/manage_stores/manage-stores/manage-stores.component';
import { StoresComponent } from './supplyChain_management/manage_stores/stores/stores.component';
import { ManageSuppliersComponent } from './supplyChain_management/manage_suppliers/manage-suppliers/manage-suppliers.component';
import { SuppliersComponent } from './supplyChain_management/manage_suppliers/suppliers/suppliers.component';
import { ManagePurchaseorderComponent } from './supplyChain_management/manage_purchaseOrder/manage-purchaseorder/manage-purchaseorder.component';
import { PurchaseorderComponent } from './supplyChain_management/manage_purchaseOrder/purchaseorder/purchaseorder.component';
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


const providers = [
    {
        provide: STEPPER_GLOBAL_OPTIONS,
        useValue: { showError: true }
    },
    {
        provide: MAT_DATE_LOCALE, useValue: 'en-GB'
    },
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        PersonDetailsComponent,
        HistoryComponent,
        PatientNavigationComponent,
        HomeTabsComponent,
        HistoryTabsComponent,
        RegisterComponent,
        AllPatientsComponent,
        RegistrationNavigationComponent,
        NewPatientComponent,
        DobCalculatorComponent,
        VitalsComponent,
        PhysicalExaminationComponent,
        ConsultationComponent,
        DeletePatientComponent,
        ManageVitalsComponent,
        ManageRoomComponent,
        RoomComponent,
        RoomDeleteComponent,
        LookupManageComponent,
        LookupitemManageComponent,
        LookupmasterManageComponent,
        LookupitemComponent,
        LookupmasterComponent,
        MapMasterItemComponent,
        MapmasterManageComponent,
        ManageStoresComponent,
        StoresComponent,
        ManageSuppliersComponent,
        SuppliersComponent,
        ManagePurchaseorderComponent,
        PurchaseorderComponent,
        ManagePorderitemComponent,
        PorderitemComponent,
        ManageGoodReceivednodeComponent,
        GoodReceivednodeComponent,
        ManageGoodRecvednoteitemComponent,
        GoodRecvednoteitemComponent,
        ManageStockvoucherComponent,
        StockvoucherComponent,
        ManageStockvoucheritemComponent,
        StockvoucheritemComponent,
        ManageStockVoucherIssueComponent,
        StockVoucherIssueComponent,
    ],
    imports: [
        BrowserModule, MatStepperModule,
        AppRoutingModule, FormsModule, ReactiveFormsModule,
        MatMenuModule, MatFormFieldModule, MatInputModule,
        MatIconModule, MatDatepickerModule, MatNativeDateModule,
        MatListModule, MatSelectModule, MatDialogModule,
        MatCardModule, MatChipsModule,
        MatTabsModule,MatCheckboxModule,
        RouterModule,
        MatTableModule,
        MatPaginatorModule, MatButtonModule, AlertModule
    ],
    entryComponents: [
        DeletePatientComponent
    ],
    providers: providers,
    bootstrap: [AppComponent]
})
export class AppModule { }


@NgModule({})
export class RecordsSharedModule{
    // @ts-ignore
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AppModule,
            providers: providers
        };
    }
}
