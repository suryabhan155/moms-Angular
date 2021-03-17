export interface BillingConfigrationCommand{
itemMasterId: string;
maxStock: number;
minStock: number;
purchaseUnitPrice: number;
quantityPerPurchaseUnit: number;
dispensingUnit: string;
purchaseUnit: string;
quantityPerDispenseUnit: string;
status: boolean;
id: string;
createDate: Date;
void: boolean;
voidDate?: Date;
userId: string;
}
