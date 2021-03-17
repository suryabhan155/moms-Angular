export interface GoodReceivedNoteCommand{
    purchaseOrderId: string;
    supplierId: string;
    receivedDateTime: Date;
    id: string;
    createDate: Date;
    void: boolean;
    voidDate?: Date;
    userId: string;
}
