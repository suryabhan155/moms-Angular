export interface StockVoucherItemCommand{
    stockVoucherId: string;
    itemId: string;
    quantity: number;
    id: string;
    createDate: Date;
    void: boolean;
    voidDate?: Date;
    userId: string;
}