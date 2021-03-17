export interface PurOrderItemCommand{
    purchaseOrderId: string;
    itemId: string;
    orderedQuantity: any;
    status: number;
    id: string;
    createDate: Date;
    void: boolean;
    voidDate?: Date;
    userId: string;
}