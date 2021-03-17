export interface StoreManageCommand{
    name: string;
    category: string;
    status: number;
    id: string;
    createDate: Date;
    void: boolean;
    voidDate?: Date;
    userId: string;
}