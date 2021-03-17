export interface BillingDiscountCommand{
    name: string;
    status: boolean;
    isPercentage: boolean;
    minDiscount: number;
    maxDiscount: number;
    needsApproval: boolean;
    id: string;
    createDate: Date;
    void: boolean;
    voidDate?: Date;
    userId: string;
}