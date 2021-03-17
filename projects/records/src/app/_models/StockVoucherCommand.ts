export interface StockVoucherCommand{
    storeId: string;
    sourceStoreId: string;
    voucherDateTime: Date;
    id: string;
    createDate: Date;
    void: boolean;
    voidDate?: Date;
    userId: string;
}