/* tslint:disable:object-literal-shorthand */
import { BrowserModule } from '@angular/platform-browser';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BilingManageComponent } from './biling_management/biling-manage/biling-manage.component';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AlertModule } from 'projects/records/src/app/_alert/alert.module';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatChipsModule} from '@angular/material/chips';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';

import { BilltypeComponent } from './biling_management/billtype/billtype.component';
import { BillingdiscountManageComponent } from './biling_management/billingdiscount-manage/billingdiscount-manage.component';
import { BillingdiscountComponent } from './biling_management/billingdiscount/billingdiscount.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BillpaymentmethodComponent } from './biling_management/billpaymentmethod/billpaymentmethod.component';
import { PaymethodManageComponent } from './biling_management/paymethod-manage/paymethod-manage.component';
import { BilingDeleteComponent } from './billing_delete/biling-delete/biling-delete.component';
import { ManageItemTypeComponent } from './billing_subitem/manage-item-type/manage-item-type.component';
import { ItemtypeComponent } from './billing_subitem/itemtype/itemtype.component';
import { ManageItemSubtypeComponent } from './billing_subitem/manage-item-subtype/manage-item-subtype.component';
import { ItemSubtypeComponent } from './billing_subitem/item-subtype/item-subtype.component';
import { ManageItemmasterComponent } from './billing_subitem/manage-itemmaster/manage-itemmaster.component';
import { ItemmasterComponent } from './billing_subitem/itemmaster/itemmaster.component';
import { ManageBillConfigurationComponent } from './billing_configuration/manage-bill-configuration/manage-bill-configuration.component';
import { BillConfigurationComponent } from './billing_configuration/bill-configuration/bill-configuration.component';
const providers = [];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BilingManageComponent,
    BilltypeComponent,
    BillingdiscountManageComponent,
    BillingdiscountComponent,
    BillpaymentmethodComponent,
    PaymethodManageComponent,
    BilingDeleteComponent,
    ManageItemTypeComponent,
    ItemtypeComponent,
    ManageItemSubtypeComponent,
    ItemSubtypeComponent,
    ManageItemmasterComponent,
    ItemmasterComponent,
    ManageBillConfigurationComponent,
    BillConfigurationComponent,
  ],
  imports: [
    BrowserModule, MatStepperModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule,
    MatMenuModule, MatFormFieldModule, MatInputModule,
    MatIconModule, MatDatepickerModule, MatNativeDateModule,
    MatListModule, MatSelectModule, MatDialogModule,
    MatCardModule, MatChipsModule,
    MatTabsModule, MatCheckboxModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule, MatButtonModule, AlertModule
  ],
  providers: providers,
  bootstrap: [AppComponent]
})
export class AppModule { }

@NgModule({})
export class RevenueSharedModule{
    // @ts-ignore
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AppModule,
            providers: providers
        };
    }
}
