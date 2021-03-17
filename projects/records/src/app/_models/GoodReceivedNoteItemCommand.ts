export interface GoodReceivedNoteItemCommand{
    goodReceivedNoteId: string;
    itemId: string;
    batchNumber: string;
    receivedQuantity: number;
    unitPrice: number;
    expiryDateTime: Date;
    id: string;
    createDate: Date;
    void: boolean;
    voidDate?: Date;
    userId: string;
}