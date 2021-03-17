export interface PurchaseOrderCommand{
    storeId: string;
    supplierId: string;
    orderNumber: string; 
    orderDateTime: Date;
    status: number;
    id: string;
    createDate: Date;
    void: boolean;
    voidDate?: Date;
    userId: string;
}