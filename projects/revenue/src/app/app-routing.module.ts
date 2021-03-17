import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BilingManageComponent } from './biling_management/biling-manage/biling-manage.component';
import { BillingdiscountManageComponent } from './biling_management/billingdiscount-manage/billingdiscount-manage.component';
import { BillingdiscountComponent } from './biling_management/billingdiscount/billingdiscount.component';
import { BillpaymentmethodComponent } from './biling_management/billpaymentmethod/billpaymentmethod.component';
import { BilltypeComponent } from './biling_management/billtype/billtype.component';
import { PaymethodManageComponent } from './biling_management/paymethod-manage/paymethod-manage.component';
import { BillConfigurationComponent } from './billing_configuration/bill-configuration/bill-configuration.component';
import { ManageBillConfigurationComponent } from './billing_configuration/manage-bill-configuration/manage-bill-configuration.component';
import { ItemSubtypeComponent } from './billing_subitem/item-subtype/item-subtype.component';
import { ItemmasterComponent } from './billing_subitem/itemmaster/itemmaster.component';
import { ItemtypeComponent } from './billing_subitem/itemtype/itemtype.component';
import { ManageItemSubtypeComponent } from './billing_subitem/manage-item-subtype/manage-item-subtype.component';
import { ManageItemTypeComponent } from './billing_subitem/manage-item-type/manage-item-type.component';
import { ManageItemmasterComponent } from './billing_subitem/manage-itemmaster/manage-itemmaster.component';
import {HomeComponent} from './home/home.component';
const routes: Routes = [
    {
        path: 'revenue/home',
        component: HomeComponent,
        pathMatch: 'full',
    },
    {
      path: 'revenue/billtype',
      component: BilltypeComponent
    },
    {
      path: 'revenue/billtype/:id',
      component: BilltypeComponent
    },
    {
      path: 'revenue/billmanage',
      component: BilingManageComponent
    },
    {
      path: 'revenue/billdiscountmanage',
      component: BillingdiscountManageComponent
    },
    {
      path: 'revenue/billdiscount',
      component: BillingdiscountComponent
    },
    {
      path: 'revenue/billdiscount/:id',
      component: BillingdiscountComponent
    },
    {
      path: 'revenue/paymethodmanage',
      component: PaymethodManageComponent
    },
    {
      path: 'revenue/paymethod',
      component: BillpaymentmethodComponent
    },
    {
      path: 'revenue/paymethod/:id',
      component: BillpaymentmethodComponent
    },
    {
      path: 'revenue/manageitemtype',
      component: ManageItemTypeComponent
    },
    {
      path: 'revenue/itemtype',
      component: ItemtypeComponent
    },
    {
      path: 'revenue/itemtype/:id',
      component: ItemtypeComponent
    },
    {
      path: 'revenue/managesubitem',
      component: ManageItemSubtypeComponent
    },
    {
      path: 'revenue/subitem',
      component: ItemSubtypeComponent
    },
    {
      path: 'revenue/subitem/:id',
      component: ItemSubtypeComponent
    },
    {
      path: 'revenue/manageitemmaster',
      component: ManageItemmasterComponent
    },
    {
      path: 'revenue/itemmastertype',
      component: ItemmasterComponent
    },
    {
      path: 'revenue/itemmastertype/:id',
      component: ItemmasterComponent
    },
    {
      path: 'revenue/manageconfiguration',
      component: ManageBillConfigurationComponent
    },
    {
      path: 'revenue/billconfiguration',
      component: BillConfigurationComponent
    },
    {
      path: 'revenue/billconfiguration/:id',
      component: BillConfigurationComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
