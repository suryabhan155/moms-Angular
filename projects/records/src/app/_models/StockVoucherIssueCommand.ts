export interface StockVoucherIssueCommand{
    stockVoucherId: string;
    issueDate: string;
    goodReceivedNoteItemId: string;
    issuedQuantity: any;
    createDate: Date;
    id: string;
    userId: string;
    void: boolean;
    voidDate: Date;
}